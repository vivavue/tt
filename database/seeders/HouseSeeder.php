<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('houses')->insert([
            [
                'name' => 'The Victoria',
                'price' => 374662,
                'bedroom_id' => 4,
                'bathroom_id' => 2,
                'storey_id' => 2,
                'garage_id' => 2,
            ],
            [
                'name' => 'The Xavier',
                'price' => 513268,
                'bedroom_id' => 4,
                'bathroom_id' => 2,
                'storey_id' => 1,
                'garage_id' => 2,
            ],
            [
                'name' => 'The Como',
                'price' => 454990,
                'bedroom_id' => 4,
                'bathroom_id' => 3,
                'storey_id' => 2,
                'garage_id' => 3,
            ],
            [
                'name' => 'The Aspen',
                'price' => 384356,
                'bedroom_id' => 4,
                'bathroom_id' => 2,
                'storey_id' => 2,
                'garage_id' => 2,
            ],
            [
                'name' => 'The Lucretia',
                'price' => 572002,
                'bedroom_id' => 4,
                'bathroom_id' => 3,
                'storey_id' => 2,
                'garage_id' => 2,
            ],
            [
                'name' => 'The Toorak',
                'price' => 521951,
                'bedroom_id' => 5,
                'bathroom_id' => 2,
                'storey_id' => 1,
                'garage_id' => 2,
            ],
            [
                'name' => 'The Skyscape',
                'price' => 263604,
                'bedroom_id' => 3,
                'bathroom_id' => 2,
                'storey_id' => 2,
                'garage_id' => 2,
            ],
            [
                'name' => 'The Clifton',
                'price' => 386103,
                'bedroom_id' => 3,
                'bathroom_id' => 2,
                'storey_id' => 1,
                'garage_id' => 1,
            ],
            [
                'name' => 'The Geneva',
                'price' => 390600,
                'bedroom_id' => 4,
                'bathroom_id' => 3,
                'storey_id' => 2,
                'garage_id' => 2,
            ],
        ]);
    }
}
