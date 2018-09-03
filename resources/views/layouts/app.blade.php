<!doctype html>
<!--[if lte IE 9]>
<html lang="en" class="lt-ie10 lt-ie10-msg no-focus"> <![endif]-->
<!--[if gt IE 9]><!-->
<html lang="en" class="no-focus"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>Attendance Management System :: @yield('title')</title>
    <meta name="description"
          content="Discussion Platform">
    <meta name="author" content="Balogun Wahab">
    <meta name="theme-color" content="#42a5f5"/>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta property="og:title" content="AMS">
    <meta property="og:site_name" content="AMS">
    <meta property="og:description"
          content="Attendance Management System">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <link rel="stylesheet" id="css-main" href="{{asset('assets/css/style.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
    @yield('page-css')
</head>
<body>
<div id="page-container"
     class="@if(current_user()) sidebar-inverse side-scroll side-trans-enabled sidebar-o @endif page-header-inverse main-content-boxed @yield('additional-class') ">
    @if(current_user())
        <nav id="sidebar">
            <div id="sidebar-scroll">
                <div class="sidebar-content">
                    <div class="content-header px-15">
                        <div class="content-header-section sidebar-mini-visible-b">
<span class="content-header-item font-w700 font-size-xl float-left animated fadeIn">
<span class="text-dual-primary-dark">c</span><span class="text-primary">b</span>
</span>
                        </div>
                        <div class="content-header-section text-center align-parent sidebar-mini-hidden">
                            <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r"
                                    data-toggle="layout" data-action="sidebar_close">
                                <i class="fa fa-times text-danger"></i>
                            </button>
                            <div class="content-header-item">
                                <a class="link-effect font-w700" href="javascript:;">
                                    <i class="si si-calendar text-primary"></i>
                                    <span class="font-size-xl text-dual-primary-dark">Attendance</span><span
                                            class="font-size-xl text-primary">System</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="content-side content-side-full content-side-user px-10 align-parent">
                        <div class="sidebar-mini-visible-b align-v animated fadeIn">
                            <img class="img-avatar img-avatar32" src="{{asset('assets/img/avatars/avatar0.jpg')}}"
                                 alt="">
                        </div>
                        <div class="sidebar-mini-hidden-b text-center">
                            <a class="img-link" href="javascript:;">
                                <img class="img-avatar" src="{{asset('assets/img/avatars/avatar0.jpg')}}" alt="">
                            </a>
                            <ul class="list-inline mt-10">
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase"
                                       href="javascript:;">{{current_user()->username}}</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark" data-toggle="layout"
                                       data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                        <i class="si si-drop"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark" href="{{route('logout')}}">
                                        <i class="si si-logout"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="content-side content-side-full">
                        <ul class="nav-main">
                            <li>
                                <a class="@yield('dashboard')" href="javascript:;"><i class="si si-cup"></i><span
                                            class="sidebar-mini-hide">Dashboard</span></a>
                            </li>
                            <li class="nav-main-heading"><span class="sidebar-mini-visible">MG</span><span
                                        class="sidebar-mini-hidden">Manage</span></li>
                            <li>
                                <a class="@yield('departments')" href="{{route('departments.index')}}">
                                    <i class="fa fa-bank"></i>
                                    <span class="sidebar-mini-hide">Departments</span></a>
                            </li>
                            <li>
                                <a class="@yield('lecturers')" href="{{route('lecturers.index')}}">
                                    <i class="si si-graduation"></i>
                                    <span class="sidebar-mini-hide">Lecturers</span></a>
                            </li>
                            <li>
                                <a class="@yield('courses')" href="{{route('courses.index')}}">
                                    <i class="si si-book-open"></i>
                                    <span class="sidebar-mini-hide">Courses</span></a>
                            </li>
                            <li>
                                <a class="@yield('students')" href="{{route('students.index')}}">
                                    <i class="si si-users"></i>
                                    <span class="sidebar-mini-hide">Students</span></a>
                            </li>
                            <li>
                                <a class="@yield('timetables')" href="{{route('timetables.index')}}">
                                    <i class="si si-calendar"></i>
                                    <span class="sidebar-mini-hide">Time Tables</span></a>
                            </li>
<<<<<<< HEAD
=======
                            <li>
                                <a class="@yield('attendances')" href="{{route('attendances.index')}}">
                                    <i class="si si-pie-chart"></i>
                                    <span class="sidebar-mini-hide">Attendances</span></a>
                            </li>
>>>>>>> master

                            <li class="nav-main-heading"><span class="sidebar-mini-visible">MR</span><span
                                        class="sidebar-mini-hidden">More</span></li>
                            <li>
                                <a class="@yield('users')" href="javascript:;">
                                    <i class="si si-user-following"></i>
                                    <span class="sidebar-mini-hide">Users</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <header id="page-header">
            <div class="content-header">
                <div class="content-header-section">
                    <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout"
                            data-action="sidebar_toggle">
                        <i class="fa fa-navicon"></i>
                    </button>
                    <button type="button" class="btn btn-circle btn-dual-secondary" data-toggle="layout"
                            data-action="header_search_on">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                <div class="content-header-section">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{current_user()->username}}<i class="fa fa-angle-down ml-5"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right min-width-150"
                             aria-labelledby="page-header-user-dropdown">
                            <a class="dropdown-item" href="javascript:;">
                                <i class="si si-user mr-5"></i> Profile
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="{{route('logout')}}">
                                <i class="si si-logout mr-5"></i> Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    @endif
    <main id="main-container">
        @yield('content')
    </main>
    <footer id="page-footer" class="bg-white opacity-0">
        <div class="content py-20 font-size-xs clearfix">
            <div class="float-right">
                Crafted with
                <i class="fa fa-heart text-pulse"></i> by <a class="font-w600" href="javascript:;" target="_blank">Balogun</a>
            </div>
            <div class="float-left">
                <a class="font-w600" href="https://goo.gl/po9Usv" target="_blank">AMS</a> &copy; <span
                        class="js-year-copy"></span>
            </div>
        </div>
    </footer>
</div>
<script src="{{asset('assets/js/app.min-2.0.js')}}"></script>
<script src="{{asset('assets/js/plugins/bootstrap-notify/bootstrap-notify.min.js')}}"></script>
<script src="{{asset('js/custom.js')}}"></script>
@yield('page-js')
@if(session()->get('success'))
    <script>
        notifyPop({message: "{{session()->get('success')}}", type: 'success'});
        {{session()->forget('success')}}
    </script>
@elseif(session()->get('error'))
    <script>
        notifyPop({message: "{{session()->get('error')}}", type: 'danger'});
        {{session()->forget('error')}}
    </script>
@endif
<script>
    if ($.fn.dataTable.ext) $.fn.dataTable.ext.errMode = 'none';
</script>
</body>
</html>
