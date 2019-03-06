/*jshint esversion: 6 */

const CHART_PERCENTAGE = function(chartName) {
    const CHARTS = document.querySelectorAll(chartName);

    [].forEach.call(CHARTS, function(chartDraw) {
        let setElementValue = function(reciveValue) {
            let value = reciveValue * 754 / 100;
            return value;
        }

        let elementValue = function() {
            let value = parseFloat(chartDraw.innerHTML);
            value = setElementValue(value);
            return value;
        }

        let draw = function(percent) {
            let svg =
                `<svg width="260" height="260">
                <circle transform="rotate(-90)"
                style="stroke-dasharray: 754px;"
                r="120" cx="-130" cy="130" />

                <circle transform="rotate(-90)"
                style="stroke-dasharray:` + percent +
                `px 754px;" r="120" cx="-130" cy="130" /></svg>`;

            return svg;
        }

        chartDraw.innerHTML = draw(elementValue());
    });
};

CHART_PERCENTAGE('.chart-percentages__draw-svg');

// ---

// const CIRCLE = function(chartName) {
//     var circles = document.querySelectorAll(chartName);
//     [].forEach.call(circles, function(chartDraw) {
//         let valEl = parseFloat(chartDraw.innerHTML);
//         valEl = valEl * 754 / 100;
//         chartDraw.innerHTML = `<svg width="260" height="260">
//             <circle transform="rotate(-90)"
//             style="stroke-dasharray: 754px;"
//             r="120" cx="-130" cy="130" />

//             <circle transform="rotate(-90)"
//             style="stroke-dasharray:` + valEl +
//             `px 754px;" r="120" cx="-130" cy="130" /></svg>`;
//     });
// };

// CIRCLE('.chart-percentages__draw-svg');