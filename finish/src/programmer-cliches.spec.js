const ProgrammerCliches = require('./programmer-cliches');

describe('Programmer Cliches', () => {

  let programmerCliches;

  beforeEach(() => {
    programmerCliches = new ProgrammerCliches();
  });

  it('should exist', () => {
    expect(ProgrammerCliches).toBeTruthy();
  });

  it('should create a valid instance', () => {
    expect(programmerCliches.constructor).toBe(ProgrammerCliches);
  });

  it('should return "Hello World"', () => {
    expect(programmerCliches.helloWorld()).toBe('Hello World');
  });

  it('should return "Hello" + name when given a name', () => {
    expect(programmerCliches.hello('Bob')).toBe('Hello Bob');
  });

  it('should return "Hello" + name, with capital first letter regardless of input capitalization', () => {
    expect(programmerCliches.hello('aLiCe')).toBe('Hello Alice');
  });

  it('should throw an error if name is not entered', () => {
    expect(() => programmerCliches.hello()).toThrow(new Error('Name is required.'));
  });

  it('should return "Fizz" if number is a multiple of 3', () => {
    const count = 25;
    let output = '';
    for(let i = 0; i < count; i++) {
      output += programmerCliches.fizz(i);
    }
    expect(output).toBe('FizzFizzFizzFizzFizzFizzFizzFizzFizz');
  });

  it('should return "Buzz" if number is a multiple of 5', () => {
    const count = 25;
    let output = '';
    for(let i = 0; i <= count; i++) {
      output += programmerCliches.buzz(i);
    }
    expect(output).toBe('BuzzBuzzBuzzBuzzBuzzBuzz');
  });

  it('should return list of Fizz if input number is multiple of 3, Bazz if 5, FizzBazz if both, or the number if neither.', () => {
    let input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const output = [
      'FizzBuzz',
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
      17,
      'Fizz',
      19,
      'Buzz',
      'Fizz',
      22,
      23,
      'Fizz',
      'Buzz'
    ];
    expect(programmerCliches.fizzBuzz(input)).toEqual(output);
  });

  it('should return bar if given foo', () => {
    expect(programmerCliches.foobar('foo')).toBe('bar');
  });

  it('should return next metasyntactic variable from the input', () => {
    const vars = programmerCliches.metasyntacticVars;
    count = vars.length - 1; // Iterate through all but last
    for(let i = 0; i < count; i++) {
      expect(programmerCliches.foobar(vars[i])).toBe(vars[i + 1]);
    }
  });
});