var Circle = function(sel) {
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el) {
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*754/100;        
        el.innerHTML = '<svg width="260" height="260"><circle transform="rotate(-90)" style="stroke-dasharray: 754px;" r="120" cx="-130" cy="130" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 754px;" r="120" cx="-130" cy="130" /></svg>';      
        });
    };
Circle('.circle__chart--single');