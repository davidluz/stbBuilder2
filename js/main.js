
//Cria um modelo dinamico para as 30 telas 
var tela = [];
for(i=1; i<30; i++){
  tela[i] = new Tela(i);
}

function Tela(numero) {
this.numero = numero;
this.modelo ="vazio";
this.conteudo = "vazio";
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
    tela[droppableId].preenchimento = true;
    /***** Necessário completar com o preenhcimento depois"*/////

  	
    var telaDeConteudoEscolhida = "#tela-conteudo-"+droppableId;
    $(telaDeConteudoEscolhida).load(modeloEscolhido);

    console.log(telaEscolhidoMiniatura);
       }

	});

$(".telas-miniatura").click(function(){abreModal()});

  function abreModal()
    {
        // note the use of "this" rather than a function argument
        $.fancybox({
        'href'   : '#tela-conteudo-1',
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


