$(document).ready(function () {
  $(".carausol").slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
});

var productGrid = $(".product-wrapper");
var clothing = $("#clothing-section");
function createHomePageProductCard(data) {
  // <div class="product-card">
  // <a>
  // <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
  //alt="Men Navy Blue Solid Sweatshirt"/>
  //</a>
  //<div class="product-details">
  //<h4>Men Navy Blue Solid Sweatshirt</h4>
  //<h5>United Colors of Benetton</h5>
  //<p>Rs 2599</p>
  //</div>
  //</div>

  var mainCard = $("<div>").addClass("product-card");

  var productLink = $("<a>");
  productLink.attr("href", "details.html?source=" + data.id);
  mainCard.append(productLink);
  var productImage = $("<img>").addClass("product-image");
  productImage.attr("src", data.preview);
  productLink.append(productImage);

  var productDetails = $("<div>").addClass("product-details");
  mainCard.append(productDetails);
  var productName = $("<h4>").text(data.name);
  var productBrand = $("<h5>").text(data.brand);
  var productPara = $("<p>").text("Rs " + data.price);
  productDetails.append(productName);
  productDetails.append(productBrand);
  productDetails.append(productPara);

  return mainCard;
}

$.get("https://5eea6936b13d0a00164e48aa.mockapi.io/Homepage", function (
  response
) {
  for (var i = 0; i < response.length; i++) {
    if (response[i].isAccessory) {
      $("#accessory-wrapper").append(createHomePageProductCard(response[i]));
    } else {
      $("#clothing-wrapper").append(createHomePageProductCard(response[i]));
    }
    // productGrid.append(createHomePageProductCard(response[i]));
  }
});

// $(document).ready(function () {
//   var productList = window.localStorage.getItem("product-list");
//   productList = productList === null || productList === "" ? [] : productList;
//   productList = productList.length > 0 ? JSON.parse(productList) : [];

//   var totalCount = 0;
//   for (var i = 0; i < productList.length; i++) {
//     totalCount = totalCount + productList[i].count;
//   }

//   $("#cart-count").html(totalCount);
//   console.log($("#cart-count").html(totalCount));
// });

$(document).ready(function () {
  var list = window.localStorage.getItem("productlist");
  // console.log(list);
  list = list === null || list == "" ? [] : list;
  list = list.length > 0 ? JSON.parse(list) : [];

  // console.log(list);
  var items = 0;
  for (var i = 0; i < list.length; i++) {
    items += list[i].count;
  }
  $("#cart-count").html(items);
  console.log($("#cart-count").html(items));
  console.log(items);
});
