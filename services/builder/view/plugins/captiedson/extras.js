var Galeria = {
    criarMiniatura : function(elemento){
        var miniaturas = elemento.innerHTML.replace(/<div(.[^>]*)>/g,'<div>');
        $(elemento).after('<div class="miniatura efeitos entrada-transparencia entrada-duracao-500 entrada-atraso-500">'+miniaturas+'</div>');
        /*
        if miniatura retratil
        - cria botão retratil
        - aplicar classe retratil
        */
    },
    entrar : function(elemento){
        var miniatura = $(elemento).parent().find('.miniatura').size() > 0 ? true : false;
        if(!miniatura && elemento.getAttribute('data-miniatura')){
            Galeria.criarMiniatura(elemento);
        }
        
        if(!$(elemento).hasClass('slick-slider')) {
            Galeria.instanciarGaleria(elemento);
        }else{
            $(elemento).slick('slickGoTo',0);
            Pops.alternarPopAtual($(elemento.getElementsByClassName('slick-current')[0]),'show');
        }
        
        if(!miniatura && elemento.getAttribute('data-miniatura')) {
            Galeria.instanciarMiniatura(elemento);
        }
    },
    instanciarGaleria : function(elemento){
        var telaNum, intervalo, destaque, setas, pontos, responsividade, atributos, comMiniatura, miniatura = null;

        telaNum = $('.container:eq(0)')[0].getAttribute("data-tela-atual");
        intervalo = Number(elemento.getAttribute("data-intervalo")) || 1;
        destaque = Boolean(Number(elemento.getAttribute("data-destaque")) || 0);
        setas = Boolean(Number(elemento.getAttribute("data-setas")) || 0);
        pontos = Boolean(Number(elemento.getAttribute("data-pontos")) || 0);
        
        responsividade = [
            {
                breakpoint: 768, 
                settings: {
                    dots:pontos,
                    centerMode : false,
                    slidesToShow: (intervalo > 1) ? 2 : 1,
                    slidesToScroll: (intervalo > 1) ? 2 : 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots:pontos,
                    centerMode : destaque,
                    slidesToShow: intervalo,
                    slidesToScroll: intervalo,
                }
            },
        ];
        
        if(elemento.getAttribute("data-miniatura")){
            miniatura = ".container:eq(0) .tela:eq("+telaNum+") .miniatura:eq(0)";
            comMiniatura = elemento.getAttribute("data-miniatura") == "vertical" ? "com-miniatura-vertical" : "com-miniatura-horizontal";
            $(elemento).addClass(comMiniatura);
        }
        
        if(setas) $(elemento).addClass('com-setas');
        if(intervalo > 1) $(elemento).addClass('com-intervalo');
        if(elemento.getAttribute("data-cabecalho")) $(elemento).addClass('com-cabecalho');
        if(elemento.getAttribute("data-rodape")) $(elemento).addClass('com-rodape');
        
        //miniatura = (elemento.getAttribute("data-miniatura")) ? ".container:eq(0) .tela:eq("+telaNum+") .miniatura:eq(0)" : null;
        
        atributos = {
            draggable : false,
            swipe:false,
            centerMode : false,
            centerPadding : '0',
            slidesToShow : 1,
            slidesToScroll : 1,
            arrows : setas,
            dots : pontos,
            fade : (intervalo == 1),
            asNavFor : miniatura,
            mobileFirst : true,
            focusOnSelect : false,
            responsive : responsividade
        }
        
        $(elemento).on({
            'init': function(slick){
                var $slideAtual, toggle;
                
                Pops.instanciarPops(elemento);
                Zoom.instanciarZoom(elemento);
                Pops.alternarPopAtual($(slick.target.getElementsByClassName('slick-current')[0]),'show');
            },
            'beforeChange': function(slick, currentSlide, nextSlide){
                Pops.ocultarPops();
            },
            'afterChange': function(slick, currentSlide){
                Pops.alternarPopAtual($(slick.target.getElementsByClassName('slick-current')[0]),'show');
            },
            'breakpoint' : function(event, slick, breakpoint){
                Pops.ocultarPops();
            }
        }).slick(atributos);
    },
    instanciarMiniatura : function(elemento){
        var $miniaturas, telaNum, posicao, atributos;
        
        $miniaturas = $(elemento).parent().children('.miniatura:eq(0)');
        telaNum = $('.container:eq(0)')[0].getAttribute('data-tela-atual');
        posicao = (elemento.getAttribute('data-miniatura') == 'vertical') ? true : false;
        
        atributos = {
            centerMode : true,
            centerPadding : '0',
            slidesToShow : 5,
            slidesToScroll : 5,
            dots : false,
            asNavFor : ".container:eq(0) .tela:eq("+telaNum+") .galeria:eq(0)",
            mobileFirst : true,
            focusOnSelect : true,
            vertical : posicao
        }
        
        $miniaturas.slick(atributos);
    },
    sair : function(elemento){
        Pops.ocultarPops();
    },
}

var Zoom = {
    instanciarZoom : function(elemento){
        $('.zoom', $(elemento)).zoom({
            on:'grab',
            onZoomIn:function(){
                Pops.alternarPopAtual($(this).parent().parent(),'hide');
            },
            onZoomOut:function(){
                Pops.alternarPopAtual($(this).parent().parent(),'show');
            },
        });
        if(!ArrastarSoltar.iniciado)ArrastarSoltar.iniciar();
    }
}

var Pops = {
    carregar : function(){
        $(document).on('click', '.bt-fechar-pop', function(e){
            $(e.target).closest('.pop').popover('hide');
        });
    },
    alternarPopAtual : function($slideAtual,acao){
        toggle = $slideAtual[0].getAttribute('data-toggle');
        $slideAtual[toggle](acao);
    },
    instanciarPops : function(elemento){
        $('[data-toggle="tooltip"]',$(elemento)).tooltip({
            container:'.principal',
            trigger:'manual',
            placement : function(pop, trigger){
                setTimeout(function(){
                    var intervalo, offset, posPop;
                    intervalo = (!$(elemento).hasClass('com-intervalo'))? (parseFloat($(trigger).css('margin-left'))) : 0
                    offset = ($(elemento).hasClass('com-setas'))? 
                                $(trigger).offset().left - 
                                $('.principal').offset().left - intervalo : 0;
                    posPop = offset + (($(trigger).outerWidth() - $(pop).outerWidth())/2);
                    $(pop).css('left', posPop + 'px');
                });
            }
        });
        
        $('[data-toggle="popover"]',$(elemento)).each(function(i){
            var modal = ($(this).hasClass('em-modal'))? 'pop-modal' : '';
            $(this).popover({
                container:'.principal',
                trigger:'manual',
                template:'<div class="pop popover '+modal+'" role="tooltip">'+
                         '<div class="arrow"></div>'+
                         '<button class="mover bt-mover-pop">#</button>' +
                         '<button class="bt-fechar-pop">-</button>'+
                         '<h3 class="popover-title"></h3>'+
                         '<div class="popover-content altura_60 rolagem"></div>'+
                         '</div>',
                placement : function(pop, trigger){
                    setTimeout(function(){
                        var disparador, posPopX, posPopY;
                        if(!$(pop).hasClass('pop-modal') && trigger.tagName.toLowerCase() != 'area'){
                            posPopX = ($(trigger).offset().left - $('.principal').offset().left) + 
                                     (($(trigger).outerWidth() - $(pop).outerWidth())/2);
                        }else{
                            posPopX = ($('.principal').outerWidth() - $(pop).outerWidth())/2;
                            posPopY = ($('.principal').outerHeight() - $(pop).outerHeight())/2;
                            $(pop).css('top', posPopY + 'px');
                        }
                        $(pop).css('left', posPopX + 'px');
                    });
                }
            }).on('show.bs.popover', function(){ 
                if($(this).hasClass('em-modal') && $('.pop-mascara').size() == 0){
                    $('.principal').append('<div class="pop-mascara fade"></div>');
                    setTimeout(function(){$('.pop-mascara').addClass('in')});
                }
            }).on('hide.bs.popover', function(){ 
                if($(this).hasClass('em-modal') && $('.pop-mascara').size() > 0){
                    $('.pop-mascara').removeClass('in');
                    setTimeout(function(){$('.pop-mascara').remove()},100);
                }
            });
        });
    },
    ocultarPops : function(){
        $('.tooltip').tooltip('hide');
        $('.popover').popover('hide');
    },
}

var ImagemMapeada = {
    entrar : function(elemento){
        if(!ArrastarSoltar.iniciado)ArrastarSoltar.iniciar();
    },
    sair : function(elemento){
        Pops.ocultarPops();
    }
}

var ArrastarSoltar = {
    iniciado : false,
    alvo : null,
    pos:{x:null,y:null},
    mover : function(e){
        var x, y, cssTransform;
        
        x = e.clientX - ArrastarSoltar.pos.x;
        y = e.clientY - ArrastarSoltar.pos.y;
        
        ArrastarSoltar.pos.x = e.clientX;
        ArrastarSoltar.pos.y = e.clientY;
        
        ArrastarSoltar.alvo.style.left = (parseFloat(ArrastarSoltar.alvo.style.left) + x) + 'px';
        ArrastarSoltar.alvo.style.top = (parseFloat(ArrastarSoltar.alvo.style.top) + y) + 'px';
    },
    iniciar : function(){
        $(document).on('mousedown', function(e){
            e.preventDefault();
            e.stopPropagation();
            
            if($(e.target).hasClass('mover')){
                ArrastarSoltar.alvo = $(e.target).closest('.pop')[0];
                ArrastarSoltar.pos.x = e.clientX;
                ArrastarSoltar.pos.y = e.clientY;

                $(ArrastarSoltar.alvo).addClass('movendo');
                
                ArrastarSoltar.alvo.addEventListener('mousemove', ArrastarSoltar.mover, true);
            }
        }).on('mouseup', function(e){
            e.preventDefault();
            e.stopPropagation();
            
            if(ArrastarSoltar.alvo){
                ArrastarSoltar.alvo.removeEventListener('mousemove', ArrastarSoltar.mover, true);
                $(ArrastarSoltar.alvo).removeClass('movendo');
                ArrastarSoltar.alvo = null;
            }
        });
        ArrastarSoltar.iniciado = true;
    }
}