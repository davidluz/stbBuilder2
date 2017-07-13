
//Cria um modelo dinamico para as 30 telas 
telas = [];
for(i=1; i<30; i++){
  telas[i] = new Tela(i);
}

//Gera uma tela 0
telas[0] = new Tela(0);
telas[0].modelo ="kkkk";
//Gera as demais telas
function Tela(numero) {
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

    //Preenche o modelo dinamico
    telas[droppableId].preenchimento = true;
    /***** Necessário completar com o preenhcimento depois"*/////

  	/* Preenche a tela de conteúdo escolhida  */
    var telaDeConteudoEscolhida = "#tela-conteudo-"+droppableId;
    $(telaDeConteudoEscolhida).load(modeloEscolhido);

    console.log(telaEscolhidoMiniatura);
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
        }
    });
    return false;

}




$('select').material_select();


