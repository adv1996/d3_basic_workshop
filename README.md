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
    - HTML setup
    - CSS example
	- Javascript
	   - DOM
	      - root -> body -> divs / p / a / h / img
	   - Manipulating HTML elements
	   - Manipulating HTML attributes
	   - Manipulating CSS
	   - Add / Delete HTML elements
2. SVG and File Management ( 5 min)
	- Split CSS File
	- Split Javascript
	- Creating SVG circle
	   - Width / Height attributes
	   - Shape attributes (cx, cy, r, fill)
	   - Coordinate Space
3. Set Up d3 and Test ( 2 min )
4. Use D3 to Manipulate DOM to add svg and add circle within svg. ( 3 min)
5. Simple Data Binding ( 5 min)
	- .data() / passing theData as a parameter
	- .enter()
	- .append()
	- javascript anonymous function
	- chain syntaxing
6. Binding Data to SVG elements (10 min)
	- Creating different size circles based on data set (list)
	- Create SVG container separately
	- Bind circles to data and add to svg
	- Set attributes for each circle
	- Anonymous function and conditionals
7. Using JSON as our dataset (Javascript Object Notation) (4 min)
8. D3 Shapes (3 min)
	- Rectangle
	- Line
	- Advanced: Polygon
	- Advanced: Polyline
9. SVG Path and Lines (7 min)
	- Create an SVG Path -> need path because line is only 2 points
	- Create Line Function
	- Append path and set d attribute to line function
	- path attributes
        - stroke
        - stroke-width
        - fill
10. Groups and Transformations (7 min)
	- Create a group
	- Transform
		- Translate
		- Rotate
		- Scale
11. D3 csv function and For Loops (5 min)
	- Serve files / locally / use s3 / google docs https
	- Demonstrate d3.csv function
	- Format date
	- Convert string to number using +
	- Using console.log
12. Simple Line Graph (15 min)
	- Set Dimensions
	- Create SVG
	- Create G within SVG adjust margins
	- Scales (x and y axes)
	- X and Y Domains
		- extent and array (same thing)
	- Append x and y axes
	- d3 csv / parse time data (from last example) -> stop show graph
    - Create Value Line Function (from step 9)
	- Append Path
		- data takes [data] as parameter bc it has a key
	- Add line attributes to style sheet using class attribute
	- Explain Bar charts / Scatter Plots / etc
13. Transitions (5 min)
	- Create SVG
	- Add Shape
	- Transition Function
