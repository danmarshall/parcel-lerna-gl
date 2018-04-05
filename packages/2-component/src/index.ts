import { drawCanvas } from '3-canvas';

function drawComponent(el: HTMLElement) {

    var div = document.createElement('div');
    div.innerHTML = "this is the component </br>";

    el.appendChild(div);

    drawCanvas(div);
}

export { drawComponent };
