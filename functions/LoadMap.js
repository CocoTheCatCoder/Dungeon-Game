const directory = "./maps/";
function loadmap(dir) {
    const fs = require("fs");
    let path = directory.concat(dir.concat(".txt"));
    let map = fs.readFileSync(path, "utf8");
    return map;
};
module.exports = { loadmap };