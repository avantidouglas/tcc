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

    public function  retornaNotificao(){
        $result = (new Banco())->retornaNotificacao();
        echo json_encode($result);
    }

    public function atualizaBomba($variaveis){
        if($variaveis['bomba_ativa'] != 1 and $variaveis['bomba_ativa'] != 0){
            echo json_encode(['status' => 'error', 'message' => 'bomba_ativa deve ser 0 ou 1']);
            return;
        }

        if($variaveis['bomba_intervalo'] <= 0){
            echo json_encode(['status' => 'error', 'message' => 'bomba_intervalo deve ser maior que 0']);
            return;
        }

        if($variaveis['bomba_umidade_max'] <= 0 or $variaveis['bomba_umidade_max'] > 100){
            echo json_encode(['status' => 'error', 'message' => 'bomba_umidade_max deve ser maior que 0 e menor que 100']);
            return;
        }

        if($variaveis['bomba_tempo_vazao'] < 5){
            echo json_encode(['status' => 'error', 'message' => 'bomba_tempo_vazao deve ser maior que 5']);
            return;
        }

        $result = (new Banco())->atualizaBomba($variaveis['bomba'], $variaveis['bomba_ativa'], $variaveis['bomba_intervalo'], $variaveis['bomba_umidade_max'], $variaveis['bomba_tempo_vazao']);
        
        if($result){
            echo json_encode(['status' => 'success', 'message' => 'Bomba atualizada com sucesso']);
        }else{
            echo json_encode(['status' => 'error', 'message' => 'Erro ao atualizar bomba']);
        }
    }

    public function atualizaTempetatura($variaveis){
        if($variaveis['temperatura_max'] <= 0 or $variaveis['temperatura_max'] > 100){
            echo json_encode(['status' => 'error', 'message' => 'temperatura_max deve ser maior que 0 e menor que 100']);
            return;
        }

        $result = (new Banco())->atualizaTemperatura($variaveis['sensor'], $variaveis['temperatura_max']);
        
        if($result){
            echo json_encode(['status' => 'success', 'message' => 'Sensor atualizado com sucesso']);
        }else{
            echo json_encode(['status' => 'error', 'message' => 'Erro ao atualizar sensor']);
        }
    }
}