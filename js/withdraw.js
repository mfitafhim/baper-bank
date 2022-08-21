document.getElementById('withdrawBtn').addEventListener('click', () => {
    const newWithdraw = getInputFieldValueById('withdraw-field')

    const prevWithdraw = getElementById('withdraw-total')

    const currentWithdraw = prevWithdraw + newWithdraw;

    setElementValueById('withdraw-total', currentWithdraw)

    const prevBalance = getElementById('balance-total');

    const totalBalance = prevBalance - newWithdraw;
    setElementValueById('balance-total', totalBalance)

    if (newWithdraw > totalBalance) {
        alert('Baper bank a ato taka nai!!')
        return;
    }


})