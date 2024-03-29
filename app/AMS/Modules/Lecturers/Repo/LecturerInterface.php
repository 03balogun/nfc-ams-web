<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Lecturers\Repo;


use App\AMS\SystemResponse;

Interface LecturerInterface
{

    /**
     * @description Creates a new record on a model
     * @param array $data
     * @return SystemResponse
     */
    function create(array $data);

    /**
     * @description get a record by certain condition
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @param array $columns array of columns to select defaults to all
     * @return SystemResponse
     */
    function get($value ,$by = 'id' ,$columns = ['*'] );

    /**
     * @description get all record by certain condition
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @param array $columns array of columns to select defaults to all
     * @return SystemResponse
     */
    function getRecords($columns = ['*'], $value = null,$by = 'id');

    /**
     * @param $data
     * @param $id
     * @param string $by
     * @return SystemResponse
     */
    function update($data, $id, $by = 'id');

    /**
     * @description Delete a record belonging to the current user
     * @param $value
     * @param string $by
     * @return SystemResponse
     */
    function delete($value, $by = 'id');
}