// example from https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0

// need to read from https file because cross origin request only for https
// to read locally use python simple server or node
var parseTime = d3.timeParse("%d-%b-%y");

d3.csv("https://s3.us-east-2.amazonaws.com/gt-dataviz-d3-workshop/data.csv", function(error, data) {
    if (error) throw error;
    // format the data
    data.forEach(function(d) {
        d.date = parseTime(d.date);
        d.close = +d.close;
        console.log(d.date)
    });
});
