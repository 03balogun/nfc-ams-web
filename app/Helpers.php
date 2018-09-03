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