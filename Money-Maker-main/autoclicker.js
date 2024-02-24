document.addEventListener('DOMContentLoaded', function () {
    const targetButton = document.getElementById('bank_clicker');
    const intervalTime = 1000; // 클릭 간격을 밀리초 단위로 설정 (여기서는 1000ms = 1초)

    // 주기적으로 클릭 이벤트를 발생시키는 함수
    function autoClick() {

        let bank_val = parseInt(localStorage.getItem("bank_val")) || 0;
        delta=0
        delta = delta+ (0.1*parseInt(localStorage.getItem("cursorCountNum")) || 0);
        delta = delta+ (parseInt(localStorage.getItem("grandmaCountNum")) || 0);   
        delta = delta+ (8*parseInt(localStorage.getItem("farmountNum")) || 0);   
        delta = delta+ (47*parseInt(localStorage.getItem("mineCountNum")) || 0);   
        delta = delta+ (260*parseInt(localStorage.getItem("factoryCountNum")) || 0);   
        delta = delta+ (1400*parseInt(localStorage.getItem("bankCountNum")) || 0);   
        delta = delta+ (7800*parseInt(localStorage.getItem("templeCountNum")) || 0);   
        delta = delta+ (44000*parseInt(localStorage.getItem("wizardtowerCountNum")) || 0);   
        delta = delta+ (260000*parseInt(localStorage.getItem("shipmentCountNum")) || 0);   
        delta = delta+ (1600000*parseInt(localStorage.getItem("alchemylabCountNum")) || 0);   
        delta = delta+ (10000000*parseInt(localStorage.getItem("portalcountNum")) || 0);   
        delta = delta+ (65000000*parseInt(localStorage.getItem("timemachineCountNum")) || 0);   
        bank_val+=delta;

        localStorage.setItem("bank_val", bank_val);

        // // bank_val 화면 업데이트
        initializeBankValue();
        targetButton.click();

    }

    // setInterval을 사용하여 주기적으로 autoClick 함수 호출
    setInterval(autoClick, intervalTime);
});
