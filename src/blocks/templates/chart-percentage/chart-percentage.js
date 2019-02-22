/*jshint esversion: 6 */

// TODO: sel, el - what it is ?
const CIRCLE = function(chartName) {
    var circles = document.querySelectorAll(chartName);
    [].forEach.call(circles,function(chartDraw) {
        let valEl = parseFloat(chartDraw.innerHTML);
        valEl = valEl * 754 / 100;        
        chartDraw.innerHTML = `<svg width="260" height="260">
            <circle transform="rotate(-90)" 
            style="stroke-dasharray: 754px;" 
            r="120" cx="-130" cy="130" />
            
            <circle transform="rotate(-90)" 
            style="stroke-dasharray:` + valEl + 
            `px 754px;" r="120" cx="-130" cy="130" /></svg>`;      
        });
    };

CIRCLE('.chart-percentages__draw-svg');