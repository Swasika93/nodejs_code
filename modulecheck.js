try {
    var os = require("os");
	
	
} catch(e) {
	console.log("Hello world");
    console.error(e.message);
    console.error("os is probably not found. Try running `npm install os`.");
    process.exit(e.code);
}