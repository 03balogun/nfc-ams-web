<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/29/17
 * Time: 9:31 AM
 */

namespace App\AMS;


class SystemResponse
{
    public $status = true;
    public $code = 200;
    public $data;
    public $reason;

    /**
     * @param $data
     * @return $this
     */
    public function data($data = null){
        $this->data = $data;
        return $this;
    }

    /**
     * @param int $code
     * @return $this
     */
    public function code($code=200){
        $this->code = $code;
        return $this;
    }

    /**
     * @param bool $status
     * @return $this
     */
    public function status($status=true){
        $this->status = $status;
        return $this;
    }

    public function reason($reason = null){
        $this->reason = $reason;
        return $this;
    }

}