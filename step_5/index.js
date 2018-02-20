// basic example of d3 data binding

var theData = [ 1, 2, 3 ]

var p = d3.select("body").selectAll("p")
    .data(theData)
    .enter()
    .append("p")
    .text("hello ");

// javascript anonymous functions
// javascript reserved i and this
// var p = d3.select("body").selectAll("p")
//     .data(theData)
//     .enter()
//     .append("p")
//     .text(function(d) {
//         return d
//     });
