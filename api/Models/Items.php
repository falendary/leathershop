<?php

use Phalcon\Mvc\Model,
    Phalcon\Mvc\Model\Message,
    Phalcon\Mvc\Model\Validator\InclusionIn,
    Phalcon\Mvc\Model\Validator\Uniqueness;

class Items extends Model
{
	public function validation()
	{
		
	}
	public function getSource()
    {
        return "Items";
    }
}