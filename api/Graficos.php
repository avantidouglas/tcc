<?php

namespace Api;

use Api\Class\Banco;

class Graficos{
    function geraGraficoLinha( $variaveis ){
        $result = (new Banco())->retornaLeituraGrafico($variaveis['sensor']);
        echo json_encode($result);
    }

    function geraGraficoDonut( $variaveis ){
        $result = (new Banco())->retornaLeituraGraficoUnit($variaveis['sensor']);
        echo json_encode($result);
    }
}