configAtual();

var div = document.getElementById("config-start");
    div.onclick = function(){
    escondeCorpo();
}

function escondeCorpo() {
    var ob = document.getElementById("dashboard");
    ob.classList.add("escondido");

    var ob = document.getElementById("corpo-config");
    ob.classList.remove("escondido");
}

var div2 = document.getElementById("voltar");
    div2.onclick = function(){
    exporCorpo();
}

function exporCorpo(){
    var ob = document.getElementById("dashboard");
    ob.classList.remove("escondido");

    var ob = document.getElementById("corpo-config");
    ob.classList.add("escondido");
}

function configAtual(){
    $.ajax({
        type: 'get',
        crossDomain: true,
        url: '../Config/retornaBomba?bomba=1',
        success: function(e){
            var data = JSON.parse(e);

            let html = 
            `<label>Intervalo ( Minutos )</label>
            <input value= "${data[0]['bomba_intervalo']/60}" type="number" class="form-control sombra" placeholder="Minutos" min="1" id="intervalo_a_input">`;

            $('#intervalo_a').html(html);
            
            let html2 =
            `<label">Limite de Umidade ( % )</label>
            <input value= "${data[0]['bomba_umidade_max']}" type="number" class="form-control sombra" placeholder="%" min="0" max="100" id="umidade_a_input" />`;

            $('#umidade_a').html(html2);

            let html3 =
            `<label>Tempo de Vazão ( Segundos )</label>
            <input value= "${data[0]['bomba_tempo_vazao']}" type="number" class="form-control sombra" placeholder="%" min="5" max="60" id="vazao_a_input" />`;

            $('#vazao_a').html(html3);


            if(data[0]['bomba_ativa'] == '1'){
                let html4 = 
                `<input class="form-check-input" type="checkbox"/>
                <label class="form-check-label" for="ativa_a">Desativar ciclo</label>`;

                $('#ativa_a').html(html4);

            }else{
                let html4 = 
                `<input class="form-check-input" type="checkbox" checked/>
                <label class="form-check-label" for="ativa_a_input">Desativar ciclo</label>`;

                $('#ativa_a').html(html4);
            }

            
        }
    });

    $.ajax({
        type: 'get',
        crossDomain: true,
        url: '../Config/retornaBomba?bomba=2',
        success: function(e){
            var data = JSON.parse(e);
            let html = 
            `<label>Intervalo ( Minutos )</label>
            <input value= "${data[0]['bomba_intervalo']/60}" type="number" class="form-control sombra" placeholder="Minutos" min="1" id="intervalo_b_input">`;

            $('#intervalo_b').html(html);
            
            let html2 =
            `<label">Limite de Umidade ( % )</label>
            <input value= "${data[0]['bomba_umidade_max']}" type="number" class="form-control sombra" placeholder="%" min="0" max="100" id="umidade_b_input" />`;

            $('#umidade_b').html(html2);

            let html3 =
            `<label>Tempo de Vazão ( Segundos )</label>
            <input value= "${data[0]['bomba_tempo_vazao']}" type="number" class="form-control sombra" placeholder="%" min="5" max="60" id="vazao_b_input" />`;

            $('#vazao_b').html(html3);

            if(data[0]['bomba_ativa'] == '1'){
                let html4 = 
                `<input class="form-check-input" type="checkbox"/>
                <label class="form-check-label">Desativar ciclo</label>`;

                $('#ativa_b').html(html4);

            }else{
                let html4 = 
                `<input class="form-check-input" type="checkbox" checked/>
                <label class="form-check-label">Desativar ciclo</label>`;

                $('#ativa_b').html(html4);
            }
        }
    });

    $.ajax({
        type: 'get',
        crossDomain: true,
        url: '../Config/retornaBomba?bomba=3',
        success: function(e){
            var data = JSON.parse(e);
            let html = 
            `<label>Intervalo ( Minutos )</label>
            <input value= "${data[0]['bomba_intervalo']/60}" type="number" class="form-control sombra" placeholder="Minutos" min="1" id="intervalo_c_input">`;

            $('#intervalo_c').html(html);
            
            let html2 =
            `<label">Limite de Umidade ( % )</label>
            <input value= "${data[0]['bomba_umidade_max']}" type="number" class="form-control sombra" placeholder="%" min="0" max="100" id="umidade_c_input" />`;

            $('#umidade_c').html(html2);

            let html3 =
            `<label>Tempo de Vazão ( Segundos )</label>
            <input value= "${data[0]['bomba_tempo_vazao']}" type="number" class="form-control sombra" placeholder="%" min="5" max="60" id="vazao_c_input" />`;

            $('#vazao_c').html(html3);

            if(data[0]['bomba_ativa'] == '1'){
                let html4 = 
                `<input class="form-check-input" type="checkbox"/>
                <label class="form-check-label">Desativar ciclo</label>`;

                $('#ativa_c').html(html4);

            }else{
                let html4 = 
                `<input class="form-check-input" type="checkbox" checked/>
                <label class="form-check-label">Desativar ciclo</label>`;

                $('#ativa_c').html(html4);
            }
        }
    });

    $.ajax({
        type: 'get',
        crossDomain: true,
        url: '../Config/retornaTemperatura?sensor=1',
        success: function(e){
            var data = JSON.parse(e);
            let html = 
            `<label>Temperatura Máxima (ºC)</label>
            <input value ="${data[0]['temperatura_max']}" type="number" class="form-control" placeholder="°C" min="-20" max="100" id="sombra" />`;

            $('#temperatura_a').html(html);
            
        }
    });

}


$("#botao-01").click(() =>
    {
        let intervalo = $("#intervalo_a_input").val();
        let umidade = $("#umidade_a_input").val();
        let vazao = $("#vazao_a_input").val();
        // let ativa = $('#ativa_a_input').is(':checked');

        salvar('../Config/atualizaBomba'+'?'+'bomba=1&bomba_ativa=1&bomba_intervalo='+intervalo*60+'&bomba_umidade_max='+umidade+'&bomba_tempo_vazao='+vazao);

    }
);

$("#botao-01").click(() =>
    {

        alert('Bomba 01 atualizada com sucesso!');

    }
);

$("#botao-02").click(() =>
    {
        let intervalo = $("#intervalo_b_input").val();
        let umidade = $("#umidade_b_input").val();
        let vazao = $("#vazao_b_input").val();
        // let ativa = $('#ativa_b_input').is(':checked');

        salvar('../Config/atualizaBomba'+'?'+'bomba=2&bomba_ativa=1&bomba_intervalo='+intervalo*60+'&bomba_umidade_max='+umidade+'&bomba_tempo_vazao='+vazao);

    }
);

$("#botao-02").click(() =>
    {

        alert('Bomba 02 atualizada com sucesso!');

    }
);

$("#botao-03").click(() =>
    {
        let intervalo = $("#intervalo_c_input").val();
        let umidade = $("#umidade_c_input").val();
        let vazao = $("#vazao_c_input").val();
        // let ativa = $('#ativa_c_input').is(':checked');

        salvar('../Config/atualizaBomba'+'?'+'bomba=3&bomba_ativa=1&bomba_intervalo='+intervalo*60+'&bomba_umidade_max='+umidade+'&bomba_tempo_vazao='+vazao);

    }
);

$("#botao-03").click(() =>
    {

        alert('Bomba 03 atualizada com sucesso!');

    }
);

function salvar(url){
    $.ajax({
        type: 'get',
        crossDomain: true,
        url: url,
        success: function(){
        }
    });
}