<?php

namespace Api;

use Api\Class\Banco;

class Config
{
    public function retornaBomba($bomba){
        $result = (new Banco())->retornaConfigBomba($bomba['bomba']);
        echo json_encode($result);
    }

    public function retornaTemperatura($sensor){
        $result = (new Banco())->retornaConfigTemperatura($sensor['sensor']);
        echo json_encode($result);
    }

    public function atualizaBomba(){

    }

    public function atualizaTempetatura(){
        
    }
    
}