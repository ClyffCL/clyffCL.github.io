let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/culo2.jpg') {
      miImage.setAttribute('src','images/culo3');
    } else {
      miImage.setAttribute('src', 'images/culo2');
    }
}