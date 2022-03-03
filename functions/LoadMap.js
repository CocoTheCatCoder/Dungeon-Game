const directory = "../maps/";
function loadmap(dir) {
    const fs = require('fs');
    let path = directory.concat(dir.concat(".map"));
    let map = fs.readFileSync(path,'utf-8').split('\n');
    return map;
};
module.exports = { loadmap };