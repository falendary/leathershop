<?php
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
				'dbname' => 'leathershop' 
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

		$phql = 'SELECT * FROM Users WHERE login = :login: AND password = :password:';
		$user = $app->modelsManager->executeQuery($phql, array(
			'login' => $credentials->login,
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
					'id' => $user->id,
					'email' => $user->email,
					'role' => $user->role
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