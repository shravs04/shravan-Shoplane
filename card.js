$(document).ready(function() {
    

    function createCheckoutProductCard(obj) {
         // <div class="checkout-card">
        //     <div>
        //      <img class="checkout-product-img" src="/assets/default-product.png" />
        //     </div>
        //     <div>
        //         <h4>Product Title</h4>
        //         <p>x3</p>
        //         <p>Amount: Rs <span>30000</span></p>
        //     </div>
        //   <i class="fas fa-trash-alt"></i>
        // </div>
        
        var card = $("<div>").addClass("checkout-card");

        var firstDiv = $("<div>");
        card.append(firstDiv);
        var productImage = $("<img>").attr("src", obj.preview).addClass("checkout-product-img");
        firstDiv.append(productImage);

        var secondDiv = $("<div>");
        card.append(secondDiv);
        var productName = $("<h4>").text(obj.name);
        secondDiv.append(productName);
        var productCount = $("<p>").text("x"+obj.count);
        secondDiv.append(productCount);
        var productAmount = $("<p>");
        var amountLabel = $("<span>").text("Amount: Rs ");
        var amountSpan = $("<span>").text(parseInt(obj.count) * parseInt(obj.price));
        productAmount.append(amountLabel);
        productAmount.append(amountSpan);
        
        
        secondDiv.append(productAmount);


        return card;

    }

    var productList = window.localStorage.getItem("productlist");
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var grandTotal = 0; 
    for(var i=0; i< productList.length; i++){
  $('#card-list').append(createCheckoutProductCard(productList[i])); 
  
  var totalForCurrentProduct = parseFloat(productList[i].count) * parseFloat(productList[i].price);
  grandTotal = grandTotal + totalForCurrentProduct;
    }
    $('#item-count').html(productList.length);
    $('#total-amount').html(grandTotal);

    $('#order-button').click(function() {

        var orderItemArr = [];
        for(var i=0; i<productList.length; i++) {
            var prodObj = {
                "id": productList[i].id,
                "brand": productList[i].brand,
                "name": productList[i].name,
                "price": productList[i].price,
                "preview": productList[i].preview,
                "isAccessory": productList[i].isAccessory
            }

            orderItemArr.push(prodObj);
        }

        // console.log(productList);
        // console.log(orderItemArr);

        var dataObj = {
            amount: grandTotal,
            products: orderItemArr
        }
        $.post('https://5eea6936b13d0a00164e48aa.mockapi.io/Createorderpage', dataObj, function() {
           
            localStorage.setItem('productlist', []);

            location.assign('thankyou.html');
        })
    })
})