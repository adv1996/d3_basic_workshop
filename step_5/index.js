// basic example of d3 data binding
// see detailed explaination of how it works https://bost.ocks.org/mike/join/
var theData = [ 1, 2, 3 ]

var p = d3.select("body").selectAll("p") // returns empty selection
    .data(theData) //selection is joined to an array
    .enter() //3 possible states (enter / update / exit) because this is empty we use enter to return selection
    .append("p") //add p tag to each data element
    .text("hello "); //attr of p tag

// javascript anonymous functions
// javascript reserved i and this
// var p = d3.select("body").selectAll("p")
//     .data(theData)
//     .enter()
//     .append("p")
//     .text(function(d) {
//         return d
//     });


//.data no key so you can pass array d3 generates key for you
//.enter placeholder for missing elements

// Instead of telling D3 how to do something, tell D3 what you want.
