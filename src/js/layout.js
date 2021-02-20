'use strict';

(() => {
    document.getElementById('add-st').onclick = () => {
        addStudent()
    }
    document.getElementById('edit-st').onclick = () => {
        editStudentId ? editStudent() : alert('Select student for edition!')
        editStudentId = undefined
        clearData()
    }
    getStudents()
})()