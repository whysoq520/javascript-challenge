// from data.js
var tableData = data;

// YOUR CODE HERE!
var input = d3.select("#datetime");
var button =d3.select("button")
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

builtTable(tableData);


//var inputValue = input.property("value")
input.on("change", function() {
    var inputValue = d3.event.target.value;
   // console.log(inputValue);
    var filterdata = tableData.filter( UFO => UFO.datetime ==inputValue);
    console.log(filterdata);
    
    button.on ("click", function() {
    builtTable(filterdata)  
    
 });
});
