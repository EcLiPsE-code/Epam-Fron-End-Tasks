'use strict'

function isValidPassword(){
    let pattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g
    let password = document.getElementById('psw').value
    return pattern.test(password);
}

function isValidEmail(){
    let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = document.getElementById('eml').value
    return pattern.test(email)
}

function changeBackgroundPage(){
    let color = document.getElementById('cntnt').style.backgroundColor
    if (color === 'white' || color === ""){
        document.getElementById('cntnt').style.backgroundColor = '#224b7a'
    }
    else if (color !== '#224b7a' || color === ""){
        document.getElementById('cntnt').style.backgroundColor = 'white'
    }
}

function checkData(){
    if (!isValidEmail() && !isValidPassword()) {
        alert("Вы ввели некорректный email и некорректный пароль")
    } else if (!isValidPassword()) {
        alert("Вы ввели некорректный пароль")
    } else if (!isValidEmail()) {
        alert("Вы ввели некорректный email")
    } else {
        const name = document.getElementById('nm').value
        const email = document.getElementById('eml').value;
        const password = document.getElementById('psw').value
        fetch('http://localhost:3000/service',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(
                {
                    name: name,
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(response => alert(`Hello ${response.name}`))
            .catch((error) => {
                console.log(`Request error: ${error}`)
            })
    }
}
