// from data.js
var tableData = data;

// //Your code here
var tbody = d3.select("tbody");

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



var filterdata ={};
function filtertable(){
    let data1=tableData;
    Object.entries(filterdata).forEach(([key,value]) =>{
        data1 = data1.filter(row =>row[key]===value);
    });
    builtTable(data1);
}

function updateData () {
    var initial = d3.select(this).selectAll("input");
    var initialValue = initial.property("value");
    var initialID =initial.attr("id");

    if(initialValue){
        filterdata[initialID] = initialValue;
    }
    else {
        delete filterdata[initialID];
    }
    filtertable();
};
d3.select(".filter").on("change", updateData);


builtTable(tableData);

// var input = d3.selectAll("li");
// var button =d3.select("button")
// var tbody = d3.select("tbody");
// inputvalue ={}
// //var inputValue = input.property("value")
// input.on("change", function() {
//     var input = d3.event.target.value;
//     // console.log(` This : ${input}`);
//    var datevalue= d3.select("#datetime").property('value');
    
//         //console.log(`DAtetiem: ${datevalue}`);
//     if (datevalue != " ") {
//         inputvalue["datetime"] = datevalue;
//         // console.log(`date:${datevalue}`);
//          };
//     var cityvalue = d3.select("#city").property('value');
//     // console.log(` city: ${cityvalue}`);
//     if (cityvalue !=" ") {
//         inputvalue["city"] = cityvalue};
       
//     var statevalue = d3.select("#state").property('value');
//     // console.log(` state: ${statevalue}`);
//     if (statevalue !=" ") {
//         inputvalue["state"] = statevalue};

//     var countryvalue = d3.select("#country").property('value');
//     // console.log(` country: ${countryvalue}`);
//     if (countryvalue != " ") {
//         inputvalue["country"] = countryvalue};
    

//     var shapevalue = d3.select("#shape").property('value');
//     // console.log(` shape: ${shapevalue}`);
//     if (shapevalue != " ") {
//         inputvalue["shape"] = shapevalue};

//         //console.log (`inputvalue: ${inputvalue}`);

//     // console.log(`date: ${filter.datetime}`);
//     // console.log(`state: ${filter.state}`);
//     // console.log(`shape: ${filter.shape}`);
//     Object.entries(inputvalue).forEach(([key, value]) => console.log(`Key: ${key} ; Value: ${value}`));
//    //tableData.forEach(data =>console.log(`datetime:${data.datetime}, 'shape': ${data.shape}`));
 
//     //var filterdata = tableData.filter( UFO => UFO.datetime ==inputValue);
// });