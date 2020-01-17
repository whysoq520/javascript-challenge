// from data.js
var tableData = data;

//Your code here

var input = d3.selectAll("li");
var button =d3.select("button")
var tbody = d3.select("tbody");
//var inputValue = input.property("value")
input.on("change", function() {
    var inputValue = d3.select(this);
        console.log(`this ${inputValue}`);
    var inputValue2 = d3.event.target.value;
    console.log(`event target:${inputValue2}`);
        
          
    var filter ={};
    filter.datetime = d3.select("#datetime").property.value;
   console.log(filter.datetime)
    filter.city =d3.select("#city").property.value;
    filter[state] =d3.select("#state").property.value;
    filter[country] =d3.select("#country").property.value;
    filter[shape] =d3.select("#shape").property.value;
    var filterdata = tableData.filter( UFO => UFO.datetime ==inputValue);
    
    button.on ("click", function() {
       
    filterdata.forEach((data) =>{
        var row = tbody.append("tr");
        row.text(" ")
        
        //Object.values(data).forEach(value =>console.log(value));
        Object.values(data).forEach(value =>{
            row.append("td").text(value);
        });
    });
 });
});
// // setting variables
// var button = d3.select("#filter-btn")

// button.on("click", function() {

//   // date 
//   var inputdate = d3.select("#datetime");
//   var datevalue  = inputdate.property("value");
//   console.log(datevalue);

//   // city
//   var inputcity = d3.select("#city");
//   var cityvalue  = inputcity.property("value");
//   console.log(cityvalue);
  
// // state
// var inputstate = d3.select("#state");
// var statevalue = inputstate.property("value");
// console.log(statevalue);

// // country
// var inputcountry = d3.select ("#country");
// var countryvalue = inputcountry.property("value");
// console.log(countryvalue);

// // shape
// var inputshape = d3.select ("#shape");
// var shapevalue = inputshape.property("value");
// console.log(shapevalue);
  

// });