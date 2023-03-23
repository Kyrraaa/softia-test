<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agreement extends Model
{
    protected $fillable = [ 'name', 'hours' ];
    public $timestamps = false;
    use HasFactory;
}
