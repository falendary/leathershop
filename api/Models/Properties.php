<?php

use Phalcon\Mvc\Model,
    Phalcon\Mvc\Model\Message,
    Phalcon\Mvc\Model\Validator\InclusionIn,
    Phalcon\Mvc\Model\Validator\Uniqueness;

class Properties extends Model
{
	public function validation()
	{

	}
	public function getSource()
    {
        return "Properties";
    }
}