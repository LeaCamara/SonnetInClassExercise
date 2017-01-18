// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML
console.log(theSonnet);
// we're taking the html and throwing it into the x but you can throw it back in by adding = "newSonnet" at the very end.
// .innerHTML = "newSonnet" will throw it back in

// we're going to get an element off of the DOM (Webpage/document). We have a variable named theSonnet.

// Find and output the starting position of the word "orphans"

console.log(theSonnet.indexOf ("orphans"))

// Output the number of characters in the sonnet

var numOfCharacters = theSonnet.length
console.log("numOfCharacters", numOfCharacters)

// Replace the first occurrence of the string "winter" with "yuletide"

var newSonnet = theSonnet.replace("winter", "yuletide")
console.log("new sonnet", newSonnet);
// regular expressions (RegEx), but Scott tries to avoid them where possible

// Replace all occurrences of the string "the" with "a large"
var aLarge = newSonnet.split(' the ').join(' a large ').split('The ').join('A large ')
console.log(aLarge);

// an array splice allows you to change something in the middle. strings and arrays have a lot of the same methods.
// ['apple', 'banana', 'pizza', 'apple'].splice(0, 1, 'omg') = ["apple"]
// var array = ['apple', 'banana', 'pizza', 'apple']
// array.splice(0, 1, 'omg') = apple
// array = ['omg', 'banana', 'pizza', 'apple']
// splice, shift, etc., are destructive methods; they change the original thing
// a loop could work, splice could work even if mb a bit messy,
// join can work.
// var string = "There are a lot of apples in the apple pie"
// string.split('apple') = ["There is a lot of ", "s in the ", " pie"]
// string.split('apple').join('banana') = "There are a lot of bananas in the banana pie"
// string.split(' the ').join(' omg ').split(' The ').join(' OMG ')

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML=aLarge


//////////WITH GILBERT, 1/18/17 *********************

var sonnet = document.getElementById("sonnet").textContent;
// gives you the content of the div

var sonnet = document.getElementById("sonnet").innerHTML;
// this did the same thing I think

console.log("blah blah", sonnet);
// returns:
// blah blah
// <div id="sonnet">...</div>

var orphanSearch = sonnet.search("orphans");
console.log("orphans:", orphanSearch);

// Finding the word orphans position:
var orphanSearch = sonnet.indexOf("orphans");
console.log("orphans:", orphanSearch);

// the length of the entire paragraph
// How many characters including spaces are in the entire paragraph
var sample = sonnet.length;
console.log("sonnet length:", sample);

// replace winter with yuletide
// str.replace(regexp|substr, newSubstr|function)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

var winterReplaced = sonnetParagraph.replace("winter", "yuletide");
console.log("winterReplaced", winterReplaced);

// replace all occurrences of the string "the" with "a large"
var replaceAll = sonnetParagraph.replace(/the /gi, "a large ");
console.log("replaceAll:", replaceAll);

// to change it in the HTML:
document.getElementById("sonnet").innerHTML = replaceAll;
