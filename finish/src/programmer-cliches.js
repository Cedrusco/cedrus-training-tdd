/**
 * Class for running many programming cliches
 */
class ProgrammerCliches {
  constructor() {
    // https://en.wikipedia.org/wiki/Metasyntactic_variable
    this.metasyntacticVars = [
      'foo',
      'bar',
      'baz',
      'qux',
      'quux',
      'quuz',
      'corge',
      'grault',
      'garply',
      'waldo',
      'fred',
      'plugh',
      'xyzzy',
      'thud'
    ];
  }

  /**
   * Return "Hello World" cliche
   */
  helloWorld() { // eslint-disable-line class-methods-use-this
    return 'Hello World';
  }

  /**
   * Return "Hello" with the given name. Capitalize the name.
   * @param {string} name The name to output with "Hello"
   */
  hello(name) { // eslint-disable-line class-methods-use-this
    if (!name) {
      throw new Error('Name is required.');
    }
    const formattedName = name.substring(0, 1).toUpperCase() + name.substring(1, name.length).toLowerCase();
    return `Hello ${formattedName}`;
  }

  /**
   * Return "Fizz" if number is multiple of 3
   * @param {number} number The number to check
   */
  fizz(number) { // eslint-disable-line class-methods-use-this
    return (number % 3 === 0) ? 'Fizz' : '';
  }

  /**
   * Return "Buzz" if the number is a multiple of 5
   * @param {number} number The number to check
   */
  buzz(number) { // eslint-disable-line class-methods-use-this
    return (number % 5 === 0) ? 'Buzz' : '';
  }

  /**
   * Return list of Fizz if input number is multiple of 3,
   * Bazz if 5, FizzBazz if both, or the number if neither.
   */
  fizzBuzz(numbers = []) {
    return numbers.map(number => (`${this.fizz(number)}${this.buzz(number)}` || number));
  }

  /**
   * Return next metasyntactic variable from list (given foo, return bar, and so on)
   * @param {string} input The metasyntactic variable to return
   */
  foobar(input) {
    return this.metasyntacticVars[this.metasyntacticVars.indexOf(input) + 1];
  }
}

module.exports = ProgrammerCliches;