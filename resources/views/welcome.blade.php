@extends('layouts.app')
@section('title') Login @endsection
@section('content')
    <div class="bg-body-dark"
         style="background-image: url('{{asset('assets/img/various/bg-pattern-inverse.png')}}'),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
                 background-blend-mode: multiply;
                 background-repeat: no-repeat;
                 background-size: cover;">
        <div class="row mx-0 justify-content-center">
            <div class="hero-static col-lg-6 col-xl-4">
                <div class="content content-full overflow-hidden">
                    <div class="py-30 text-center">
                        <a class="link-effect font-w700" href="javascript:;">
                            {{--<i class="si si-fire"></i>--}}
                            {{--<span class="font-size-xl text-primary-dark">T</span><span--}}
                                    {{--class="font-size-xl">Klin</span>--}}
                        </a>
                        <h1 class="h4 font-w700 text-white mt-30 mb-10">NFC - ATTENDANCE MANAGEMENT SYSTEM</h1>
                        <h2 class="h5 font-w400 text-muted mb-0"></h2>
                    </div>
                    <form class="js-validation-signin" action="{{route('login.post')}}" method="post">
                        {{csrf_field()}}
                        <div class="block block-themed block-rounded block-shadow">
                            <div class="block-header bg-gd-dusk">
                                <h3 class="block-title">Please Sign In</h3>
                                {{--<div class="block-options">--}}
                                {{--<button type="button" class="btn-block-option">--}}
                                {{--<i class="si si-wrench"></i>--}}
                                {{--</button>--}}
                                {{--</div>--}}
                            </div>
                            <div class="block-content">
                                @if(session('auth_error'))
                                    <div class="alert alert-danger alert-dismissable" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h5 class="alert-heading font-size-h4 font-w400">Error</h5>
                                        <p class="mb-0"><strong>{{ session('auth_message')}}</strong></p>
                                    </div>
                                @endif
                                @if($errors = session('errors'))
                                    <div class="alert alert-danger alert-dismissable" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h5 class="alert-heading font-size-h4 font-w400">Error</h5>
                                        <ul class="mb-0">
                                            @foreach($errors->all() as $error_msg)
                                                <li><strong>{{$error_msg}}</strong></li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                <div class="form-group row">
                                    <div class="col-12">
                                        <label for="login-username">Username</label>
                                        <input type="text" class="form-control" id="login-username"
                                               name="username">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-12">
                                        <label for="login-password">Password</label>
                                        <input type="password" class="form-control" id="login-password"
                                               name="password">
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-sm-6 d-sm-flex align-items-center push">
                                        <div class="custom-control custom-checkbox mr-auto ml-0 mb-0">
                                            <input type="checkbox" class="custom-control-input"
                                                   id="login-remember-me" value="true" name="remember-me">
                                            <label class="custom-control-label" for="login-remember-me">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 text-sm-right push">
                                        <button type="submit" class="btn btn-alt-primary">
                                            <i class="si si-login mr-10"></i> Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection