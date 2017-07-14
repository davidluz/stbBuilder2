<html>

<body>

<?php

     /* Insira aqui a pasta que deseja salvar o arquivo. Ex: imagens */
  
     $uploaddir = 'galeria/imagens/';
  
     $uploadfile = $uploaddir . $_FILES['arquivo']['name'];
  
     if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $uploadfile)){
  
     echo "Arquivo Enviado";}
  
     else {echo "Houve um problema no upload do arquivo.";}
  
?>

</body>

</html>