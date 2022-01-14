<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BedroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bedrooms')->insert([
            [
                'quantity' => 1,
            ],
            [
                'quantity' => 2,
            ],
            [
                'quantity' => 3,
            ],
            [
                'quantity' => 4,
            ],
            [
                'quantity' => 5,
            ],
        ]);
    }
}
