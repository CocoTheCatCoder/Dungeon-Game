function move(d,map){
    const arrWidth = map[0].length;
    let uArr = []; // [1] is the active line
    let uArrI = 0;
    for(var i=0;i<map.length;i++){
        if(map[i].includes("@")){
            uArr.push(i-1);
            uArr.push(i);
            uArr.push(i+1);
        };
    };
    for(var i=0;i<map[uArr[1]].length;i++){
        if(map[uArr[1][i]]==="@") uArrI += i;
    };
    switch(d){
        case "w":
            map[uArr[1]] = map[uArr[1]].replace(/@/i,"#");
            map[uArr[0]] = "";
            for(var i=0;i<arrWidth;i++){
                if(i==uArrI){map[uArr[0]] += "@"};
                map[uArr[0]] += "#"
            };
            return map;
    };
};
module.exports = { move };