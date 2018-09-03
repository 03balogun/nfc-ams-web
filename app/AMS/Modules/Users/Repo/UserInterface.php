<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Users\Repo;


use App\AMS\SystemResponse;

Interface UserInterface
{
    /**
     * @param array $credentials
     * @param $remember
     * @return SystemResponse
     */
    function systemLogin(array $credentials, $remember = false);

    /**
     * @description get the user record by certain condition
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @param array $columns array of columns to select defaults to all
     * @return SystemResponse
     */
    function getUser($value ,$by = 'id' ,$columns = ['*'] );

    /**
     * @param array $credentials
     * @return SystemResponse
     */
    function create(array $credentials);

    /**
     * @param $data
     * @param $id
     * @param string $by
     * @return SystemResponse
     */
    function update($data, $id, $by = 'id');


    /**
     * @description Log user out of the system :)
     * @return SystemResponse
     */
    function log_out();

}