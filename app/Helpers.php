<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/29/17
 * Time: 9:24 AM
 */

function systemResponse(){
    return new \App\AMS\SystemResponse();
}

function current_user(){
    return \Cartalyst\Sentinel\Laravel\Facades\Sentinel::check();
}

function renderForm($form, $attr = [],$isLabelFirst = false)
{
    $html = "";
    if($isLabelFirst)$html .= form_label($form);
    $html .= form_widget($form, ['attr' => $attr]);
    if(!$isLabelFirst)$html .= form_label($form);
    $html .= form_errors($form);

    return $html;
}

function daysOfWeek($key = null){
    $days = [
        'Monday' => 'Monday',
        'Tuesday' => 'Tuesday',
        'Wednesday'=>'Wednesday',
        'Thursday'=>'Thursday',
        'Friday'=>'Friday',
    ];
    return ($key && isset($days[$key]))?$days[$key]:$days;
}

function successSession($msg = "Operation Completed Successfully"){
    return [
        'success'=>$msg
    ];
}

function errorSession($msg = "Operations could not be completed"){
    return [
        'error'=>$msg
    ];
}

function attendanceStatus($key = null){
    $arr = [
        1 => 'Present',
        2 => 'Late',
        3 => 'Absent Excused',
        4 => 'Absent Unexcused'
    ];
    return ($key && isset($arr[$key]))?$arr[$key]:$arr;
}

function levels($key = null){
    $arr = [
        '100' => '100',
        '200' => '200',
        '300' => '300',
        '400' => '400',
        '500' => '500',
        '600' => '600',
    ];
    return ($key && isset($arr[$key]))?$arr[$key]:$arr;
}
