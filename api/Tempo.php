<?php
namespace Api;

class Tempo{
    public function apiTempo()
    {
        $dados = json_decode(file_get_contents('https://api.hgbrasil.com/weather?woeid=455827&key=a425a565'), true); // Recebe os dados da API
        $situacao = self::retornaCodigo($dados['results']['condition_code']);
        $turno = $dados['results']['currently'];
        $temperatura = $dados['results']['temp'];
        $cidade = $dados['results']['city'];
        $umidade = $dados['results']['humidity'];
        $nascer_sol = $dados['results']['sunrise'];
        $por_sol = $dados['results']['sunset'];
        $array = [
            'situacao' => $situacao,
            'turno' => $turno,
            'temperatura' => $temperatura,
            'cidade' => $cidade,
            'umidade' => $umidade,
            'nascer_sol' => $nascer_sol,
            'por_sol' => $por_sol];

        echo json_encode($array);
    }

    private function retornaCodigo($codigo): string
    {
        switch($codigo){
            case '0': 
            $situacao = 'Tempestade forte';
            break;
            case '1': 
            $situacao = 'Tempestade tropical';
            break;
            case '2': 
            $situacao = 'Furacão';
            break;
            case '3': 
            $situacao = 'Tempestades severas';
            break;
            case '4': 
            $situacao = 'Tempestades';
            break;
            case '5': 
            $situacao = 'Misto de neve e chuva';
            break;
            case '6': 
            $situacao = 'Misto chuva e gelo';
            break;
            case '7': 
            $situacao = 'Misto neve e gelo';
            break;
            case '8': 
            $situacao = 'Geada fina';
            break;
            case '9': 
            $situacao = 'Chuviscos';
            break;
            case '10': 
            $situacao = 'Congelamento chuva';
            break;
            case '11': 
            $situacao = 'Alguns chuviscos';
            break;
            case '12': 
            $situacao = 'Alguns chuviscos';
            break;
            case '13': 
            $situacao = 'Neve baixa';
            break;
            case '14': 
            $situacao = 'Tempestade com neve';
            break;
            case '15': 
            $situacao = 'Ventania com neve';
            break;
            case '16': 
            $situacao = 'Neve';
            break;
            case '17': 
            $situacao = 'Granizo';
            break;
            case '18': 
            $situacao = 'Gelo';
            break;
            case '19': 
            $situacao = 'Poeira';
            break;
            case '20': 
            $situacao = 'Neblina';
            break;
            case '21': 
            $situacao = 'Tempestade de areia';
            break;
            case '22': 
            $situacao = 'Fumacento';
            break;
            case '23': 
            $situacao = 'Vento acentuado';
            break;
            case '24': 
            $situacao = 'Ventania';
            break;
            case '25': 
            $situacao = 'Tempo frio';
            break;
            case '26': 
            $situacao = 'Tempo nublado';
            break;
            case '27': 
            $situacao = 'Tempo limpo';
            break;
            case '28': 
            $situacao = 'Tempo nublado';
            break;
            case '29': 
            $situacao = 'Parcialmente nublado';
            break;
            case '30': 
            $situacao = 'Parcialmente nublado';
            break;
            case '31': 
            $situacao = 'Tempo limpo';
            break;
            case '32': 
            $situacao = 'Ensolarado';
            break;
            case '33': 
            $situacao = 'Estrelado';
            break;
            case '34': 
            $situacao = 'Ensolarado com muitas nuvens';
            break;
            case '35': 
            $situacao = 'Misto chuva e granizo';
            break;
            case '36': 
            $situacao = 'Ar quente';
            break;
            case '37': 
            $situacao = 'Tempestades isoladas';
            break;
            case '38': 
            $situacao = 'Trovoadas dispersas';
            break;
            case '39': 
            $situacao = 'Trovoadas dispersas';
            break;
            case '40': 
            $situacao = 'Chuvas esparsas';
            break;
            case '41': 
            $situacao = 'Pesados neve';
            break;
            case '42': 
            $situacao = 'Chuviscos com neve';
            break;
            case '43': 
            $situacao = 'Neve pesada';
            break;
            case '44': 
            $situacao = 'Sol com poucas nuvens';
            break;
            case '45': 
            $situacao = 'Chuva';
            break;
            case '46': 
            $situacao = 'Queda de neve';
            break;
            case '47': 
            $situacao = 'Tempestades isoladas';
            break;
            case '48': 
            $situacao = 'Serviço não disponível';
            break;
        }
        return $situacao;
    }
}

?>