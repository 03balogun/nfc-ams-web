<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\AMS\Ams;
use App\AMS\Modules\Users\Validators\ValidateUserLogin;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    protected $ams;

    protected $redirectTo = '/dashboard';

    public function __construct(Ams $ams)
    {
        $this->ams = $ams;
    }

    public function index()
    {
        return (current_user())?redirect()->route('dashboard.index'):
         view('welcome');
    }

    public function signIn(ValidateUserLogin $login)
    {
        $data = array_only($login->all(),['username','password','remember-me']);
        $login = $this->ams->user()->systemLogin($data, isset($data['remember-me'])?$data['remember-me']:false);
        if ($login->status){
            return redirect()->intended('attendances');
        }
        return redirect()->back()->with([
            'auth_error' => true,
            'auth_message' => ($login->reason == null)
                ? 'Invalid email or password'
                : $login->reason
        ]);
    }

    public function logOut()
    {
        $this->ams->user()->log_out();
        return redirect()->route('dashboard.index');
    }
}
