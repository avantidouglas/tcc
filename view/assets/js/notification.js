var div = document.getElementById("notification");
    div.onclick = function(){
    escondeCorpoNotification();
}

function escondeCorpoNotification() {
    var ob = document.getElementById("dashboard");
    ob.classList.add("escondido");

    var ob = document.getElementById("corpo-config");
    ob.classList.add("escondido");

    var ob = document.getElementById("corpo-notification");
    ob.classList.remove("escondido");
}
let html = '';
$.ajax({
    type: 'get',
    crossDomain: true,
    url: '../Config/retornaNotificao',
    success: function(e){
        var data = JSON.parse(e);
        // console.log(data);
       
        for(var i = 0; i < data.length; i++){

            let data_data = data[i]['texto_data'];
            let texto = data[i]['texto'];
            
            let html_agora = 
            `<div class="card-body" id="local-notification">
                <div class="container text-center" style="background-color: #222046;margin-top:5px;height: 100%;" id="sombra2">
                    <span class="h6 text-center" id="teste_not">${data_data} - ${texto}</span>
                </div>
            </div>`;

            html = html + html_agora;
        }

    $('#local-notification').html(html);        
        
            
    }
});