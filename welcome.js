var http = require('http');
var os = require('os'); 
http.createServer(function (req, res) {
  var html = buildHtml(req);
  
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8082);

function buildHtml(req) {
  var h1 = 'Welcome from '+ os.hostname();
  var body = '<br><br><br><br><b> Date : '+ getDateTime(0) + '&nbsp;&nbsp;&nbsp;&nbsp; Time :' +getDateTime(1) + '<br><br> OS Type : '+ os.type()+'&nbsp;&nbsp;&nbsp;&nbsp;Platform : '+ os.platform()+'<br><br>Total Memory : '+os.totalmem()+' bytes<br><br>Free Memory : '+os.freemem()+' bytes';
  var style = ' body { background-color: #D7CED7; color : #76323f ; text-align: center;}';
  var footer = '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><b>This page script is developed by ATT-Nitrous_Retail-IEDM (IBU-TUS-14)</b>';
  return '<!DOCTYPE html>'
       + '<html><header> <h1 align="center" >' + h1 + '</h1></header><body style="align:center"><style>'+style+'</style>'+ body + '</b></body><footer style="display: block;">'+footer+'</footer></html>';
};

function getDateTime(a) {

    var date = new Date();
   var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

if (a == 0){
    return day + "/" + month + "/" + year ;
}else 
return hour + ":" + min + ":" + sec ;

}