var utils = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('test greet()', () => {
    
    test('outputs the correct string', () => {
        expect(greet('Elizabeth')).toBeCalled("Hello, Elizabeth");
      });

      test('outputs the null value string', () => {
        expect(greet(null)).toBeCalled("Hello, there!");
      }); 
      
      test('outputs the all caps for shouting', () => {
        expect(greet("JOSE")).toBeCalled("HELLO JOSE!");
      }); 

      test('outputs greeting for two names', () => {
        expect(greet(['Jose','Pep'])).toBeCalled("Hello, Jose, Pep");
      });

      test('outputs greeting for two or more names', () => {
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBeCalled("Hello, Alex, Arsene, Jose, Zidane");
      });
})