<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Productos extends Model
{
    protected $fillable = [
        'Nombre',
        'Categoria_id',
        'Precio_individual',
        'Existencia',
    ];
    use HasFactory;
    use SoftDeletes;
}
