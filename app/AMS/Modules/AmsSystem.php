<?php
/**
 * Created by PhpStorm.
 * User: Balogun W.
 * Date: 10/31/17
 * Time: 12:21 PM
 */

namespace App\AMS\Modules;


use App\AMS\SystemResponse;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class AmsSystem
{
    protected $model;
    protected $module_name;
    public function __construct($model, $module_name){
        $this->model = $model;
        $this->module_name = $module_name;
    }


    /**
     * @description Creates a new record on a model
     * @param array $data
     * @return SystemResponse
     */
    function create(array $data){
        //TODO handle requests that have
        try{
            $record = $this->model->create($data);
            if ($record) return systemResponse()->data($record);
            return systemResponse()->status(false)->reason($record);
        }catch (\Exception $e){
            Log::critical($e->getMessage());
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason("Operation could not be completed");
        }
    }

    /**
     * @description get a record by certain condition
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @param array $columns array of columns to select defaults to all
     * @param array $with
     * @return SystemResponse
     */
    function get($value ,$by = 'id' ,$columns = ['*'], $with = [] ){
        try{
            $data = $this->model->where($by,$value)->select($columns);
            if (count($with)) $data->with($with);
            return systemResponse()->data(($by == 'id' || $by !=null)?$data->first():$data->get());
        }catch (\Exception $e){
            Log::critical($e->getMessage());
            dd($e->getMessage());
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason($e->getMessage());
        }
    }

    /**
     * @description get all record by certain condition
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @param array $columns array of columns to select defaults to all
     * @return SystemResponse
     */
    function getRecords($columns = ['*'], $value = null,$by = 'id'){
        try{
            $data = (!$value) ?
                $this->model->select($columns):
                $this->model->where($by,$value)->select($columns);
            return systemResponse()->data($data->latest()->get());
        }catch (\Exception $e){
            Log::critical($e->getMessage());
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason("Operation could not be completed");
        }
    }

    /**
     * @description get all record as array
     * @param array $columns array of columns to select defaults to all
     * @param array $options
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @return SystemResponse
     */
    function getRecordsArray($columns = ['*'],array $options = ['key'=>'id','value'=>'name'], $value = null,$by = 'id'){
        try{
            $data = (!$value) ?
                $this->model->select($columns):
                $this->model->where($by,$value)->select($columns);
            $data = $data->pluck($options['value'],$options['key'])->all([], 'true');
            return systemResponse()->data($data);
        }catch (\Exception $e){
            Log::critical($e->getMessage());
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason("Operation could not be completed");
        }
    }

    /**
     * @param $data
     * @param $id
     * @param string $by
     * @return SystemResponse
     */
    function update($data, $id, $by = 'id'){
        try{
            $record = $this->model->where($by,$id);
            if ($record){
                $updated_record = $record->update($data);
                return systemResponse()->data($updated_record);
            }
            return systemResponse()->status(false)->reason($record);
        }catch (\Exception $e){
            Log::critical($e->getMessage());
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason("Operation could not be completed");
        }
    }

    /**
     * @description Delete a record belonging to the current user
     * @param $value
     * @param string $by
     * @return SystemResponse
     */
    function delete($value, $by = 'id'){
        try{
            $record = $this->get($value, $by)->data;
            if($record){
                $delete = $record->delete();
                return systemResponse()->data($delete);
            }
            return systemResponse()->reason($record)->status(false);
        }catch (\Exception $e){
            dd($e->getMessage());
            Log::critical($e->getMessage());
            return systemResponse()->reason("Operation could not be completed")->status(false);
        }
    }


    /**
     * @param UploadedFile $file
     * @param $module_name
     * @return SystemResponse
     */
    public function uploadFile(UploadedFile $file, $filename = null){
        $module_name = strtolower($this->module_name);
        $filename ?
            $data = ['file_name' => $filename.'.'.$file->extension()]
            :
            $data = ['file_name' => $file->hashName()];
        try {
            $path = Storage::putFileAs("public/attachments/{$module_name}/", $file, $data['file_name']);
            $data['file_path'] = $path;
        } catch (\Exception $e) {
            Log::error($e->getTraceAsString());
            return systemResponse()->reason("Operation could not be completed")->code(500)->status(false);
        }
        return systemResponse()->data($data);
    }




}