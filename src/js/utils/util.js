'use strict'

let lastId = 0
let editStudentId = undefined

const elementSelector = {
    'string': child => document.createTextNode(child),
    'function': child => document.createElement(child),
    'object': child => child
}

function clearData(){
    document.getElementById('firstName-student').value = ''
    document.getElementById('secondName-student').value = ''
    document.getElementById('age-student').value = ''
    document.getElementById('speciality-student').value = ''
}

function editData(student){
    document.getElementById('firstName-student').value = student.firstName
    document.getElementById('secondName-student').value = student.secondName
    document.getElementById('age-student').value = student.age
    document.getElementById('speciality-student').value = student.speciality
    editStudentId = student.id
}

function editStudent(){
    fetch('http://localhost:3000/editStudent', {
        method: 'POST',
        body: JSON.stringify({
            'id' : editStudentId,
            'firstName' : document.getElementById('firstName-student').value.toString(),
            'secondName' : document.getElementById('secondName-student').value.toString(),
            'age' : document.getElementById('age-student').value.toString(),
            'speciality' : document.getElementById('speciality-student').value.toString()
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        getStudents()
    })
    .catch(err => {
        console.log(err)
    })
}

function deleteStudent(id){
    fetch('http://localhost:3000/deleteStudent', {
        method: 'POST',
        body: JSON.stringify({
            'id' : id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.msg)
        getStudents()
    })
    .catch(err => {
        console.log(err)
    })
}

function getStudents(){
    fetch('http://localhost:3000/allStudents', {
        method: 'GET', 
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if (!response.students){
            document.querySelector('.page').appendChild(createElement({
                type: 'div',
                innerHTML: 'Файл пустой'
            }))
        }
        else{
            let students = JSON.parse(response.students)
            //console.log(students)
            while(document.querySelector('.page').firstChild){
                document.querySelector('.page').removeChild(document.querySelector('.page').firstChild)
            }
            students.forEach((item, index, array) => {
                let student = JSON.parse(item)
                document.querySelector('.page').appendChild(createRow(student))
            });
            console.log(response.msg)
        }
    })
}

function addStudent(){
    let firstName = document.getElementById('firstName-student').value.toString()
    let secondName = document.getElementById('secondName-student').value.toString()
    let age = document.getElementById('age-student').value.toString()
    let speciality = document.getElementById('speciality-student').value.toString()

    let studentJSON = JSON.stringify({
        'id' : ++lastId,
        'firstName' : document.getElementById('firstName-student').value.toString(),
        'secondName' : document.getElementById('secondName-student').value.toString(),
        'age' : document.getElementById('age-student').value.toString(),
        'speciality' : document.getElementById('speciality-student').value.toString()
    })

    fetch('http://localhost:3000/addStudent', {
        method: 'POST',
        body: studentJSON,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        clearData()
        while(document.querySelector('.page').firstChild){
            document.querySelector('.page').removeChild(document.querySelector('.page').firstChild)
        }
        getStudents()
    })
    .catch(err => {
        console.log(err.message)
    })
}

function createElement(option){
    const type = option.type ? option.type : 'div';
    const element = document.createElement(type);

    if (option.children) {
        if (option.children instanceof Array) {
            option.children.forEach(child => element.appendChild(elementSelector[typeof child](child)));
        } else {
            element.appendChild(elementSelector[typeof option.children](option.children));
        }
    }

    if (option.innerHTML){
        element.innerHTML = option.innerHTML
    }

    if (option.href) {
        element.href = option.href;
    }

    if (option.value) {
        element.value = option.value;
    }

    if (option.selected) {
        element.selected = option.selected;
    }

    if (option.inputType) {
        element.type = option.inputType;
    }

    element.onclick = option.onclick ? (e) => option.onclick(e) : element.onclick;
    element.onload = option.onload ? option.onload : element.onload;

    if (typeof element.onload === "function") {
        element.onload();
    }

    if (option.classList) {
        option.classList.forEach(c => element.classList.add(c));
    }

    if (option.id) {
        element.id = option.id;
    }

    if (option.name) {
        element.name = option.name;
    }

    if (option.for) {
        element.htmlFor = option.for;
    }

    if (option.placeholder) {
        element.placeholder = option.placeholder;
    }

    if (option.disabled) {
        element.disabled = option.disabled;
    }

    if (option.styles) {
        const optionStyles = option.styles;
        const styles = element.style;
        if (optionStyles.background) {
            styles.background = optionStyles.background;
        }
        if (optionStyles.color) {
            styles.color = optionStyles.color;
        }
    }

    return element;
}

function createRow(student){
    let rootEl = document.createElement('div')
    rootEl.classList = ['row']
    rootEl.appendChild(createElement({
        type: 'div',
        classList: ['id', 'student'],
        id: 'id',
        innerHTML: student.id
    }))
    rootEl.appendChild(createElement({
        type: 'div',
        classList: ['firstName', 'student'],
        id: 'firstName',
        innerHTML: student.firstName
    }))
    rootEl.appendChild(createElement({
        type: 'div',
        classList: ['secondName','student'],
        id: 'secondName',
        innerHTML: student.secondName
    }))
    rootEl.appendChild(createElement({
        type: 'div',
        classList: ['age', 'student'],
        id: 'age',
        innerHTML: student.age
    }))
    rootEl.appendChild(createElement({
        type: 'div',
        classList: ['speciality', 'student'],
        id: 'speciality',
        innerHTML: student.speciality
    }))
    rootEl.appendChild(createElement({
        type:'div',
        classList: ['btn-edit', 'student'],
        children: [
            createElement({
                type: 'div',
                classList: ['edit'],
                innerHTML: 'Edit data',
                onclick: () => {
                    editData(student)
                }
            })
        ]
    }))
    rootEl.appendChild(createElement({
        type:'div',
        classList: ['btn-delete', 'student'],
        children: [
            createElement({
                type: 'div',
                classList: ['delete'],
                innerHTML: 'Delete',
                onclick: () => {
                    deleteStudent(student.id)
                }
            })
        ]
    }))
    return rootEl
}