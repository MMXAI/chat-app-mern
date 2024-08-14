// @ts-nocheck
/* eslint-disable no-unused-vars */

/**
 * @file testOnly.js is the root file for this example app
 * @author MohammadX
 * @see <a href="https://www.google.com">Google Website<a/>
 */

import { add, multiply } from "./testModule.js";

/**
 * A Namespace
 * @namespace Variables
 */

/**
 * Types namespace
 * @namespace Types
 */

/**
 * Functions namespace
 * @namespace Functions
 */

/**
 * Student Name
 * @memberof Variables
 * @type {string}
 */
const studentName = "James Colins";

/**
 * Student Number
 * @memberof Variables
 * @type {number}
 */
const studentNumber = 1222;

/**
 * An Array of grades
 * @memberof Variables
 * @type {Array<number>}
 */
const gradesArray = [23, 45, 33];

/**
 * A sample object
 * @memberof Variables
 * @type {{id: string|number, text: string}}
 */
const toDo = {
  id: 1,
  text: "Heyyy",
};

/**
 * Calculates Tax
 * @memberof Functions
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @memberof Types
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {number|string} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @memberof Variables
 * @type {Student}
 */
const student = {
  id: 1,
  name: "James Maxwell",
  age: 20,
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   * Creates an instance of Person.
   * @param {object} personInfo
   */
  constructor(personInfo) {
    /**
     * @property {string} name Person's name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age - Person's age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello! I am ${this.name} and I am ${this.age} years old.`);
  }
}

/**
 * A class to create a master object
 * @param {object} personInfo - An object that holds the info about a person
 */
class Master {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
  }

  greet() {
    console.log(`Hello I am ${this.name} and I am ${this.age}`);
  }
}

/**
 * Person one
 *
 * See {@link Person}
 */
const person1 = new Person({
  name: "James Wovol",
  age: "20",
});

console.log(add(20, 2));
