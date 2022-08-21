
document.getElementById('depositBtn').addEventListener('click', () => {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const prevDepositAmount = getElementById('total-deposit');
    const currentDepositAmount = prevDepositAmount + newDepositAmount;
    setElementValueById('total-deposit', currentDepositAmount)
    //balance
    const prevBalance = getElementById('balance-total');
    const currentBalance = prevBalance + newDepositAmount;
    setElementValueById('balance-total', currentBalance);
})