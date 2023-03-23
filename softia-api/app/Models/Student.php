<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Agreement;

class Student extends Model
{
    use HasFactory;

    protected $hidden = [ 'agreement_id' ];
    protected $fillable = [ 'firstname', 'lastname', 'email', 'agreement_id' ];
    public $timestamps = false;
    
    public function agreement()
    {
        return $this->belongsTo(Agreement::class);
    }
}
