$.ajaxSetup({cache: false});


$(document).ready(function () {

  $('select').material_select();
$(".button-collapse").sideNav();

         $.fancybox({
             'href': "#form_inicial",
        'width' : '100%',
        'height' :'100%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, // prevents closing when clicking INSIDE fancybox
     helpers : { 
            overlay : {
                closeClick: false
            } // prevents closing when clicking OUTSIDE fancybox
        },
        afterClose: function() {
         atualizaTelas();    
        }
        });
});
// Responsável pela lógica de produção das telas

//Cria um modelo dinamico para as 30 telas 
telas = [];
for(i=0; i<=30; i++){
  telas[i] = new Tela(i);
}



//Gera as demais telas
function Tela(numero) {
this.projeto = "vazio";  
this.numero = numero;
this.modelo ="vazio";
this.tipo ="vazio";
this.componente1 = "vazio";
this.componente2 = "vazio";
this.componente3 = "vazio";
this.componente4 = "vazio";
this.componente5 = "vazio";
this.orientacoes = "vazio";
this.descricaoIMG = "vazio";
this.img1 = "vazio";
this.img2 = "vazio";
this.img3 = "vazio";
this.img4 = "vazio";
this.img5 = "vazio";
this.audio = "vazio";
this.preenchimento = false;
this.html_base ="vazio";
}
//


	$( ".modelos" ).draggable({ 
  revert: true,
  start: function(e) { $(this).css('z-index', 9999)},
  stop:  function(e) { $(this).css('z-index', 0)}
  });



    $(".telas-miniatura").droppable({  
   
   	accept: ".modelos",
  	drop: function( event, ui ) {
    
   
  	var draggableId = ui.draggable.attr("id").substring(6,10);
  	var droppableId = $(this).attr("id").substring(15,17);


    // Altera miniatura escolhida 
  	var modeloEscolhido = "telas/modelo"+draggableId+".html";
    var miniaturaEscolhida = "modelo"+draggableId;
    var telaEscolhidoMiniatura = "#tela-miniatura-"+droppableId;
    $(telaEscolhidoMiniatura).html("<img src='imgs/m"+draggableId+"_small.png'>");
    //********************************************************//

 
    telas[droppableId].preenchimento = true;
    telas[droppableId].modelo = draggableId;

    /***** Necessário completar com o preenhcimento depois"*/////

  	/* Preenche a tela de conteúdo escolhida  */
    var telaDeConteudoEscolhida = "#tela-conteudo-"+droppableId;
    $(telaDeConteudoEscolhida).load(modeloEscolhido);  
     atualizaTelas();      

     }

	});

$(".telas-miniatura").click(function(){
  var idDoClicado = $(this).attr('id').substring(15,17);
  abreModal(idDoClicado);
  });


 function abreModal(idDoClicado)
    {

      var elementoEscolhido = '#tela-conteudo-'+idDoClicado;
        // note the use of "this" rather than a function argument
        $.fancybox({
        'href': elementoEscolhido,
        'width' : '100%',
        'height' :'100%',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, // prevents closing when clicking INSIDE fancybox
     helpers : { 
            overlay : {
                closeClick: false
            } // prevents closing when clicking OUTSIDE fancybox
        },
        afterClose: function() {
          
         atualizaTelas();  


        }
    });
    return false;

}


function atualizaTelas(){
 
for(i=1; i<=30; i++){

var telaAtual = "#tela-conteudo-"+i;
telas[i].projeto =  projeto.nome;
telas[i].modulo =  projeto.modulo; 
telas[i].demanda = projeto.demanda;
telas[i].tipo =  $(telaAtual).find("#tela-tipo").val();
telas[i].componente1 =  $(telaAtual).find(".componente1").html();
telas[i].componente2 =  $(telaAtual).find(".componente2").html();
telas[i].componente3 =  $(telaAtual).find(".componente3").html();
telas[i].componente4 =  $(telaAtual).find(".componente4").html();
telas[i].componente5 =  $(telaAtual).find(".componente5").html();
telas[i].orientacoes =  $(telaAtual).find(".orientacoes").html();
telas[i].descricaoIMG = $(telaAtual).find(".descricaoIMG").html();
telas[i].img1 = $(telaAtual).find(".img1").attr('src');
telas[i].img2 = $(telaAtual).find(".img2").attr('src');
telas[i].img3 = $(telaAtual).find(".img3").attr('src');
telas[i].img4 = $(telaAtual).find(".img4").attr('src');
telas[i].img5 = $(telaAtual).find(".img5").attr('src');
telas[i].audio = $(telaAtual).find(".audio").attr('src');

}




}



