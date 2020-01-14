// from data.js
var tableData = data;

// YOUR CODE HERE!
var input = d3.select("#datetime");
var tablebody = d3.select("tbody");
//var inputValue = input.property("value")
input.on("change", function() {
    var inputValue = d3.event.target.value;
    console.log(inputValue);
    var filteredData= tableData.filter( UFO =>UFO.datetime===inputValue)
    console.log(filteredData)
});


filteredData.forEach((report) => {
    var row = tablebody.append("tr");
    Object.entries(report).forEach(([key, value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});
