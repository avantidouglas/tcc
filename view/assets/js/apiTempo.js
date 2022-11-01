carregaApiTempo()

function carregaApiTempo() {
    $.ajax({
        type: 'get',
        crossDomain: true,
        url: '../Tempo/apiTempo',
        success: function(e){
            var data = JSON.parse(e);

            let text = `Tempo agora em `;
            let text_temp = `&#160;`;
            let text_nascer = `&#160;&#160;`;
            let text_por = ``;
            let text_umidade = `&#160;&#160;`;
            let text_clima = ``;

            $('#city').html(text.concat(data.cidade))
            $('#temp').html(text_temp.concat(data.temperatura,'°C'));
            $('#nascer').html(text_nascer.concat(data.nascer_sol));
            $('#por').html(text_por.concat(data.por_sol, `&#160;&#160;`));
            $('#umidade-ar').html(text_umidade.concat(data.umidade,'%'));
            $('#situacao').html(text_clima.concat(data.situacao,`&#160;&#160;`));
            
        }
    });
}