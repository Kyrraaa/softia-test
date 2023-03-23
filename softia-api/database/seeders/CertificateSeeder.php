<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertificateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('certificates')->insert([
            [
                'message' => 'Certificate 1',
                'student_id' => 1
            ],
            [
                'message' => "Certificate 2",
                'student_id' => 2
            ],
            [
                'message' => "Certificate 3",
                'student_id' => 3
            ],
            [
                'message' => "Certificate 4",
                'student_id' => 4
            ],
            [
                'message' => "Certificate 5",
                'student_id' => 5
            ],
        ]);
    }
}
