<?php
function geraScorm(){
$fileToZip="License.txt";
$fileToZip1="CreateZipFileMac.inc.php";
$fileToZip2="CreateZipFile.inc.php";
$directoryToZip="base_scorm"; // This will zip all the file(s) in this present working directory
$outputDir="/"; //Replace "/" with the name of the desired output directory.

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

geraScorm();

?>