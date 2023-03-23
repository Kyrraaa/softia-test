<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgreementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('agreements')->insert([
            [
                'name' => "Agreement 1",
                'hours' => 12
            ],
            [
                'name' => "Agreement 2",
                'hours' => 8
            ],
            [
                'name' => "Agreement 3",
                'hours' => 7
            ],
            [
                'name' => "Agreement 4",
                'hours' => 36
            ],
            [
                'name' => "Agreement 5",
                'hours' => 0
            ],
        ]);
    }
}
