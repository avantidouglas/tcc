<?php

namespace Api;

use \Api\Class\Banco;

class Enviar extends Banco
{
    public function temperatura($whatever)
    {
        $leitura = (new Banco)->retornaTeste();
        echo json_encode($leitura);
    }

    public function umidade(): array
    {
        return [
            "status" => true,
            "message" => "umidade"
        ];
    }
}
