const fs = require('fs');
const directory = "./maps/";
const game = "./maps/current.txt";
function Loadmap(dir) {
    let t = fs.readFileSync(directory.concat(dir.concat(".txt")), "utf8");
    fs.writeFileSync(game,t,function(err){ if(err) throw err});
    return t;
};
module.exports = { Loadmap };