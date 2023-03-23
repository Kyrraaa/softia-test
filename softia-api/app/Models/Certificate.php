<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;

    protected $hidden = [ 'student_id' ];
    protected $fillable = [ 'message', 'student_id' ];
    public $timestamps = false;

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
