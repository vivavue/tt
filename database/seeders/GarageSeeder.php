<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GarageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('garages')->insert([
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
