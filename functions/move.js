const game = "./maps/current.txt";
const fs = require("fs");

function getIndex(){
    const t = fs.readFileSync(game, "utf8").split("\n");
    let m = [];
    let tI = 0;
    let i = 0;
    for(var a=0;a<t.length;a++){
        m.push(t[a]);
        if(t[a].includes("@")){
            tI += a;
            for(var b=0;b<t[a].length;b++){
                if(t[a][b]=="@"){ i += b };
            };
        };
    };
    return { m,tI,i };
};

function drawLine(d){
    let data = getIndex()
    switch(d){
        case "w":
            console.log(data);
            break;
        case "a":
            break;
        case "s":
            break;
        case "d":
            break;
    };
};

function move(d){
    if(!["w","a","s","d"].includes(d.toLowerCase())) return;
    drawLine(d.toLowerCase());
};
module.exports = { move };