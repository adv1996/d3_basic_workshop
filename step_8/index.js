// basic shapes in d3 useful for various different graphs

//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
    .attr("width", 200)
    .attr("height", 200);

//Draw the Circle
var circle = svgContainer.append("circle")
    .attr("cx", 30)
    .attr("cy", 30)
    .attr("r", 20);

//Draw a Rectangle
// var rectangle = svgContainer.append("rect")
//     .attr("x", 10)
//     .attr("y", 10)
//     .attr("width", 50)
//     .attr("height", 100);

//Draw an ellipse
// var ellipse = svgContainer.append("ellipse")
//     .attr("cx", 50)
//     .attr("cy", 50)
//     .attr("rx", 25)
//     .attr("ry", 10);

// Draw a line
// var line = svgContainer.append("line")
//     .attr("x1", 5)
//     .attr("y1", 5)
//     .attr("x2", 50)
//     .attr("y2", 50);
//     .attr("stroke-width", 2)
//     .attr("stroke", "black");

//ADVANCED POLYGON AND POLYLINE
