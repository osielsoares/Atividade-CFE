//efeito de esconder formulário de cadastro

$(document).ready(function(){

$("#botao-cadastrar").click(function(){

    $("#form-cadastrar").slideToggle("slow");
    $("#secion-cadastrar").slideToggle("slow");
    $("#botao-cadasrar").hide();
    
});


});


