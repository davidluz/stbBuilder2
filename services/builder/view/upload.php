<?php

if (isset($_FILES['uploaded_file'])) {
  
    if(move_uploaded_file($_FILES['uploaded_file']['tmp_name'], "../controller/base_scorm/m1/imagens/" . $_FILES['uploaded_file']['name'])){
        echo $_FILES['uploaded_file']['name']. " carregou ...";
    } else {
        echo $_FILES['uploaded_file']['name']. " não carregou...";
    }

    exit;
} else {
    echo "no";
}

