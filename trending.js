var request = require('request');
var jsonfile = require('jsonfile');
var util = require('util');
var path=require('path');

var file=path.resolve(__dirname, 'data.json');
console.log(file);
//Lets configure and request
var dataJSON;
request({
    url: 'http://www.google.com/trends/hottrends/hotItems', //URL to hit
    qs: {ajax: '1', htd:'20151013',pn:'p1',htv:'l'}, //Query string data
    method: 'POST',
    //Lets post the following key/values as form
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
      dataJSON=JSON.parse(body);
      //dataJSON=dataJSON.replace(/'/g, '"');
        //console.log(response.statusCode,dataJSON);
        jsonfile.writeFile(file, dataJSON, function (err) {
          console.error(err)
        })
    }
});
