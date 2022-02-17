function subAmount(num1, num2) {
    let sub = num1 - num2;
    return sub;
}
function percentageCalculate(amount, percent) {
    var percentageAmount = amount * (percent / 100);
    return percentageAmount;

}
// error 1 control
function error1Able() {
    document.getElementById('error-message').style.display = 'block';
}
function error1Disable() {
    document.getElementById('error-message').style.display = 'none';
}
// error 2 control
function error2Able() {
    document.getElementById('error-message2').style.display = 'block';
}
function error2Disable() {
    document.getElementById('error-message2').style.display = 'none';
}


//calculate button action form
document.getElementById('calculate-button').addEventListener('click', function () {
    // get income input field and value 
    const incomeField = document.getElementById('income-field');
    const incomeAmount = parseFloat(incomeField.value);
    //get cost value and field
    const foodField = document.getElementById('food-field');
    const foodAmount = parseFloat(foodField.value);
    const rentField = document.getElementById('rent-field');
    const rentAmount = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-field');
    const clothesAmount = parseFloat(clothesField.value);
    // get expenses showing field and current balance field
    const expensesField = document.getElementById('total-expenses');
    const balanceField = document.getElementById('balance');

    // calculate button error handle ... 
    if (incomeAmount >= 0 && foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0) {
        // sum of all expenses and inject total expenses amount
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        expensesField.innerText = totalExpenses;
        error2Disable();

        // nested error handle 
        if (incomeAmount > totalExpenses) {
            //calculate current balance and inject current balance
            const balance = subAmount(incomeAmount, totalExpenses);
            balanceField.innerText = balance;
            error1Disable();
        }
        else {
            error2Able();
            error1Disable();
        }
    }
    else {
        error1Able();
        error2Disable();
        expensesField.innerText = '00';
        balanceField.innerText = '00';
    }

})
// save button action form 
document.getElementById('save-button').addEventListener('click', function () {
    //get income 
    const incomeAmount = document.getElementById('income-field').value;
    //get balance without expenses
    const afterExpensesBalance = parseFloat(document.getElementById('balance').innerText);
    //get save inputFild & its value
    const saveInputField = document.getElementById('save-input-field');
    const savePercentageValue = parseFloat(saveInputField.value);
    // get savings amount and remainging field
    const savingsField = document.getElementById('savings-amount');
    const remaingingField = document.getElementById('remaining-balance');
    if (savePercentageValue >= 0) {
        // calculation savings & inject 
        const savingsAmount = percentageCalculate(incomeAmount, savePercentageValue);
        savingsField.innerText = savingsAmount;
        if (afterExpensesBalance < savingsAmount) {
            error2Able();
            error1Disable();
        }
        else {

            const remaingingbalance = subAmount(afterExpensesBalance, savingsAmount);
            remaingingField.innerText = remaingingbalance;
            error1Disable();
        }

    }
    else {
        error1Able();
        error2Disable();
    }

})
