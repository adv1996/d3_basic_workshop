# d3_workshop
Data Viz Gatech D3 Workshop

D3 Workshop Outline
Intro
	D3 is a javascript library that manipulates the DOM in html using svgs.
	We will first go through basic html, javascript, css, and svgs before stepping into d3.
	Then we will learn d3 fundaments like selections and groups as well as reading data.
	By the end we will create a simple graph.

76 minutes planned 14 minutes for Questions

1. Set Up Foundation (5 min)
	a. HTML setup
	b. CSS example
	c. Javascript
		i. DOM
			root -> body -> divs / p / a / h / img
		ii. Manipulating HTML elements
		iii. Manipulating HTML attributes
		iv. Manipulating CSS
		v. Add / Delete HTML elements
2. SVG and File Management ( 5 min)
	a. Split CSS File
	b. Split Javascript
	c. Creating SVG circle
		i. width / height attributes
		ii. Shape attributes (cx, cy, r, fill)
		iii. coordinate space
3. Set Up d3 and Test ( 2 min )
4. Use D3 to Manipulate DOM to add svg and add circle within svg. ( 3 min)
5. Simple Data Binding ( 5 min)
	a. .data() / passing theData as a parameter
	b. .enter()
	c. .append()
	d. javascript anonymous function
	e. chain syntaxing
6. Binding Data to SVG elements (10 min)
	a. Creating different size circles based on data set (list)
	b. Create SVG container separately
	c. Bind circles to data and add to svg
	d. Set attributes for each circle
	e. Anonymous function and conditionals
7. Using JSON as our dataset (Javascript Object Notation) (4 min)
8. D3 Shapes (3 min)
	a. Rectangle
	b. Line
	c. Advanced: Polygon
	d. Advanced: Polyline
9. SVG Path and Lines (7 min)
	a. Create an SVG Path -> need path because line is only 2 points
	b. Create Line Function
	c. Append path and set d attribute to line function
	d. path attributes
		i.
10. Groups and Transformations (7 min)
	a. Create a group
	b. Transform
		i. Translate
		ii. Rotate
		iii. Scale
11. D3 csv function and For Loops (5 min)
	a. Serve files / locally / use s3/ google docs https
	b. Demonstrate d3.csv function
	c. Format data
	d. Convert string to number using +
	e. Using console.log
12. Simple Line Graph (15 min)
	a. Set Dimensions
	b. Create SVG
	c. Create G within SVG adjust margins
	d. Scales (x and y axes)
	e. X and Y Domains
		i. extent and array (same thing)
	f. Append x and y axes
	d. d3 csv / parse time data (from last example) -> stop show graph
	e. Create Value Line Function (from step 9)
	f. Append Path
		i. data takes [data] as parameter bc it has a key
	g. Add line attributes to style sheet
	g. Explain Bar charts / Scatter Plots / etc
13. Transitions (5 min)
	a. Create SVG
	b. Add Shape
	c. Transition Function
