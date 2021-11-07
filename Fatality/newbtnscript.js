// value2 : 출발역
// name2 : 출발시간

function handleOnChange(e){
    var value = e.value;
    value2=value;
}
function printName()  {
    var name = document.getElementById('go').value;
    name2=name;
}

function handleOnChange2(e){ //도착역
    var value = e.value;
    value1=value;
}

//const nowSelect = document.getElementById('result');
//var nowSelecttime = document.getElementById('timeset. #text');
//let startsub = +nowSelect.value; // string타입 -> int로

var JqMap = function(){
    this.map = new Object();
}

JqMap.prototype = { // HashMap 구현
    put: function (key, value) { // key, value값으로 구성된 데이터 추가
        this.map[key] = value;
    },
    get: function (key) { // value값 반환
        return this.map[key];
    },
    containsKey: function (key) { // key존재 여부
        return key in this.map;
    },
    containsValue: function (value) { // value존재 여부
        for (var prop in this.map) {
            if (this.map[prop] == value) {
                return true;
            }
        }
        return false;
    },
    clear: function () { // 데이터 초기화
        for (var prop in this.map) {
            delete this.map[prop];
        }
    },
    remove: function (key) { // 데이터 삭제
        delete this.map[key];
    },
    keys: function () { // 배열로 키 반환
        var arKey = new Array();
        for (var prop in this.map) {
            arKey.push(prop);
        }
        return arKey;
    },
    values: function () { // 배열로 value 반환
        var arVal = new Array();
        for (var prop in this.map) {
            arVal.push(this.map[prop]);
        }
        return arVal;
    },

    size: function () { // Map에 구성된 개수 반환 
        var count = 0;
        for (var prop in this.map) {
            count++;
        }
        return count;
    }
}

var firstMap = new JqMap(); // 충무로 22시~23시
function SetfirstMap(){ // hashmap->(key= 열차, value = 시간)
    firstMap.put("S4163", "2202");
    firstMap.put("S4165", "2214");
    firstMap.put("K4687", "2208");
    firstMap.put("K4691", "2225");
    firstMap.put("S4167", "2232");
    firstMap.put("K4693", "2241");
    firstMap.put("S4169", "2246");
    firstMap.put("K4329", "2254");
    firstMap.put("S4171", "2307");
    firstMap.put("K4331", "2317");
    firstMap.put("S4173", "2328");
    firstMap.put("K4333", "2339");
    firstMap.put("S4175", "2356");
}
SetfirstMap();

var secondMap = new JqMap(); // 명동 22시~23시
function SetsecondMap(){ // hashmap->(key= 열차, value = 시간)
    secondMap.put("S4163", "2203");
    secondMap.put("S4165", "2215");
    secondMap.put("K4687", "2209");
    secondMap.put("K4691", "2226");
    secondMap.put("S4167", "2233");
    secondMap.put("K4693", "2242");
    secondMap.put("S4169", "2247");
    secondMap.put("K4329", "2255");
    secondMap.put("S4171", "2308");
    secondMap.put("K4331", "2318");
    secondMap.put("S4173", "2329");
    secondMap.put("K4333", "2340");
    secondMap.put("S4175", "2357");
}
SetsecondMap();

var thirdMap = new JqMap(); // 회현 22시~23시 4
function SetthirdMap(){ // hashmap->(key= 열차, value = 시간)
    thirdMap.put("S4163", "2205");
    thirdMap.put("S4165", "2217");
    thirdMap.put("K4687", "2221");
    thirdMap.put("K4691", "2228");
    thirdMap.put("S4167", "2235");
    thirdMap.put("K4693", "2244");
    thirdMap.put("S4169", "2249");
    thirdMap.put("K4329", "2257");
    thirdMap.put("S4171", "2310");
    thirdMap.put("K4331", "2320");
    thirdMap.put("S4173", "2331");
    thirdMap.put("K4333", "2342");
    thirdMap.put("S4175", "2359");
}
SetthirdMap();

var fourthMap = new JqMap(); // 동대문 22시~23시
function SetfourthMap(){ // hashmap->(key= 열차, value = 시간)
    fourthMap.put("S4163", "2158");
    fourthMap.put("S4165", "2210");
    fourthMap.put("K4687", "2204");
    fourthMap.put("K4691", "2221");
    fourthMap.put("S4167", "2228");
    fourthMap.put("K4693", "2237");
    fourthMap.put("S4169", "2242");
    fourthMap.put("K4329", "2250");
    fourthMap.put("S4171", "2303");
    fourthMap.put("K4331", "2313");
    fourthMap.put("S4173", "2324");
    fourthMap.put("K4333", "2335");
    fourthMap.put("S4175", "2352");
}
SetfourthMap();

var fifthMap = new JqMap(); // 신용산 22시~23시
function SetfifthMap(){ // hashmap->(key= 열차, value = 시간)
    fifthMap.put("S4163", "2212");
    fifthMap.put("S4165", "2224");
    fifthMap.put("K4687", "2218");
    fifthMap.put("K4691", "2235");
    fifthMap.put("S4167", "2242");
    fifthMap.put("K4693", "2251");
    fifthMap.put("S4169", "2256");
    fifthMap.put("K4329", "2304");
    fifthMap.put("S4171", "2317");
    fifthMap.put("K4331", "2327");
    fifthMap.put("S4173", "2338");
    fifthMap.put("K4333", "2349");
    fifthMap.put("S4175", "2406");
}
SetfifthMap();

var sixthMap = new JqMap(); // 사당 22시~23시
function SetsixthMap(){ // hashmap->(key= 열차, value = 시간)
    sixthMap.put("S4163", "2223");
    sixthMap.put("S4165", "2235");
    sixthMap.put("K4687", "2229");
    sixthMap.put("K4691", "2246");
    sixthMap.put("S4167", "2253");
    sixthMap.put("K4693", "2302");
    sixthMap.put("S4169", "2307");
    sixthMap.put("K4329", "2315");
    sixthMap.put("S4171", "2328");
    sixthMap.put("K4331", "2338");
    sixthMap.put("S4173", "2349");
    sixthMap.put("K4333", "2400");      
    sixthMap.put("S4175", "2417");
}
SetsixthMap();

function gotime(){
    //if(value2=="동대문") alert("You cna sit");
    var arval = new Array(14); 
    if(value2=="충무로") {
        arval = firstMap.values();
        alert(arval);
    }
    else if(value2=="명동") {
        arval = secondMap.values();
        alert(arval);
    }
    else if(value2=="회현") {
        arval = thirdMap.values();
        alert(arval);
    }
    else if(value2=="동대문") {
        arval = fourthMap.values();
        alert(arval);
    }
    else if(value2=="신용산") {
        arval = fifthMap.values();
        alert(arval);
    }
    else if(value2=="사당") {
        arval = sixthMap.values();
        alert(arval);
    }

}


var trainidx="K203"; // 초기값0
var tmpidx;

function findtrainidx(){
    if (value2=="충무로"){
        var newarray = firstMap.values();
        var keyarray = firstMap.keys();

        for(var j=0; j<14; j++){
            if (newarray[j] == name2){
                tmpidx = j;
                break;
            }
        }

        trainidx = keyarray[tmpidx];
    }

    else if (value2=="명동"){
        var newarray = secondMap.values();
        var keyarray = secondMap.keys();

        for(var j=0; j<14; j++){
            if (newarray[j] == name2){
                tmpidx = j;
                break;
            }
        }

        trainidx = keyarray[tmpidx];

    }

    else if (value2=="회현"){
        var newarray = thirdMap.values();
        var keyarray = thirdMap.keys();

        for(var j=0; j<14; j++){
            if (newarray[j] == name2){
                tmpidx = j;
                break;
            }
        }

        trainidx = keyarray[tmpidx];

    }

    else if (value2=="동대문"){
        var newarray = fourthMap.values();
        var keyarray = fourthMap.keys();

        for(var j=0; j<14; j++){
            if (newarray[j] == name2){
                tmpidx = j;
                break;
            }
        }

        trainidx = keyarray[tmpidx];

    }

    else if (value2=="신용산"){
        var newarray = fifthMap.values();
        var keyarray = fifthMap.keys();

        for(var j=0; j<14; j++){
            if (newarray[j] == name2){
                tmpidx = j;
                break;
            }
        }

        trainidx = keyarray[tmpidx];

    }

    else if (value2=="사당"){
        var newarray = sixthMap.values();
        var keyarray = sixthMap.keys();

        for(var j=0; j<14; j++){
            if (newarray[j] == name2){
                tmpidx = j;
                break;
            }
        }

        trainidx = keyarray[tmpidx];

    }

    alert(trainidx);
}

function findTime(){   //도착역을 입력했을 때
    if (value1=="충무로"){
        var map = firstMap;
        arriveTime=map.get(trainidx);
        alert(arriveTime);
    }
    else if (value1=="명동"){
        var map = secondMap;
        arriveTime=map.get(trainidx);
        alert(arriveTime);
    }
    else if (value1=="회현"){
        
        var map = thirdMap;
        arriveTime=map.get(trainidx);
        alert(arriveTime);
    }
    else if (value1=="동대문"){
        
        var map = fourthMap;
        arriveTime=map.get(trainidx);
        alert(arriveTime);
    }
    else if (value1=="신용산"){
        var map = fifthMap;
        arriveTime=map.get(trainidx);
        alert(arriveTime);
    }
    else if (value1=="사당"){
        
        var map = sixthMap;
        arriveTime=map.get(trainidx);
        alert(arriveTime);
    }
}

function agreeAlert(agree){
   
    if (agree=="disagree"){
        alert("동의해야됨");
        disabled=true;
    }
    return flag;
}

function check(){
    if (fr.decision.value=="disAgree") return false;
    return true;
}

function gettrainid(){
    return trainidx;
}
function getarrive(){
    return arriveTime;
}

function timecha(t) {
    while(true){
        //var h = now.getHours(), m = now.getMinutes();
        var p = Number(t), a=2230;
        var dif = p-a;
        if(dif==3) {
            alert("내리세요!");
            break;
        }
        a++;
    }
}