// combine all the lessons to produce line graph

// set the dimensions and margins of the graph
var width = 960
var height = 500

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + 100)
    .attr("height", height + 100)
  .append("g")
    .attr("transform",
          "translate(" + 50 + "," + 50 + ")");
// Get the data
d3.csv("https://s3.us-east-2.amazonaws.com/gt-dataviz-d3-workshop/data.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the valueline path.
  // need to put data in brackets because .data can only take an array, function, or nothing, brackets ensures that each element is passed
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});


// ADVANCED HOVER OVER FUNCTION https://bl.ocks.org/micahstubbs/e4f5c830c264d26621b80b754219ae1b
