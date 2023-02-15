document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const getProductValue = document.getElementById('phone-qty').value;
    const getProductQty = parseInt(getProductValue);
    let inCreaseValue;
    inCreaseValue = getProductQty+1;
    console.log(inCreaseValue);
})