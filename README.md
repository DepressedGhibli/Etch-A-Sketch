# Etch-A-Sketch

This prototype works for all vlaues (1 - 100)

it prompts the user for a number ✅
it creates a grid of boxes with the number ✅
when the grid boxes are hovered over it changes the colour to pink ✅
Made it so the programme dynamically makes divs for each column and that column holds the same number (grid number) of blocks. ✅
The divs now change colour randomly with code explained below ✅
Made it so the Grid is clear when the button is clicked (using a while loop to remove all elements from the container div) ✅


line 13 < 'event.target.style.backgroundColor = #'+Math.floor(Math.random()*16777215).toString(16); >

1. event:

In JavaScript, when an event occurs (e.g., a click, mouseover, etc.), an event object is created to represent that event.
The event object contains information about the event, such as the target element, type of event, mouse coordinates, etc.

2. event.target:

event.target refers to the HTML element on which the event occurred.
In the given code, it is the element that triggered the event to which this code is attached.

3. .style:

The style property of an element is used to access or modify the inline style of the element.
Inline styles are styles applied directly to an HTML element using the style attribute.

4. .backgroundColor:

This is a property of the style object that represents the background color of an element.

5. = '#' + Math.floor(Math.random() * 16777215).toString(16):

This part of the code is assigning a new background color to the target element.

6. Math.random() * 16777215:

Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Multiplying it by 16777215 scales the random number to a large value. 16777215 is the decimal equivalent of 0xFFFFFF, which is the maximum RGB color value.

7. Math.floor(...):

Math.floor() rounds down the scaled random number to the nearest integer.

8. .toString(16):

toString(16) converts the integer to its hexadecimal (base-16) representation.

9. '#' +

Concatenates the '#' character with the hexadecimal color code to form a valid hexadecimal color code.
