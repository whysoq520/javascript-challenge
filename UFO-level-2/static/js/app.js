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
};

function updateData () {
    var initial = d3.select(this).select("input");
    var initialValue = initial.property("value");
    var initialID =initial.attr("id");
    console.log(initialID);
    console.log(initialValue);

    if(initialValue){
        filterdata[initialID] = initialValue;
    }
    else {
        delete filterdata[initialID];
    }
    filtertable();
};
d3.selectAll(".filter").on("change", updateData);


builtTable(tableData);