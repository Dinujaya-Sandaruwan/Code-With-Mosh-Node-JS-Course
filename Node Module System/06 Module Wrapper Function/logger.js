// (function (exports, require, module, __filename, __dirname) {
// 	console.log(__filename);
// 	console.log(__dirname);
// 	var url = "http://mylogger.io/log";

// 	function log(msg) {
// 		// Send HTTP req
// 		console.log(msg);
// 	}

// 	module.exports = log;
// 	// module.exports.log = log;
// 	// module.log = log;
// });

console.log(__filename);
console.log(__dirname);
var url = "http://mylogger.io/log";

function log(msg) {
	// Send HTTP req
	console.log(msg);
}

module.exports = log;
// module.exports.log = log;
// module.log = log;
