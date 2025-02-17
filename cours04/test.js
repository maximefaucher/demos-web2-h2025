var parentDOM = document.getElementById("parent-id");

var test = parentDOM.getElementsByClassName("test"); //test is not target element
console.log(test); //HTMLCollection[1]

var testTarget = parentDOM.getElementsByClassName("test")[0]; //here , this element is target
console.log(testTarget); //<p class="test">hello word2</p>