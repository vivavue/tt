<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoreySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('storeys')->insert([
            [
                'quantity' => 1,
            ],
            [
                'quantity' => 2,
            ],
        ]);
    }
}
