// from data.js
var tableData = data;

// YOUR CODE HERE!
// setting variables
var button = d3.select("#filter-btn")

button.on("click", function() {

  // date 
  var inputdate = d3.select("#datetime");
  var datevalue  = inputdate.property("value");
  console.log(datevalue);

  // city
  var inputcity = d3.select("#city");
  var cityvalue  = inputcity.property("value");
  console.log(cityvalue);
  
// state
var inputstate = d3.select("#state");
var statevalue = inputstate.property("value");
console.log(statevalue);

// country
var inputcountry = d3.select ("#country");
var countryvalue = inputcountry.property("value");
console.log(countryvalue);

// shape
var inputshape = d3.select ("#shape");
var shapevalue = inputshape.property("value");
console.log(shapevalue);
  

d3.selectAll("button").on("click", function() {
  // `this` will console log the `button` element
  console.log(this); // d3.event.target, target of the event
});

d3.selectAll("li").on("click", function() {
  // you can select the element just like any other selection
  var listItem = d3.select(this);
  listItem.style("color", "blue");

  var listItemText = listItem.text();
  console.log(listItemText);
});
  // console.log(tableData);
tbody = d3.select ("tbody");

if (datevalue != " " && cityvalue ==" " && statevalue ==" " && countryvalue ==" " && shapevale ==" ") {
  var filter = tableData.filter( UFO => UFO.datetime == datevalue )};
if (datevalue != " " && cityvalue !=" " && statevalue ==" " && countryvalue ==" " && shapevale ==" ") {
  var filter = tableData.filter( UFO => UFO.datetime == datevalue && UFO.city == cityvalue )};
if (datevalue != " " && cityvalue ==" " && statevalue !=" " && countryvalue ==" " && shapevale ==" ") {
  var filter = tableData.filter( UFO => UFO.datetime == datevalue && UFO.state== statevalue )};
if (datevalue != " " && cityvalue ==" " && statevalue ==" " && countryvalue !=" " && shapevale ==" ") {
  var filter = tableData.filter( UFO => UFO.datetime == datevalue && UFO.country == countryvalue )};
if (datevalue != " " && cityvalue ==" " && statevalue ==" " && countryvalue ==" " && shapevale !=" ") {
  var filter = tableData.filter( UFO => UFO.datetime == datevalue && UFO.shape == shapevalue )};
if (datevalue == " " && cityvalue !=" " && statevalue ==" " && countryvalue ==" " && shapevale ==" ") {
  var filter = tableData.filter( UFO => UFO.datetime == datevalue && UFO.city == cityvalue )};

filter.forEach((data) =>{
          var row = tbody.append("tr");
          row.html(" ")
          
          //Object.values(data).forEach(value =>console.log(value));
          Object.values(data).forEach(value =>{
              row.append("td").text(value);
          });
      });
    });