function checkOut(e){
    let quantity1 = document.getElementById("quantity1").value;
    let quantity2 = document.getElementById("quantity2").value;
    let quantity3 = document.getElementById("quantity3").value;
    let quantity4 = document.getElementById("quantity4").value;
    let numOfQuantity1 = parseInt(quantity1);
    let numOfQuantity2 = parseInt(quantity2);
    let numOfQuantity3 = parseInt(quantity3);
    let numOfQuantity4 = parseInt(quantity4);
    if((!isNaN(numOfQuantity1) == true && quantity1 < 1) && (!isNaN(numOfQuantity2) == true && quantity2 < 1) && (!isNaN(numOfQuantity3) == true && quantity3 < 1) && (!isNaN(numOfQuantity4) == true && quantity4 < 1)){
        alert("You need at least 1 item to check out!");
        e.preventDefault();
        return;
    }

    let confirmation = confirm("Are you really wanna Check Out your items?");
    if(confirmation == true){
        return;
    }else{
        e.preventDefault();
    }
}

function validateAddItem(e){
    let quantity = document.getElementById("quantity1").value;
    let numOfQuantity = parseInt(quantity);
    if(!isNaN(numOfQuantity) == true && quantity < 1){
        alert("You need at least 1 item to check out!");
        e.preventDefault();
        return;
    }

    let address = document.getElementById("address").value;
    if(address.length < 10){
        alert("Please input valid address!");
        e.preventDefault()
        return;
    }

    let courier = document.getElementById("courier").value;
    if(courier == "Choose courier"){
        alert("You need to choose courier to check out!");
        e.preventDefault();
        return;
    }

    alert("Item Successfully added to cart!");
    return;
}

function direction(e){
    let confirmation = confirm("Open google maps?");
    if(confirmation == true){
        return;
    }else{
        e.preventDefault();
    }
}

function addToCart(){
    alert("Item Successfully added to cart!");
    return;
}
