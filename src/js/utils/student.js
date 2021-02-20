'use strict'

class Student{
    id
    firstName
    secondName
    age
    speciality

    /**
     * 
     * @param {Number} id 
     * @param {String} firstName 
     * @param {String} secondName 
     * @param {Number} age 
     * @param {String} speciality 
     */
    constructor(id, firstName, secondName, age, speciality){
        this.id = id
        this.firstName = firstName
        this.secondName = secondName
        this.age = age
        this.speciality = speciality
    }

    get id() {return this.id}
    get firstName() {return this.firstName}
    get secondName() {return this.secondName}
    get age() {return this.age}
    get speciality() {return this.speciality}

    set id(value){this.id = value}
    set firstName(value) {this.firstName = value}
    set secondName(value) {this.secondName = value}
    set age(value) {this.age = value}
    set speciality(value) {this.speciality = value}
}