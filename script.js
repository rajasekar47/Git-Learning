//XML-HTTP methods:
//purpose: it is used to interact with the server via API - Application programming interface
//there are 5 steps;
//step1: create a XML-HTTP Object
var request = new XMLHttpRequest();
//step2: open a request
request.open("GET","https://restcountries.com/v3.1/all")
//step3: kickstart a request
request.send();
//step4: once the data successfully received from the server
//server status code is 200
//data coming from the server is of type - string 
//we are converting string to object.
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    //to print all 250 countries comman name:
    for(var i=0;i<res.lenght;i++){
    console.log(res[i].name.common)
} 
}