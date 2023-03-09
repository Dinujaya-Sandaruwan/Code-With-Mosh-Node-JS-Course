var url = "http://mylogger.io/log";

function log(msg) {
	// Send HTTP req
	console.log(msg);
}
// module.exports.log = log;
module.exports = log;
