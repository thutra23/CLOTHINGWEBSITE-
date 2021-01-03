
      var image = document.getElementById("change image")
      image.addEventListener('mouseover', function () {
        image.src = "https://canifa.s3.amazonaws.com/media/catalog/product/6/d/6ds20w011-sy151-4.jpg"
      })

      image.addEventListener('mouseout', function () {
        image.src = "https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/620x/6ds20w011-sy151-2-thumb-.jpg"
      }
      )

    var image1 = document.getElementById("change image1")
    image1.addEventListener('mouseover', function () {
      image1.src = "https://canifa.s3.amazonaws.com/media/catalog/product/6/o/6ot20w005-sk010-m-1.jpg"
    })

    image1.addEventListener('mouseout', function () {
      image1.src = "https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/620x/6ot20w005-sm280-2-thumb.jpg"
    }
    )

    var image2 = document.getElementById("change image2")
    image2.addEventListener('mouseover', function () {
        image2.src = "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6th20w007-dm010-3.jpg"
      })

    image2.addEventListener('mouseout', function () {
        image2.src = "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6th20w007-dm010-2-thumb.jpg"
      }
      )

// Get the modal
var modal = document.getElementById('loginId');
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 // Initialize google maps
 function myMap() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapCanvas = document.getElementById("map");
    var mapOptions = { center: myCenter, zoom: 12 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);
  }

  var changePic1 = document.getElementById("pic1")
  changePic1.addEventListener('mouseover', function () {
    changePic1.src = "https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot20w018-sa509-3.jpg"
  })

  changePic1.addEventListener('mouseout', function () {
    changePic1.src = "https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot20w018-sa509-2-thumb.jpg"
  }
  )

var changePic2 = document.getElementById("pic2")
changePic2.addEventListener('mouseover', function () {
  changePic2.src = "https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8tw20w007-sr221-4.jpg"
})

changePic2.addEventListener('mouseout', function () {
  changePic2.src = "https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8tw20w007-sr221-2-thumb.jpg"
}
)

var changePic3 = document.getElementById("pic3")
changePic3.addEventListener('mouseover', function () {
    changePic3.src = "https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8tw19w012-sk010--3.jpg"
  })

changePic3.addEventListener('mouseout', function () {
    changePic3.src = "https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8tw19w012-sk010--thumb_1_-_copy.jpg"
  }
  )


  var changePhoto1 = document.getElementById("photo1")
  changePhoto1.addEventListener('mouseover', function () {
    changePhoto1.src = "https://canifa.s3.amazonaws.com/media/catalog/product/1/t/1tw20w001-sb229-110-1.jpg"
  })

  changePhoto1.addEventListener('mouseout', function () {
    changePhoto1.src = "https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/620x/1tw20w001-sy151-1-thumb-.jpg"
  }
  )

var changePhoto2 = document.getElementById("photo2")
changePhoto2.addEventListener('mouseover', function () {
  changePhoto2.src = "https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2te20w002-sb092-4-thumb.jpg"
})

changePhoto2.addEventListener('mouseout', function () {
  changePhoto2.src = "https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/620x/2tw20w013-sb592-3-thumb-.jpg"
}
)

var changePhoto3 = document.getElementById("photo3")
changePhoto3.addEventListener('mouseover', function () {
    changePhoto3.src = "https://canifa.s3.amazonaws.com/media/catalog/product/1/o/1ot19w019-sk010-120_copy.jpg"
  })

changePhoto3.addEventListener('mouseout', function () {
    changePhoto3.src = "https://canifa.s3.amazonaws.com/media/catalog/product/1/o/1ot18c024-sk010-33.jpg"
  }
  )
