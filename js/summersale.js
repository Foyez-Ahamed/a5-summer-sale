let total = 0;

function purchase(data){
    const purchaseItem = document.getElementById('purchaseItem')
    const itemName = data.childNodes[3].childNodes[3].innerText;

    const createLi = document.createElement('li');

    createLi.innerText = itemName;

    createLi.style.listStyleType = 'number';
    createLi.style.fontSize = '20px';
    createLi.style.fontWeight = 'bold';

    purchaseItem.appendChild(createLi);

    const purchaseItems = data.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(purchaseItems);

    discount = total * 0.20;

    totalAfterDiscount = total - discount;


    const purchaseTotal = document.getElementById('total');
    const productDiscount = document.getElementById('discount');
    const AfterDiscountTotal = document.getElementById('total-after');

    purchaseTotal.innerText = total;
    productDiscount.innerText = discount;
    AfterDiscountTotal.innerText = totalAfterDiscount;

    const purchaseButton = document.getElementById('purchase-btn');

    if(total >= 0){
        purchaseButton.removeAttribute('disabled');
    } else{
        purchaseButton.setAttribute('disabled', true);
    }

    const applyButton =  document.getElementById('apply-btn');


    if(total >= 200){
        applyButton.removeAttribute('disabled');
    } else{
        applyButton.setAttribute('disabled', true);
    }
}



// document.getElementById('apply-input').addEventListener('keyup', function(e){

//     const applyButton = document.getElementById('apply-btn');
//     const getInputValue = e.target.value;

//     getInputValue.value = "";

//     if(getInputValue === 'SELL200'){
//         applyButton.removeAttribute('disabled')
//     } else{
//         applyButton.setAttribute('disabled');
//     }
    

// });