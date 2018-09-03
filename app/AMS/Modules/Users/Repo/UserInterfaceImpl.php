<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Users\Repo;



//use App\AMS\Modules\Users\Mail\WelcomeMail;
use App\AMS\Modules\Users\Model\User;
use App\AMS\SystemResponse;
use Cartalyst\Sentinel\Sentinel;
use App\AMS\Modules\AmsSystem;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

Class UserInterfaceImpl extends AmsSystem implements UserInterface
{
    public $sentinel,$model;
    public function __construct(User $user, Sentinel $sentinel){
        $this->sentinel = $sentinel;
        $this->model = $user;
    }

    /**
     * @param array $credentials
     * @param $remember
     * @return SystemResponse
     */
    function systemLogin(array $credentials,$remember = false){
        try{
            $response = $this->sentinel->authenticate($credentials,$remember);
            if (!$response) return systemResponse()->status($response)->code(401)
                ->reason("Invalid Username or Password");
            return systemResponse()->data($response);
        }catch (\Exception $e){
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason($e->getMessage());
        }
    }


    /**
     * @description get the user record by certain condition
     * @param string $value value to use with the by param
     * @param string $by default ID
     * @param array $columns array of columns to select defaults to all
     * @return SystemResponse
     */
    function getUser($value ,$by = 'id' ,$columns = ['*'] ){
        try{
            $data = $this->model->where($by,$value)->select($columns)->get();
                return systemResponse()->data(($by == 'id')?$data->first():$data);
        }catch (\Exception $e){
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason($e->getMessage());
        }
    }

    /**
     * @param array $credentials
     * @return SystemResponse
     */
    function create(array $credentials){
        try{
            $user = $this->sentinel->registerAndActivate($credentials);
//            $activation = $this->sentinel->getActivationRepository()->create($user);
//            $user->activation_code = $activation->getCode();
            if ($user){
//                Mail::to($user)->send(new WelcomeMail($user));//Send Welcome and activation email.
                return systemResponse()->data($user);
            }
            return systemResponse()->status(false)->reason($user);
        }catch (\Exception $e){
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason($e->getMessage());
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
            $user = $this->sentinel->findById($id);
            if ($user){
                if(isset($data['avatar'])) $data['avatar'] =  $this->uploadFile($data['avatar'],
                    'users',md5(current_user()->id))->data['file_name'];

                $update_user = $user->update($data);
                return systemResponse()->data($update_user);
            }
            return systemResponse()->status(false)->reason($user);
        }catch (\Exception $e){
            return systemResponse()
                ->code(500)
                ->status(false)
                ->reason($e->getMessage());
        }
    }

    function log_out(){
        $logout = $this->sentinel->logout(current_user());
        return systemResponse()->data('Logout successfully');
    }

}