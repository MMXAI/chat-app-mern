/**
 * @module Test
 * @description This is just an example of how to write doc
 * for a module.<br>
 * See {@tutorial testModule-tutorial} <br>
 * <b>This is important man!<b/>
 * List of actions:
 *  - 1 Mastering Jsdoc
 *  - Doing some projects
 * @author MohammadX
 */

/**
 * Add two number
 *
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Sum of n1 and n2
 */
const add = (n1, n2) => n1 + n2;

/**
 * Multiply two number
 *
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Product of n1 and n2
 */
const multiply = (n1, n2) => n1 * n2;

export { add, multiply };
