// from data.js
var tableData = data;

// YOUR CODE HERE!
var input = d3.select("#datetime");
var button =d3.select("button")
var tbody = d3.select("tbody");
//var inputValue = input.property("value")
input.on("change", function() {
    var inputValue = d3.event.target.value;
    console.log(inputValue);
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
