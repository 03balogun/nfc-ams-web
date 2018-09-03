<?php

use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = DB::table('services');
        $table->truncate();

        $table->insert([
            ['name' => '2 Piece Suite (Men)','price'=>1400],
            ['name' => '2 Piece Suite (Children)','price'=>500],
            ['name' => '3 Piece Suite (Men)','price'=>1700],
            ['name' => '3 Piece Suite (Women)','price'=>1250],
            ['name' => '3 Piece Suite (Children)','price'=>600],
            ['name' => 'Jacket/Blazer','price'=>700],
            ['name' => 'Trousers','price'=>500],
            ['name' => 'Trousers (Children)','price'=>250],
            ['name' => 'Jeans Trousers (Men)','price'=>600],
            ['name' => 'Jeans Trousers (Women)','price'=>550],
            ['name' => 'Tie','price'=>300],
            ['name' => 'Tie (Children)','price'=>100],
            ['name' => 'Shirt Men (Hang)','price'=>400],
            ['name' => 'Shirt Men (Fold)','price'=>400],
            ['name' => 'Shirt Women (Hand)','price'=>300],
            ['name' => 'Shirt Women (Fold)','price'=>300],
            ['name' => 'T-Shirt (Men)','price'=>300],
            ['name' => 'T-Shirt (Children)','price'=>100],
            ['name' => 'Polo Shirt (Men)','price'=>350],
            ['name' => 'Polo Shirt (Children)','price'=>150],
        ]);
    }
}
