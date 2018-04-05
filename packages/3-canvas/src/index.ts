import { drawTriangle } from "4-gl";

function drawCanvas(el: HTMLElement) {

    var canvas = document.createElement('canvas');
    el.appendChild(canvas);

    drawTriangle(canvas);
}

export { drawCanvas };
