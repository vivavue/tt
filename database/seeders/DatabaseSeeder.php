<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(HouseSeeder::class);
        $this->call(BathroomSeeder::class);
        $this->call(BedroomSeeder::class);

        $this->call(GarageSeeder::class);
        $this->call(StoreySeeder::class);
    }
}
