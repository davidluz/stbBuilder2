// Funções de DB


function gravar(){

var temp = JSON.stringify(telas);

        $.ajax({
            method: "post",
            url: "salva_projeto.php",
            data: { temp },
            success: function(data){
                   alert(data);
            }
		});
}

