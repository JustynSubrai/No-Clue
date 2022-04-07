// var CLOUDINARY_URL = 'cloudinary://462376868875359:Aupl1bKtn_t-0fpk-oW-ypzXTTQ@du6elfpcb';
// var CLOUDINARY_UPLOAD_PRESET = 'kcbnusbs';

var imagePreview = document.getElementById('uploaded-image');
var fileUpload = document.getElementById('img-input');
const cloudinary = require('cloudinary');


fileUpload.addEventListener('change', function (event) {
  var file = event.target.files[0];

  cloudinary.uploader.upload(file, (response,err) => {
    console.log(response);
    console.log("error" , err);

  })

  console.log(file);
  // var formData = new FormData();
  // formData.append('file', file);
  // formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);



});