// var http = require("http");

// function process_request(req, res) {
//     var body = 'Thanks for calling!\n';
//     var content_length = body.length;
//     res.writeHead(200, {
//         'Content-Length': content_length,
//         'Content-Type': 'text/plain'
//     });
//     res.end(body);
// }

// var s = http.createServer(process_request);
// s.listen(8080);

// -----------------------------------------

// const hello = 'Hello ';

// const name = hello +  'Vaughn';

// module.exports = name;

// -----------------------------------------

// const add = function(a, b){
//     return a + b;
// };

// module.exports = add;

// -----------------------------------------

// var names = ['marc', 'Maria', 'John', 'jerry', 'alfred', 'Moonbeam'];

// names.sort();

// console.log(names);

// names.sort(function(a,b) {
//     var first = a.toLowerCase(), second = b.toLowerCase();
//     if(first < second) return -1;
//     if (first > second) return 1;
//     return 0;
// });

// console.log(names);

// -----------------------------------------

function shape(){
    this.X = 0;
    this.Y = 0;

    this.move = function (x, y){
        this.X = x;
        this.Y = y;
    };
    this.distance_from_origin = function (){
        return Math.sqrt(this.X*this.X + this.Y*this.Y);
    };
}
var s = new shape();
s.move(10, 10);
console.log(s.distance_from_origin());