document.getElementById('submitBtn').addEventListener('click', (event) => {
    const userEmail = document.getElementById('exampleInputEmail1');
    const email = userEmail.value;
    const userPassword = document.getElementById('exampleInputPassword1');
    const password = userPassword.value;
    if (email === 'tafhim317@gmail.com' && password === '123456') {
        window.location.href = 'bank.html';
    } else {
        alert('wrong email or password!!');
    }
    event.preventDefault();
})