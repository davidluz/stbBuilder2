function exportToWordFile(){
$("#stb-final").empty();

// Gera o word das telas do array telas
atualizaTelas();
for(i=1; i<=30; i++){

if(telas[i].modelo==0){

var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>Módulo `+projeto.modulo+" - "+'Tela'+" "+telas[i].numero+" - "+telas[i].tipo+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p >` + telas[i].componente1 + `</p>
					<p >` + telas[i].componente2 + `</p>
					<p >` + telas[i].componente3 + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p >` + telas[i].orientacoes + `</p>
					<p >` +telas[i].descricaoIMG + `</p>
					<p>Modelo número:</p>
					
				
					</td></tr> 
					</table><br>
					`; 

$("#stb-final").append(stbMontado);  


}

}

$("#stb-final").wordExport('storyboard_v1');



}