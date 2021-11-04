<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Movimientos extends Model
{
    protected $fillable = [
        'Tipo_de_movimiento',
        'Producto_id',
        'Cantidad',
        'Usuario_id',
    ];
    use HasFactory;
    use SoftDeletes;
}
