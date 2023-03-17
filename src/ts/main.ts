import {Rectangle} from "./shapes/Rectangle";
import {Rgb} from "./Colors/Rgb";
import {Canvas} from "./Canvas";

const canvas = new Canvas(document.getElementById('my-canvas') as HTMLCanvasElement, true);

const myRectangle = new Rectangle(canvas, new Rgb(230, 126, 34), {x: 40, y: 100}, 20, 50);


function main(): void {
    animate();
}

main();

canvas.canvasElement.addEventListener('mousemove', (event: MouseEvent) => {
    myRectangle.setDirectionByMousePosition({x: event.x, y: event.y});
});


function animate() {
    myRectangle.clear();
    myRectangle.update();
    myRectangle.draw();
    requestAnimationFrame(animate);
}
