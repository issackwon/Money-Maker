// Function to initialize bank value

let multiplier = 1
function complete(){
    let need = parseInt(document.getElementById("objective").textContent);
    let money= localStorage.getItem("bank_val");
    if (need<=money){
        need=parseInt(need);
        multiplier=parseInt(localStorage.getItem("multiplier")||0);
        money=money-need;
        multiplier=multiplier+0.01;
        if (multiplier<1){
            multiplier=multiplier+1
        }
        localStorage.setItem("multiplier",multiplier)
        localStorage.setItem("bank_val", money);
        document.getElementById("objective").textContent = 2*need;
    }
    else{
        alert("Get more money you poor dumb dumb");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const targetButton = document.getElementById('bank_clicker');
    const intervalTime = 1000; // 클릭 간격을 밀리초 단위로 설정 (여기서는 1000ms = 1초)

    // 주기적으로 클릭 이벤트를 발생시키는 함수
    function autoClick() {

        let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
        delta=0
        delta = delta+ (multiplier*0.1*parseInt(localStorage.getItem("cursorCountNum")) || 0);
        delta = delta+ (multiplier*parseInt(localStorage.getItem("grandmaCountNum")) || 0);   
        delta = delta+ (multiplier*8*parseInt(localStorage.getItem("farmountNum")) || 0);   
        delta = delta+ (multiplier*47*parseInt(localStorage.getItem("mineCountNum")) || 0);   
        delta = delta+ (multiplier*260*parseInt(localStorage.getItem("factoryCountNum")) || 0);   
        delta = delta+ (multiplier*1400*parseInt(localStorage.getItem("bankCountNum")) || 0);   
        delta = delta+ (multiplier*7800*parseInt(localStorage.getItem("templeCountNum")) || 0);   
        delta = delta+ (multiplier*44000*parseInt(localStorage.getItem("wizardtowerCountNum")) || 0);   
        delta = delta+ (multiplier*260000*parseInt(localStorage.getItem("shipmentCountNum")) || 0);   
        delta = delta+ (multiplier*1600000*parseInt(localStorage.getItem("alchemylabCountNum")) || 0);   
        delta = delta+ (multiplier*10000000*parseInt(localStorage.getItem("portalcountNum3")) || 0);   
        delta = delta+ (multiplier*65000000*parseInt(localStorage.getItem("timemachineCountNum")) || 0);   
        bank_val+=delta;

        localStorage.setItem("bank_val", bank_val);

        // // bank_val 화면 업데이트
        initializeBankValue();


        targetButton.click();

    }

    // setInterval을 사용하여 주기적으로 autoClick 함수 호출
    setInterval(autoClick, intervalTime);
});


function initializeBankValue() {
    const bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    const formattedBankVal = formatNumber(bank_val);
    if (formattedBankVal != null){
    document.getElementById("bank").textContent = formattedBankVal;
    console.log("bank_val: " + formattedBankVal);}
}

function formatNumber(num) {
    const suffixes = [
        "", "thousand", "million", "billion", "trillion", "quadrillion",
        "quintillion", "sextillion", "septillion", "octillion", "nonillion",
        "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion",
        "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion"
    ];
    const suffixIndex = Math.floor(((""+num).length-1)/3);
    const shortNum = Math.round(num / Math.pow(1000, suffixIndex));
    return shortNum.toLocaleString() + " " + suffixes[suffixIndex];
}


function cursorcount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let cursorcount = parseInt(localStorage.getItem("cursorCountNum")) || 0;
    let cursormoney = 15 * Math.pow(1.15, cursorcount);
    cursormoney = Math.round(cursormoney);
    localStorage.setItem("cursorMoney", cursormoney);

    // Update DOM for cursormoney
    console.log("cursorcount: " + cursorcount);

    console.log(document.getElementById("cursorCountNum").textContent)
    console.log(document.getElementById("cursorMoney").textContent)

    document.getElementById("cursorCountNum").textContent = formatNumber(cursorcount);
    document.getElementById("cursorMoney").textContent = formatNumber(cursormoney);

    // Update realCps (if needed)
    if (a != 1 && cursormoney <= bank_val) {
        cursorcount++;
        bank_val -= cursormoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for cursormoney
        const cursormoneyText = document.getElementById("cursorMoney");
        cursormoneyText.textContent = formatNumber(cursormoney);
    }

    // Update DOM for cursorcount and cursorMoney
    document.getElementById("cursorCountNum").textContent = formatNumber(cursorcount);
    localStorage.setItem("cursorCountNum", cursorcount);
    document.getElementById("cursorMoney").textContent = formatNumber(cursormoney);
}




// Function to update bank value
function updateBankValue() {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;

    bank_val += 1;

    const bank = document.getElementById("bank");
    bank.textContent = formatNumber(bank_val);
    localStorage.setItem("bank_val", bank_val);
}



// Function to increment the bank value
function count() {
    updateBankValue(1);
}


// Function to handle cursor count

function grandmacount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let grandmacount = parseInt(localStorage.getItem("grandmaCountNum")) || 0;
    let grandmamoney = 100 * Math.pow(1.15, grandmacount);
    grandmamoney = Math.round(grandmamoney);
    localStorage.setItem("grandmaMoney", grandmamoney);

    if (a != 1 && grandmamoney <= bank_val) {
        grandmacount++;
        bank_val -= grandmamoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for grandmamoney
        const grandmamoneyText = document.getElementById("grandmaMoney");
        grandmamoneyText.textContent = formatNumber(grandmamoney);
    }

    // Update DOM for grandmacount and grandmaMoney
    document.getElementById("grandmaCountNum").textContent = formatNumber(grandmacount);
    localStorage.setItem("grandmaCountNum", grandmacount);
    document.getElementById("grandmaMoney").textContent = formatNumber(grandmamoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function farmcount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let farmcount = parseInt(localStorage.getItem("farmCountNum")) || 0;
    let farmmoney = 1100 * Math.pow(1.15, farmcount);
    farmmoney = Math.round(farmmoney);
    localStorage.setItem("farmMoney", farmmoney);

    if (a != 1 && farmmoney <= bank_val) {
        farmcount++;
        bank_val -= farmmoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for farmmoney
        const farmmoneyText = document.getElementById("farmMoney");
        farmmoneyText.textContent = formatNumber(farmmoney);
    }

    // Update DOM for farmcount and farmMoney
    document.getElementById("farmCountNum").textContent = formatNumber(farmcount);
    localStorage.setItem("farmCountNum", farmcount);
    document.getElementById("farmMoney").textContent = formatNumber(farmmoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function minecount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let minecount = parseInt(localStorage.getItem("mineCountNum")) || 0;
    let minemoney = 12000 * Math.pow(1.15, minecount);
    minemoney = Math.round(minemoney);
    localStorage.setItem("mineMoney", minemoney);

    if (a != 1 && minemoney <= bank_val) {
        minecount++;
        bank_val -= minemoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for minemoney
        const minemoneyText = document.getElementById("mineMoney");
        minemoneyText.textContent = formatNumber(minemoney);
    }

    // Update DOM for minecount and mineMoney
    document.getElementById("mineCountNum").textContent = formatNumber(minecount);
    localStorage.setItem("mineCountNum", minecount);
    document.getElementById("mineMoney").textContent = formatNumber(minemoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function factorycount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let factorycount = parseInt(localStorage.getItem("factoryCountNum")) || 0;
    let factorymoney = 130000 * Math.pow(1.15, factorycount);
    factorymoney = Math.round(factorymoney);
    localStorage.setItem("factoryMoney", factorymoney);

    if (a != 1 && factorymoney <= bank_val) {
        factorycount++;
        bank_val -= factorymoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for factorymoney
        const factorymoneyText = document.getElementById("factoryMoney");
        factorymoneyText.textContent = formatNumber(factorymoney);
    }

    // Update DOM for factorycount and factoryMoney
    document.getElementById("factoryCountNum").textContent = formatNumber(factorycount);
    localStorage.setItem("factoryCountNum", factorycount);
    document.getElementById("factoryMoney").textContent = formatNumber(factorymoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}


function bankcount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let bankcount = parseInt(localStorage.getItem("bankCountNum")) || 0;
    let bankmoney = 1400000 * Math.pow(1.15, bankcount);
    bankmoney = Math.round(bankmoney);
    localStorage.setItem("bankMoney", bankmoney);

    if (a != 1 && bankmoney <= bank_val) {
        bankcount++;
        bank_val -= bankmoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for bankmoney
        const bankmoneyText = document.getElementById("bankMoney");
        bankmoneyText.textContent = formatNumber(bankmoney);
    }

    // Update DOM for bankcount and bankMoney
    document.getElementById("bankCountNum").textContent = formatNumber(bankcount);
    localStorage.setItem("bankCountNum", bankcount);
    document.getElementById("bankMoney").textContent = formatNumber(bankmoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

// Repeat the pattern for the remaining functions

function templecount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let templecount = parseInt(localStorage.getItem("templeCountNum")) || 0;
    let templemoney = 20000000 * Math.pow(1.15, templecount);
    templemoney = Math.round(templemoney);
    localStorage.setItem("templeMoney", templemoney);

    if (a != 1 && templemoney <= bank_val) {
        templecount++;
        bank_val -= templemoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for templemoney
        const templemoneyText = document.getElementById("templeMoney");
        templemoneyText.textContent = formatNumber(templemoney);
    }

    // Update DOM for templecount and templeMoney
    document.getElementById("templeCountNum").textContent = formatNumber(templecount);
    localStorage.setItem("templeCountNum", templecount);
    document.getElementById("templeMoney").textContent = formatNumber(templemoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}


function wizardtowercount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let wizardtowercount = parseInt(localStorage.getItem("wizardtowerCountNum")) || 0;
    let wizardtowermoney = 330000000 * Math.pow(1.15, wizardtowercount);
    wizardtowermoney = Math.round(wizardtowermoney);
    localStorage.setItem("wizardtowerMoney", wizardtowermoney);

    if (a != 1 && wizardtowermoney <= bank_val) {
        wizardtowercount++;
        bank_val -= wizardtowermoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for wizardtowermoney
        const wizardtowermoneyText = document.getElementById("wizardtowerMoney");
        wizardtowermoneyText.textContent = formatNumber(wizardtowermoney);
    }

    // Update DOM for wizardtowercount and wizardtowerMoney
    document.getElementById("wizardtowerCountNum").textContent = formatNumber(wizardtowercount);
    localStorage.setItem("wizardtowerCountNum", wizardtowercount);
    document.getElementById("wizardtowerMoney").textContent = formatNumber(wizardtowermoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function shipmentcount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let shipmentcount = parseInt(localStorage.getItem("shipmentCountNum")) || 0;
    let shipmentmoney = 5100000000 * Math.pow(1.15, shipmentcount);
    shipmentmoney = Math.round(shipmentmoney);
    localStorage.setItem("shipmentMoney", shipmentmoney);

    if (a != 1 && shipmentmoney <= bank_val) {
        shipmentcount++;
        bank_val -= shipmentmoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for shipmentmoney
        const shipmentmoneyText = document.getElementById("shipmentMoney");
        shipmentmoneyText.textContent = formatNumber(shipmentmoney);
    }

    // Update DOM for shipmentcount and shipmentMoney
    document.getElementById("shipmentCountNum").textContent = formatNumber(shipmentcount);
    localStorage.setItem("shipmentCountNum", shipmentcount);
    document.getElementById("shipmentMoney").textContent = formatNumber(shipmentmoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function alchemylabcount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let alchemylabcount = parseInt(localStorage.getItem("alchemylabCountNum")) || 0;
    let alchemylabmoney = 75000000000 * Math.pow(1.15, alchemylabcount);
    alchemylabmoney = Math.round(alchemylabmoney);
    localStorage.setItem("alchemylabMoney", alchemylabmoney);

    if (a != 1 && alchemylabmoney <= bank_val) {
        alchemylabcount++;
        bank_val -= alchemylabmoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for alchemylabmoney
        const alchemylabmoneyText = document.getElementById("alchemylabMoney");
        alchemylabmoneyText.textContent = formatNumber(alchemylabmoney);
    }

    // Update DOM for alchemylabcount and alchemylabMoney
    document.getElementById("alchemylabCountNum").textContent = formatNumber(alchemylabcount);
    localStorage.setItem("alchemylabCountNum", alchemylabcount);
    document.getElementById("alchemylabMoney").textContent = formatNumber(alchemylabmoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function portalcount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let portalcount = parseInt(localStorage.getItem("portalCountNum")) || 0;
    let portalmoney = 1000000000000 * Math.pow(1.15, portalcount);
    portalmoney = Math.round(portalmoney);
    localStorage.setItem("portalMoney", portalmoney);

    if (a != 1 && portalmoney <= bank_val) {
        portalcount++;
        bank_val -= portalmoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for portalmoney
        const portalmoneyText = document.getElementById("portalMoney");
        portalmoneyText.textContent = formatNumber(portalmoney);
    }

    // Update DOM for portalcount and portalMoney
    document.getElementById("portalCountNum").textContent = formatNumber(portalcount);
    localStorage.setItem("portalCountNum", portalcount);
    document.getElementById("portalMoney").textContent = formatNumber(portalmoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

function timemachinecount(a) {
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    let timemachinecount = parseInt(localStorage.getItem("timemachineCountNum")) || 0;
    let timemachinemoney = 14000000000000 * Math.pow(1.15, timemachinecount);
    timemachinemoney = Math.round(timemachinemoney);
    localStorage.setItem("timemachineMoney", timemachinemoney);

    if (a != 1 && timemachinemoney <= bank_val) {
        timemachinecount++;
        bank_val -= timemachinemoney;
        localStorage.setItem("bank_val", bank_val);

        // Update DOM for timemachinemoney
        const timemachinemoneyText = document.getElementById("timemachineMoney");
        timemachinemoneyText.textContent = formatNumber(timemachinemoney);
    }

    // Update DOM for timemachinecount and timemachineMoney
    document.getElementById("timemachineCountNum").textContent = formatNumber(timemachinecount);
    localStorage.setItem("timemachineCountNum", timemachinecount);
    document.getElementById("timemachineMoney").textContent = formatNumber(timemachinemoney);

    // Update realCps (if needed)
    let realCps = 0;
    localStorage.setItem("realCps", realCps);
}

// Initialize bank value on window load
window.onload = function () {
    console.log("window loaded");
    initializeBankValue();
    cursorcount(1);
    grandmacount(1);
    farmcount(1);
    minecount(1);
    factorycount(1);
    bankcount(1);
    templecount(1);
    wizardtowercount(1);
    shipmentcount(1);
    alchemylabcount(1);
    portalcount(1);
    timemachinecount(1);
    
};


function kill(){
    localStorage.setItem("bank_val", 0);
    alert("bankrupt hehe");
}

function correct(){
    var input = document.getElementById("easter").value;
    // console.log(input);
    if (input == "3.1415926"){
        window.location.href = "easter2.html";
    }else{
        kill();
    }
}

function money(){
    let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
    bank_val=bank_val*10;
    alert("ok");
    localStorage.setItem("bank_val",0)
}

function good(){
    let bank_val = parseInt(localStorage.getItem("bank_val"))||0;
    bank_val=bank_val*15;
    localStorage.setitem("bank_val",bank_val)
}



