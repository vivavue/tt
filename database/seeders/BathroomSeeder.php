<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BathroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bathrooms')->insert([
            [
                'quantity' => 1,
            ],
            [
                'quantity' => 2,
            ],
            [
                'quantity' => 3,
            ],
        ]);
    }
}
