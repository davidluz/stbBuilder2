<?php



?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HCBuilder: HTML5 Course Builder</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

<div class="center-div">   
<div id="center-div-content">
<center>      
<h3><strong>HTML5 Fast Course Builder</strong></h3> 
<button id="novo-projeto" class="waves-effect waves-light btn blue darken-4">Novo Projeto</button><br>
<button id="continua-projeto" class="waves-effect waves-light btn blue darken-4">Continuar uma edição</button><br>
<button id="importa-projeto" class="waves-effect waves-light btn blue darken-4">Importar um projeto</button><br>
<button id="gera-de-mapa" class="waves-effect waves-light btn blue darken-4">Gerar a partir de um Mapa</button>
<p>v.0.1 (Última atualização: 11/08/2017)</p>
</center>
</div>

</div>


<br><br>

<div id="continuar_projeto_menu">
	<h4>Continuar Projeto</h4>
	<p>Escolha um projeto para continuar editando</p>
	<table>
	 <tr>
    <th>Nome do Projeto</th>
    <th>Data de início</th> 
    <th>Última modificação</th>
  	</tr>
  	<tr>
    <td class="select-save">vazio</td>
    <td class="select-save">vazio</td> 
    <td class="select-save">vazio</td>
  </tr>
	</table>
</div>



</body>

<style>
body{
	background-image: url("imgs/bg1.jpeg");
	background-repeat: no-repeat;
	max-width: 100%;
}

#continuar_projeto_menu {
	display: none;
}

</style>
	
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>


	<script src="js/materialize.min.js"></script>
	<script src="plugins/fancybox/jquery.fancybox.js"></script>
	<script src="js/db.js"></script>
    <script src="js/buttons.js"></script>
    
    <link rel="stylesheet" href="plugins/fancybox/jquery.fancybox.css">
	<link rel="stylesheet" href="css/materialize.min.css">
	


</html>
