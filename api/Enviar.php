<?php

namespace Api;

use \Api\Class\Banco;

class Enviar extends Banco
{
    public function temperatura($whatever)
    {
        exit;
    }

    public function umidade()
    {
        $leitura = [
            "status" => true,
            "message" => "umidade"
        ];
        echo json_encode($leitura);
    }
}
