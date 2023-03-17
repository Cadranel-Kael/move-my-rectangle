import {Rectangle} from "./shapes/Rectangle";
import {Hsl} from "./Colors/Hsl";

// @ts-ignore
const canvas: HTMLCanvasElement = document.getElementById('my-canvas');

const rect = new Rectangle(canvas, new Hsl(130, 80, 40), {x: 40, y: 100}, 20, 70, 8);

function main(): void {
    animate();
}

function animate() {
    rect.clear();
    rect.update();
    rect.draw();
    requestAnimationFrame(animate);
}


main();