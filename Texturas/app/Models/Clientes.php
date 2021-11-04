<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Clientes extends Model
{
    protected $fillable = [
        'Nombre',
        'Apellidos',
        'Correo',
        'Contraseña',
        'Telefono'
    ];
    use HasFactory;
    use SoftDeletes;
}
