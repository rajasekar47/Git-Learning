//XML-HTTP methods:
//purpose: it is used to interact with the server via API - Application programming interface
//there are 5 steps;
//step1: create a XML-HTTP Object
var request = new XMLHttpRequest();
//step2: open a request
request.open("GET","https://restcountries.com/v3.1/all")