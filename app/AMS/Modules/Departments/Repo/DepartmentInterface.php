<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Departments\Repo;


use App\AMS\SystemResponse;

Interface DepartmentInterface
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

    /**
     * @description get all record as array
     * @param array $columns array of columns to select defaults to all
     * @param array $options
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @return SystemResponse
     */
    function getRecordsArray($columns = ['*'],array $options = ['key'=>'id','value'=>'name'], $value = null,$by = 'id');

    /**
     * @param array $columns
     * @param null $value
     * @param string $by
     * @return SystemResponse
     */
    function getDepartmentsWithCourses($columns = ['*'], $value = null,$by = 'id');

}