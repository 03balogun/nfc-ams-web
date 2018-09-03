<?php

namespace App\Http\Middleware;

use Closure;

class SentinelAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!current_user()) {
            if (!current_user()) {
                //If not json url and url not relating to password reset to save
                if (!$request->wantsJson()
                    && !str_contains(url()->current(),'password'))session(['url.intended' => url()->previous()]);
                return redirect()->route('login')->with(errorSession('Sign In to continue'));
            }
        }
        return $next($request);
    }
}
