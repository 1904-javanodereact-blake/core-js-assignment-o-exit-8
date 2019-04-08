/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case 'square':
      let square = '';
      for (let i = 0; i < height; i++)
       {
        square += character;
      }
      for (let j = 0; j < height; j++) 
      { console.log(square); }

      break;

    case 'triangle':
      let triangle = '';
      for (let i = 0; i <= height; i++) {
        console.log(triangle);
        triangle += character;

      }
      break;

    case 'diamond':
      let space = '';
      let diamond = '';
      for (let i = 0; i <= height; i++)
       {
        diamond += character;
        for (let s = height-1; s >= i; s--) 
        {
          space += ' ';
          console.log(`spaces: ${s}`);
          
        }
        console.log(space+diamond);
        
      }
      break;

  }
  

}

printShape('square', 5, '#');
printShape('triangle', 5, '*');
printShape('diamond', 5, 'o');