var utils = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('test greet()', () => {
    
    test('outputs the correct string', () => {
        expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
      });

      test('outputs the null value string', () => {
        expect(greet(null)).toBe('Hello, there!');
      }); 
      
      test('outputs the all caps for shouting', () => {
        expect(greet('JOSE')).toBe('HELLO JOSE!');
      }); 

      test('outputs greeting for two names', () => {
        expect(greet(['Jose','Pep'])).toBe('Hello, Jose, Pep');
      });

      test('outputs greeting for two or more names', () => {
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
      });
})