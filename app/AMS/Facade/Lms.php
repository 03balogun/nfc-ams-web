<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/29/17
 * Time: 3:32 PM
 */

namespace App\HapyRide\Facade;


use Illuminate\Support\Facades\Facade;

class Lms extends Facade
{
    protected static function getFacadeAccessor()
    {
        return "Ams";
    }
}