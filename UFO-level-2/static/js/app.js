// from data.js
var tableData = data;

// YOUR CODE HERE!
// setting variables
var inputdate = d3.select("#datetime");
var inputcity = d3.select("#city");
var inputstate = d3.select("#state");
var inputcountry = d3.select("#country");
var inputshape = d3.select("#shape");
var inputduration = d3.select("duration");
var button = d3.select("buttton");


inputdate.on("change", function() {
    var inputValue = d3.event.target.value;
    console.log(inputValue);
//     var filterdate = tableData.filter( UFO => UFO.datetime ==inputdate);
    
//     button.on ("click", function() {
       
//     filterdata.forEach((data) =>{
//         var row = tbody.append("tr");
//         row.text(" ")
        
//         //Object.values(data).forEach(value =>console.log(value));
//         Object.values(data).forEach(value =>{
//             row.append("td").text(value);
//         });
//     });
//  });
});