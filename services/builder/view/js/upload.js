var imageUrl;
var idUnico = 'idUnico'+ (new Date().getUTCMilliseconds());

$('#uploadfiles').attr('id',idUnico);


    var uploadfiles = document.querySelector('#'+idUnico);
    uploadfiles.addEventListener('change', function () {
        var files = this.files;
        for(var i=0; i<files.length; i++){
            uploadFile(this.files[i]);
        }

    }, false);


    function uploadFile(file){
        var url = "upload.php";
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                
               
                var imageUrl = '../controller/base_scorm/m1/imagens/'+file.name;
              
               $(".fancybox-inner").find(".img1").attr('src',imageUrl);
            }
        };
        fd.append('uploaded_file', file);
        xhr.send(fd);
    }
  
