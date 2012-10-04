(function(){
    var t = 0;

    var percent;
    var coverSides;
    var options;
    
    var portionRatio = 1 / 8;
    var p = 0;

    var HALF_SIZE_PLUS_1 = 51;
    var SIDES = ["Right", "Bottom", "Bottom", "Left", "Left", "Top", "Top", "Right"];
    var HELL_YEAH = true;
    var NAH = false;

    function init(){

        initVariables();
        initEvents();

        ekCodePen.init();
        ekCodePen.showInfo();
        setInterval(render, 1000/ 60);
    }

    function initVariables(){
        percent = document.getElementById("percent");
        
        coverSides = document.getElementsByClassName("penis");
        options = document.getElementsByClassName("options");
    }

    function initEvents(){
        var i, option;
        for(i = 0; i < options.length; i++) {
            option = options[i];
            option.targetElem = document.getElementById(option.value);
            option.addEventListener("click", onOptionClick);
        }
    }

    function onOptionClick(){
        this.targetElem.style.display = this.checked === HELL_YEAH ? "block" : "none";
    }

    function clamp(val, min, max){
        return val < min? min : (val > max? max : val);
    }

    function render(){
        var size, ratio, i, angle; 
        if((p++) > 100) p = 0;
        for(var i = 0; i < 8; i++) {
            ratio = clamp(p / 100 - portionRatio * i, 0, portionRatio) / portionRatio;
            size = i % 2 == 0 ? ratio * HALF_SIZE_PLUS_1 : (1 - ratio) * HALF_SIZE_PLUS_1;
            coverSides[i].style["border" + SIDES[i] + "Width"] = size + "px";
        }
        percent.innerHTML = ~~(p) + "%"; 
    }

    init();

}());