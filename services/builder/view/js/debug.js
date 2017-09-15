function debugarTelas(){
atualizaTelas();
$('#conteudo-debug').html('');

for(i=1; i<=30; i++){

$('#conteudo-debug').append(
'tela ' + telas[i].numero +   
' '+ 'projeto: '+ ''+ telas[i].projeto+ 
' '+ 'demanda: '+ ''+ telas[i].demanda+ 
' '+ 'modelo: '+ ''+ telas[i].modelo+  
' '+ 'tipo: '+ ''+ telas[i].tipo+
' '+ 'componente1: '+ ''+ telas[i].componente1+ 
' '+ 'componente2: '+ ''+ telas[i].componente2+ 
' '+ 'componente3: '+ ''+ telas[i].componente3+ 
' '+ 'componente4: '+ ''+ telas[i].componente4+ 
' '+ 'componente5: '+ ''+ telas[i].componente5+ 
' '+ 'orientacoes: '+ ''+ telas[i].orientacoes+ 
' '+ 'descricaoIMG: '+ ''+ telas[i].descricaoIMG+ 
' '+ 'img: '+ ''+ telas[i].img+ 
' '+ 'img2: '+ ''+ telas[i].img2+ 
' '+ 'img3: '+ ''+ telas[i].img3+ 
' '+ 'img4: '+ ''+ telas[i].img4+  
' '+ 'img5: '+ ''+ telas[i].img5+ 
' '+ 'audio: '+ ''+ telas[i].audio+  
' '+ 'preenchimento:'+ ''+ telas[i].preenchimento +'<p></p>'
);
}

}