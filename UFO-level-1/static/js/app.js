// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// build funtion to biuld the table

function builtTable(data) {
    tbody.html("");
    data.forEach((datavalue) =>{
        var row = tbody.append("tr");
        row.text(" ")
        
        //Object.values(data).forEach(value =>console.log(value));
        Object.values(datavalue).forEach(value =>{
            row.append("td").text(value);
        });
    });
    };

// build table after filtered data
var input = d3.select("#datetime");
var button =d3.select("button");
input.on("change", function() {
    var inputValue = d3.event.target.value;
   // console.log(inputValue);
    var filterdata = tableData.filter( UFO => UFO.datetime ==inputValue);
    console.log(filterdata);
    
    button.on ("click", function() {
    builtTable(filterdata)  
    
 });
});
builtTable(tableData);