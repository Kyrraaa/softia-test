<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')->insert([
            [
                'firstname' => 'Laurine',
                'lastname' => 'PEREIRA',
                'email' => 'pereir_l@etna-alternance.net',
                'agreement_id' => 1
            ],
            [
                'firstname' => 'Perrine',
                'lastname' => 'BROCHARD',
                'email' => 'brocha_p@etna-alternance.net',
                'agreement_id' => 2
            ],
            [
                'firstname' => 'Evan',
                'lastname' => 'QUINCHON',
                'email' => 'quich_e@etna-alternance.net',
                'agreement_id' => 3
            ],
            [
                'firstname' => 'Cesario',
                'lastname' => 'BAILLEUL',
                'email' => 'baille_c@etna-alternance.net',
                'agreement_id' => 4
            ],
            [
                'firstname' => 'Anthony',
                'lastname' => 'SARGENTO',
                'email' => 'sargen_a@etna-alternance.net',
                'agreement_id' => 5
            ],
        ]);
    }
}
