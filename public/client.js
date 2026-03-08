var username = prompt("Insira seu nome: ")

var socket = io.connect('http://25.73.45.90:3000')

var mensagens = [];
var todasMensagens = "";

var icone = Math.round(Math.random(1, 20)*10);

socket.on("escreverMensagem", function(data){
    var now = new Date();
    now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    todasMensagens = "";
    mensagens.push("<img class='icons' src='"+"icons/icon"+data.icone+".png'> <t4 class='mensagem'> <b>" + data.username + "</b>: " + data.message + ' [ '+ now +' ] ' + " </t4> <br>")
    for(let i = mensagens.length - 1; i >= 0; i--){
        todasMensagens += mensagens[i];
    }
    document.getElementById("mensagens").innerHTML = todasMensagens;
});


function enviarMensagem(){
    //alert('Mensagem Enviada')
    var data = {
        "icone": icone,
        "username": username,
        "message": document.getElementById("caixaTexto").value
    }
    socket.emit("mensagemEnviada", data)
    document.getElementById("caixaTexto").value = ""

}

