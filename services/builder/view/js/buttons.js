var projeto = {};
projeto.nome = 'vazio';
projeto.demanda = 'vazio';
projeto.modulo = 0;
projeto.dataInicio = pegarDataAtual();
projeto.atualizadaOuNova = 'vazio';


$.ajaxSetup({cache: false});

// Variáveis globais do projeto


   



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


$("#acesso-menu4").click(function(){

$("#console").toggle();
console.log("console iniciado");
});

$("#novo-projeto").click(function(){

window.open("editor.php","_self");

});

$("#salva_dados_projeto").click(function() {

projeto.nome = $("#nome-curso").val();
projeto.demanda = $("#numero-demanda").val();
projeto.modulo = $("#numero-modulo").val();
$.fancybox.close();
});


$("#continua-projeto").click(function(){

  $.fancybox({
        'href':'#continuar_projeto_menu',
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

exportToWordFile();

});

$("#exporta-json").click(function(){

exportToJsonFile(telas); 

});

$("#exporta-html").click(function(){

htmlToHTML(fileName, 'stb-final','text/html');

});

$("#exporta-scorm").click(function(){


$.ajax({
  type: "POST",
  url: 'http:../services/folderToZip/ScormPack.php',
  success: alert('deu certo.')
});


//console.log("exportou!");



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

window.open("../index.php","_self");


});

$("#debug").click(function(){

debugarTelas();

});

$("#atualiza-debug").click(function(){

debugarTelas();

});


$("#acesso-menu1").click(function(){

  $.fancybox({
        'href':'#form_inicial',
        'width' : '90%',
        'height' :'90%',
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

 $('.button-collapse').sideNav({

      onOpen: function() {  alert("abriu");  },  
      onClose: function() {  alert("fechou");  } 
    }
  );



        
