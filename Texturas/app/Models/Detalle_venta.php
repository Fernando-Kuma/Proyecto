<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Detalle_venta extends Model
{
    protected $fillable = [
        'Producto_id',
        'Cantidad',
        'Costo',
        'Venta_id',
    ];
    use HasFactory;
    use SoftDeletes;
}
