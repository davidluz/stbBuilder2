<?php

// Diretório a ser zipado e destino chega via chamada AJAX
folderToZip($_POST['directoryToZip'],$_POST['outputDir']);

function folderToZip($directoryToZip,$outputDir){

$fileToZip="License.txt";
$fileToZip1="CreateZipFileMac.inc.php";
$fileToZip2="CreateZipFile.inc.php";
include_once("CreateZipFile.inc.php");
$createZipFile=new CreateZipFile;
$createZipFile->zipDirectory($directoryToZip,$outputDir);
$zipName='curso_final.zip';
$fd=fopen($zipName, "wb");
$out=fwrite($fd,$createZipFile->getZippedfile());
fclose($fd);
//$createZipFile->forceDownload($zipName);
//@unlink($zipName);
}



?>