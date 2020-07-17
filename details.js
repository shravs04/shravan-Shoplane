$(document).ready(function() {
    var source = location.href.split('source=')[1];
  var url = "https://5eea6936b13d0a00164e48aa.mockapi.io/Homepage/" + source;
  currentObj = null;


  dataimg = (url, pos)=>{
    var image  = $('<img>');
    image.attr('src', url);
    // 
    if(pos === 0) {
        image .addClass('active-image');
    }
    image.click(function() {
       $('#product-images img').removeClass("active-image")
        image.addClass("active-image");
        $('#product-preview').attr('src', url);
      });
      
    return image ;
  }

  $.get(url, function(responsiveObj) {
    currentObj = responsiveObj;
    $("#product-preview").attr("src", responsiveObj.preview);
    $("#product-title").text(responsiveObj.name);
    $("#product-brand").text(responsiveObj.brand);
    $("#product-price").text(responsiveObj.price);
    $("#description").text(responsiveObj.description);
    //$("#product-images").attr()
    for(var i=0; i< responsiveObj.photos.length; i++){
        $("#product-images").append(dataimg(responsiveObj.photos[i],i))
    }
  })

})


$("#cart-button").click(function() {  
  if(localStorage.getItem("productlist") === null || localStorage.getItem("productlist") === ''){
    localStorage.setItem("productlist", JSON.stringify([]));
  }
   var productList = JSON.parse(window.localStorage.getItem("productlist"));
   var findPosAt = -1;
   for(var i=0; i< productList.length; i++){
     if(parseInt(productList[i].id) == parseInt(currentObj.id)){
       findPosAt = i;
     }
   }
   if(findPosAt > -1){
     productList[findPosAt].count = productList[findPosAt].count + 1;
     window.localStorage.setItem("productlist", JSON.stringify(productList));
   } else{
     currentObj.count = 1;
     productList.push(currentObj);
     window.localStorage.setItem("productlist", JSON.stringify(productList));
   }
   var totalcount = 0;
   for(var i=0; i< productList.length; i++){
     totalcount = totalcount + productList[i].count;
   }
   $('#cart-count').html(totalcount);
})