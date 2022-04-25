const CLOUDINARY_URL = 'CLOUDINARY_URL=https://api.cloudinary.com/v1_1/sakzcfow/img/upload';
// const CLOUDINARY_UPLOAD_PRESET = 'sakzcfow'
//   ;

let imgPreview = document.getElementById('img-preview');

function fileEvent (event) {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function (res) {
    console.log(res)
    imgPreview.src = res.data.secure_url;
  }).catch(function (err) {
    console.log(err)
  })
  
};

document.querySelector('#file-upload').addEventListener('change', fileEvent);