// // var s1 = '2 + 2';             // creates a string primitive
// // var s2 = new String('2 + 2'); // creates a String object
// // console.log(eval(s1));        // returns the number 4
// // console.log(eval(s2));
// // console.log(eval(s2.valueOf()));
// //
// // // var num = 15;
// // // console.log(String.replace(num, "5", "2"));
// // var str = 'Life, the universe and everything. Answer:';
// //
// // console.log(str + ' ' + str.length);
// //
// // var sentence = 'The quick brown fox jumps over the lazy dog.';
// //
// // var index = 4;
// //
// // console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// // // expected output: "The character at index 4 is q"
// //
// // var sentence = 'The quick brown fox jumps over the lazy dog.';
// //
// // var index = 4;
// //
// // console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// // // expected output: "The character code 113 is equal to q"
// var str1 = 'Hello';
// var str2 = 'World';
//
// console.log(str1.concat(' ', str2," hiu"));
// // expected output: "Hello World"
//
// console.log(str2.concat(', ', str1));
// // expected output: "World, Hello"
var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
var regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
