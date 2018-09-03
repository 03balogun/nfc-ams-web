<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\AMS\Modules\Users\Model\User::class, function (Faker $faker) {
    return [
        'username' => $faker->userName,
        'email' => $faker->unique()->safeEmail,
        'first_name' => $faker->unique()->firstName,
        'last_name' => $faker->unique()->lastName,
        'password' => bcrypt('admin$$'),
    ];
});
