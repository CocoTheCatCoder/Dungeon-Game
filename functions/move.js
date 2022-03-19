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

function writeLine(nS,cS,lI,d,m){
    fs.writeFileSync(game,"",function(err){
        if(err) throw err;
    });
    if(["w","s"].includes(d)){
        if(d=="w"){
            for(var i=0;i<m.length;i++){
                if(i==lI-1){
                    fs.appendFileSync(game,nS,function(err){
                        if(err) throw err;
                        fs.appendFileSync(game,cS,function(err){
                            if(err) throw err;
                            i += 2;
                        });
                    });
                }else{
                    fs.appendFileSync(game,m[i],function(err){
                        if(err) throw err;
                    });
                };
            };
        };
    };
};

function drawLine(d){
    if(["w","s"].includes(d)){
        let data = getIndex()
        let nStrT;
        if(d=="w"){
            nStrT = data.m[data.tI-1];
        }else{
            nStrT = data.m[data.tI+1];
        };
        const cStrT = data.m[data.tI];
        let uStr = "";
        let cStr = "";
        for(var i=0;i<nStrT.length;i++){
            if(i==data.i){
                uStr += "@";
            }else{ uStr += nStrT[i] };
        };
        for(var i=0;i<cStrT.length;i++){
            if(i==data.i){
                cStr += " ";
            }else{ cStr += cStrT[i] };
        };
        writeLine(uStr,cStr,data.tI,d,data.m)
    };
};

function move(d){
    if(!["w","a","s","d"].includes(d.toLowerCase())) return;
    drawLine(d.toLowerCase());
};
module.exports = { move };