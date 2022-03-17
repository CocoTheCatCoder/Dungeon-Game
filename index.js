const { Loadmap } = require('./functions/loadMap.js');
const { move } = require('./functions/move.js')
const rl = require('./rl.js');
console.log(Loadmap("one"));
rl.on('line', function(r){
    move(r);
});