<?php

namespace App\AMS\Modules\Users\Mail;


use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $user;
    public $url;
    public function __construct($user)
    {
        $this->user = $user;
        $this->url = route('mail.activate',$user->activation_code);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('core.mail.welcome');
    }
}
