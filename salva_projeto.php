<?php  
 
$teste = json_decode($_POST['temp'], true);


echo ($teste['1']['modelo']);

/*
try {
  $pdo = new PDO('mysql:host=localhost;dbname=hcbuilder', 'root', '');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
  $stmt = $pdo->prepare('INSERT INTO telas VALUES(:projetoID, :numero, :modelo_escolhido, :tipo_de_tela, :componente1_conteudo, :componente2_conteudo, :componente3_conteudo, :componente4_conteudo, :componente5_conteudo, :orientacoes_conteudo, :descricaoIMG_conteudo, :imagem1, :imagem2, :imagem3, :imagem4, :imagem5, :audio)');
  $stmt->execute(array(
    ':projetoID' => '4',
    ':numero' => 1,
    ':modelo_escolhido' => '0',
    ':tipo_de_tela' => '4',
    ':componente1_conteudo' => $arrayDeTelas,
    ':componente2_conteudo' => '4',
    ':componente3_conteudo' => '4',
    ':componente4_conteudo' => '4',
    ':componente5_conteudo' => '4',
    ':orientacoes_conteudo' => '4',
    ':descricaoIMG_conteudo' => '4',
    ':imagem1' => '4',
    ':imagem2' => '4',
    ':imagem3' => '4',
    ':imagem4' => '4',
    ':imagem5' => '4',
    ':audio' => '4',
  ));
   
  
  echo 'Projeto salvo com sucesso!';

} catch(PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
*/
  
 ?>


