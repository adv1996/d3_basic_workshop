// example from https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0

var easing = [
    "easeElastic",
    "easeBounce",
    "easeLinear",
    "easeSin",
    "easeQuad",
    "easeCubic",
    "easePoly",
    "easeCircle",
    "easeExp",
    "easeBack"
    ];

var svg = d3.select("body")
        .append("svg")
        .attr("width", 960)
        .attr("height", 500);

var timeCircle = svg.append("circle")
    .attr("fill", "steelblue")
    .attr("r", 20);

repeat();

function repeat() {
  timeCircle
    .attr('cx', 210)
    .attr('cy', 70)
    .transition()             // apply a transition
    .ease(d3.easeLinear)           // control the speed of the transition
    .duration(4000)           // apply it over 4000 milliseconds
    .attr('cx', 720)          // move the circle to 720 on the x axis
    .transition()             // apply a transition
    .ease(d3.easeLinear)           // control the speed of the transition
    .duration(4000)           // apply it over 4000 milliseconds
    .attr('cx', 210)          // return the circle to 210 on the x axis
    .on("end", repeat);       // when the transition finishes start again
};
