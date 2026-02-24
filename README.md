1️. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANswer:

getElementById():
a.Selects one element using its unique ID.
b.Returns a single element.
c.IDs must be unique in a page.
Example:
document.getElementById("header");

getElementsByClassName():
a.Selects elements by class name.
b.Returns an HTMLCollection (like an array).
c.Can contain multiple elements.
Example:
document.getElementsByClassName("card");

querySelector():
a.Selects the first matching element using a CSS selector.
b.Very flexible (can use id, class, tag, attribute, etc.).
Example:
document.querySelector(".card");

querySelectorAll():
a.Selects all matching elements.
b.Returns a NodeList.
c.Also uses CSS selectors.
Example:
document.querySelectorAll(".card");



2️.How do you create and insert a new element into the DOM?
Answer:

To create and insert a new element:
Step 1: 
Create the element
Example:
const div = document.createElement("div");
Step 2: 
Add content
Example:
div.innerText = "Hello World";
Step 3: 
Insert into the DOM
Example:
document.body.appendChild(div);

This will create a new <div> and add it to the webpage.



3️. What is Event Bubbling? And how does it work?
Answer:

Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.
For example:
Click a button inside a div:
a.The button event runs first.
b.Then the event moves to the parent div.
c.Then to the body.
d.Then to the document.

This upward movement is called bubbling.
It allows parent elements to detect events that happen inside their children.



4. What is Event Delegation in JavaScript? Why is it useful?
Answer:

Event Delegation means adding an event listener to a parent element instead of multiple child elements.
Because of event bubbling, the parent can detect which child was clicked.
Example:
Instead of adding click events to 20 buttons,
add one click event to the container.

Why is it useful?
a.Improves performance
b.Reduces memory usage
c.Works for dynamically added elements
d.Cleaner and shorter code



5️. What is the difference between preventDefault() and stopPropagation()?
Answer:

preventDefault():
a.Stops the browser’s default behavior.
b.Example: Prevent form submission or prevent a link from navigating.

Example:
event.preventDefault();

stopPropagation():
a.Stops the event from bubbling up to parent elements.
b.Prevents parent event listeners from running.

Example:
event.stopPropagation();