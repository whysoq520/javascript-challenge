// from data.js
var tableData = data;

//Your code here

var input = d3.selectAll("li");
var button =d3.select("button")
var tbody = d3.select("tbody");
inputvalue ={}
//var inputValue = input.property("value")
input.on("change", function() {
    var input = d3.event.target.value;
    // console.log(` This : ${input}`);
   var datevalue= d3.select("#datetime").property('value');
    
        //console.log(`DAtetiem: ${datevalue}`);
    if (datevalue !== " ") {
        inputvalue["datetime"] = datevalue;
        // console.log(`date:${datevalue}`);
         };
    var cityvalue = d3.select("#city").property('value');
    // console.log(` city: ${cityvalue}`);
    if (cityvalue !== " ") {
        inputvalue["city"] = cityvalue};
       
    var statevalue = d3.select("#state").property('value');
    // console.log(` state: ${statevalue}`);
    if (statevalue !==" ") {
        inputvalue["state"] = statevalue};

    var countryvalue = d3.select("#country").property('value');
    // console.log(` country: ${countryvalue}`);
    if (countryvalue !== " ") {
        inputvalue["country"] = countryvalue};
    console.log (`filter: ${filter}`)

    var shapevalue = d3.select("#shape").property('value');
    // console.log(` shape: ${shapevalue}`);
    if (shapevalue !== " ") {
        inputvalue["shape"] = shapevalue};
    
    // console.log (`filter: ${filter}`)

    // console.log(`date: ${filter.datetime}`);
    // console.log(`state: ${filter.state}`);
    // console.log(`shape: ${filter.shape}`);

    Object.entries(inputvalue([key,value]){ 
        filter row[key]===value
    });

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