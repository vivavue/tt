<?php

namespace App\Models;

use App\Models\Garage;
use App\Models\Storey;
use App\Models\Bedroom;
use App\Models\Bathroom;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class House extends Model
{
    use HasFactory;

    public function bedroom()
    {
        return $this->belongsTo(Bedroom::class);
    }

    public function bathroom()
    {
        return $this->belongsTo(Bathroom::class);
    }

    public function garage()
    {
        return $this->belongsTo(Garage::class);
    }

    public function storey()
    {
        return $this->belongsTo(Storey::class);
    }

    public function scopeSearch($query, $term)
    {
        $term = "%$term%";
        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term);
        });
    }

    public function scopeHousesQuery($query)
    {
        $search_term = request('q', '');

        $startPrice = request('startPrice');
        $endPrice = request('endPrice');
        $selectedBedroom = request('selectedBedroom');
        $selectedBathroom = request('selectedBathroom');
        $query->with(['bedroom', 'bathroom', 'storey', 'garage'])
            ->when($startPrice, function ($query) use ($startPrice) {
                $query->where('price', '>', $startPrice);
            })
            ->when($endPrice, function ($query) use ($endPrice) {
                $query->where('price', '<', $endPrice);
            })
            ->when($selectedBedroom, function ($query) use ($selectedBedroom) {
                $query->where('bedroom_id', $selectedBedroom);
            })
            ->when($selectedBathroom, function ($query) use ($selectedBathroom) {
                $query->where('bathroom_id', $selectedBathroom);
            })->search(trim($search_term))->get();
    }
}
