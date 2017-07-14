$.ajaxSetup({cache: false});

// Variáveis globais do projeto
var projeto = {};
projeto.nome    = 'vazio';
projeto.numero  = 'vazio';
projeto.modulo  = 'vazio'; 


    
    
$( "#modelo_de_projeto option:selected" ).text();


function pegarDataAtual(){
var currentdate = new Date(); 
var datetime =   currentdate.getDate() + "/" 
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
return datetime;
}



$('select').material_select();



// Ação de todos os botões do projeto
$("#inicia_projeto").click(function(){
projeto.nome    = $("input[name='nome-curso']").val();
projeto.numero  = $("input[name='numero-demanda']").val();
projeto.modulo  = $("input[name='numero-modulo']").val(); 
projeto.dataInicio = pegarDataAtual();
});

$("#novo-projeto").click(function(){

 $.fancybox({
        'href':'#form_inicial',
        'width' : '100%',
        'height' :'100%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });     

window.open("builder.html","_self");

});


$("#continua-projeto").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#gera-de-mapa").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#exporta-doc").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#exporta-json").click(function(){

exportToJsonFile(telas); 

});

$("#exporta-html").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#exporta-scorm").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#conta-telas").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#conta-caracteres").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#gera-briefing").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});

$("#voltar-home").click(function(){

window.open("home.html","_self");


});




$("#salvar-projeto").click(function(){

  $.fancybox({
        'href':'#tela-save',
        'width' : '50%',
        'height' :'50%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, 
     helpers : { 
            overlay : {
                closeClick: false
            } 
        }
    });  

});


$("#salvar-no-banco").click(function(){

gravar();

});
// Fim dos botões de ação do projeto


