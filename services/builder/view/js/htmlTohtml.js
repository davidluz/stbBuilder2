
function htmlToHTML(filename, elId, mimeType) {
$("#stb-final").empty();	
atualizaTelas();


for(i=1; i<=30; i++){

if(telas[i].modelo==0){




var htmlMontado = `

<article class="tela escura entrada" data-tempo-tela-mudo="1000" data-tempo-tela="15000" data-grupo="Módulo 1 - A projeção de receita">
                    <div class="fundo fundo-curso-056 box-imagem efeitos entrada-porbaixo-perspectiva saida-porbaixo-perspectiva entrada-duracao-500 saida-duracao-500 
                    saida-atraso-250">
                        <img src="galeria/modelos/tela0fundo.jpg" class="img1" style="opacity: 0.5;"  >
                    </div>
                    <div class="bloco-para-verticalizar">
                        <div class="bloco-verticalizado texto-centralizado espaco-lateral">
                            <h3 class="sem-espacos-verticais ">` + telas[i].componente1 + `                        
                            </h3>
                            <h3 class="sem-espacos-verticais "  >` + telas[i].componente2 + `</h3>
                            <p>
                            ` + telas[i].componente3 + `</p>
                        </div>
                    </div>
               
            </article>`; 

$("#stb-final").append(htmlMontado);  


}


	
}











//A partir daqui a lógica é só para exportar HTML

    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}

var fileName =  'conteudo.html'; // You can use the .txt extension if you want