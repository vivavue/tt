<?php

namespace App\Models;

use App\Models\House;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bathroom extends Model
{
    use HasFactory;

    public function houses()
    {
        return $this->hasMany(House::class);
    }
}
