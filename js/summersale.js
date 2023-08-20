let total = 0;

function purchase(data){
    const purchaseItem = document.getElementById('purchaseItem');

    const itemName = data.childNodes[3].childNodes[3].innerText;

    const createLi = document.createElement('li');

    createLi.innerText = itemName;

    createLi.style.listStyleType = 'number';
    createLi.style.fontSize = '20px';
    createLi.style.fontWeight = 'bold';

    purchaseItem.appendChild(createLi);

    const purchaseItemsPrice = data.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(purchaseItemsPrice);


    const purchaseTotal = document.getElementById('total');

    purchaseTotal.innerText = total.toFixed(2);
    

    const purchaseButton = document.getElementById('purchase-btn');

    if(total >= 0){
        purchaseButton.removeAttribute('disabled');
    } else{
        purchaseButton.setAttribute('disabled', true);
    }


    const applyButton = document.getElementById('apply-btn');

    if(total >= 200){
        applyButton.removeAttribute('disabled');
    } else{
        applyButton.setAttribute('disabled');
    }
 
};



document.getElementById('apply-btn').addEventListener('click', function(){

    const couponInput = document.getElementById('apply-input');

    const getCouponInputValue = couponInput.value;

    couponInput.value = "";

    if(getCouponInputValue === ""){
        alert('Please provide your coupon code!');
        return;
    } else if(getCouponInputValue !== 'SELL200'){
        alert ('Please provide your coupon code!');
        return;
    } else{
        const discountId = document.getElementById('discount');
        const afterDiscountTotalId =  document.getElementById('total-after');

    discount = total * .20;
    afterDiscountTotal = total - discount;

    discountId.innerText = discount.toFixed(2);
    afterDiscountTotalId.innerText = afterDiscountTotal.toFixed(2);
    }

});