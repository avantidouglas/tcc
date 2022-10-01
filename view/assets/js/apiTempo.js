carregaApiTempo()
function carregaApiTempo() {
    $.ajax({
        type: 'get',
        crossDomain: true,
        url: '../Tempo/apiTempo',
        success: function(e){
            console.log(e);

            let text = `Tempo agora em `;

            let text_temp = `&#160;`;
            let text_nascer = `&#160;&#160;`;
            let text_por = ``;
            let text_umidade = `&#160;&#160;`;
            let text_clima = ``;

            $('#city').html(text.concat(e.cidade))
            $('#temp').html(text_temp.concat(e.temperatura,'°C'));
            $('#nascer').html(text_nascer.concat(e.nascer_sol));
            $('#por').html(text_por.concat(e.por_sol, `&#160;&#160;`));
            $('#umidade-ar').html(text_umidade.concat(e.umidade,'%'));
            $('#situacao').html(text_clima.concat(e.situacao,`&#160;&#160;`));
            
        }
    });
}