document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()

    const addMoney = document.getElementById('input-add-money').value;
    const pin = document.getElementById('input-pin-number').value;

    if(pin === '123'){
        const balance = document.getElementById('account-balance').innerText;
        addMoneyNumber = parseInt(addMoney);
        balanceNumber = parseInt(balance)
        updateBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('Something Wrong')
    }
})