import { drawTriangle } from "4-gl";

function drawCanvas(el: HTMLElement) {

    var canvas = document.createElement('canvas');
    el.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawTriangle(canvas);
}

export { drawCanvas };
