<?php
	Header('Content-Type: text/html; charset=UTF-8');
	session_start();

	$loader = new \Phalcon\Loader();

	$loader->registerDirs(array(
	    __DIR__ . '/Models/'
	))->register();


	$di = new \Phalcon\DI\FactoryDefault();

	$di->set('db', function(){
		return new \Phalcon\Db\Adapter\Pdo\Mysql(array(
				'host' => 'localhost',
				'username' => 'root',
				'password' => '',
				'dbname' => 'repair_db',
				'charset'  => 'utf8',
				"options" => array(
                            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
                        )
			));
	});

	$app = new \Phalcon\Mvc\Micro($di);

	$app->get('/products', function () use ($app)
	{
		$phql = 'SELECT * FROM Products';
		$products = $app->modelsManager->executeQuery($phql);

		$data = array();
		foreach ($products as $product) {
			$data[] = array (
				'id' => $product->id,
				'product_name' => $product->product_name,
				'price' => $product->price
			);
		}

		echo json_encode($data);
	});

	$app->get('/auto/brands', function () use ($app)
	{
		$phql = 'SELECT * FROM Brands';
		$brands = $app->modelsManager->executeQuery($phql);

		$data = array();
		foreach ($brands as $brand) {
			$data[] = array (
				'brand_id' => $brand->brand_id,
				'brand_name' => $brand->brand_name,
				'brand_slug' => $brand->brand_slug
			);
		}

		echo json_encode($data);
	});

	$app->get('/auto/brands/{id:[0-9]+}', function ($id) use ($app)
	{
		$phql = 'SELECT * FROM Brands WHERE brand_id = :id:';
		$brand = $app->modelsManager->executeQuery($phql, array(
			'id' => $id
		))->getFirst();

		$response = new Phalcon\Http\Response();

		$response->setJsonContent(array(
			'brand_id' => $brand->brand_id,
			'brand_name' => $brand->brand_name,
            'brand_logo' => $brand->brand_logo
		));

		return $response;
	});

	$app->get('/auto/categories', function () use ($app)
    	{
    		$phql = 'SELECT * FROM Categories';
    		$categories = $app->modelsManager->executeQuery($phql);

    		$data = array();
    		foreach ($categories as $category) {
    			$data[] = array (
    				'category_id' => $category->category_id,
    				'name' => $category->name,
    				'slug' => $category->slug
    			);
    		}

    		echo json_encode($data,JSON_UNESCAPED_UNICODE);
    	});

    $app->get('/auto/models/{brand}', function ($brand) use ($app)
		{
			$phql = 'SELECT Autos.*, Brands.* FROM Brands JOIN Autos
            					ON Brands.brand_id = Autos.brands_brand_id
            					WHERE Brands.brand_name = :brand:';

			$autos = $app->modelsManager->executeQuery($phql, array(
				'brand' => $brand
			));

			$data = array();

			foreach ($autos as $auto) {
				$data[] = array (
					'auto_id' => $auto->autos->auto_id,
					'auto_name' => $auto->autos->auto_name,
					'auto_slug' => $auto->autos->auto_slug,
					'brand_slug' => $auto->brands->brand_slug,
					'brand' => $auto->brands->brand_name,
					'year' => $auto->autos->year
				);
			}

			echo json_encode($data,JSON_UNESCAPED_UNICODE);
		});

	$app->get('/auto/models/{brand}/{auto}', function ($brand, $auto) use ($app)
    		{
    			$phql = 'SELECT Items.*, Autos.*, Properties.price, Categories.category_name, Categories.category_slug
    						FROM Items
    							INNER JOIN Autos
                					ON Items.autos_auto_id = Autos.auto_id
                				INNER JOIN Properties
                					ON Items.item_id = Properties.items_item_id
                				INNER JOIN Categories
                					On Items.categories_category_id = category_id
                				WHERE auto_slug = :auto:';

    			$items = $app->modelsManager->executeQuery($phql, array(
    				'auto' => $auto
    			));

    			$data = array();

    			foreach ($items as $item) {
    				$data[] = array (
    					'auto_id' => $item->autos->auto_id,
    					'auto_name' => $item->autos->auto_name,
    					'price' => $item->price,
    					'category_name' => $item->category_name,
    					'category_slug' => $item->category_slug,
    					'year' => $item->autos->year,
    					'name' => $item->items->name
    				);
    			}

    			echo json_encode($data,JSON_UNESCAPED_UNICODE);
    		});


	$app->get('/products/search/{name}', function ($name)
	{

		
	});

	$app->get('/products/{id:[0-9]+}', function ($id) use ($app)
	{
		$phql = 'SELECT * FROM Products WHERE id = :id:';
		$product = $app->modelsManager->executeQuery($phql, array(
			'id' => $id
		))->getFirst();

		$response = new Phalcon\Http\Response();

		if ($product == false) {
			$response->setJsonContent(array('status' => 'NOT-FOUND'));
		} else {
			$response->setJsonContent(array(
				'status' => 'FOUND',
				'data' => array(
					'id' => $product->id,
					'name' => $product->name
				)
			));
		}

		return $response;
	});

	$app->post('/products', function ()
	{
		
	});

	$app->put('/products/{id: [0-9]+}', function ()
	{
		
	});

	$app->delete('/products/{id: [0-9]+}', function ()
	{
		
	});

	/*
	 * Users API Section
	 */
	$app->post('/user', function() use ($app)
	{
		$credentials = $app->request->getJsonRawBody();

		$phql = 'SELECT * FROM Users WHERE username = :username: AND password = :password:';
		$user = $app->modelsManager->executeQuery($phql, array(
			'username' => $credentials->login,
			'password' => $credentials->password
		))->getFirst();

		$response = new Phalcon\Http\Response();

		$_SESSION['uid'] = uniqid('ang_');

		if ($user == false) {
			$response->setJsonContent(array('status' => 'NOT-FOUND'));
		} else {
			$response->setJsonContent(array(
				'status' => 'FOUND',
				'sessionId' => $_SESSION['uid'],
				'user' => array(
					'id' => $user->user_id,
					'email' => $user->email
				)
			));
		}

		return $response;

	});

	$app->notFound(function () use ($app) {
    	$app->response->setStatusCode(404, "Not Found")->sendHeaders();
    	echo 'This is crazy, but this page was not found!';
	});

	$app->handle();
?>