import {Rectangle} from "./shapes/Rectangle";
import {Rgb} from "./Colors/Rgb";
import {Canvas} from "./Canvas";
import {Animate} from "./Animate";

const canvas = new Canvas(document.getElementById('my-canvas') as HTMLCanvasElement, true);
const myRectangle = new Rectangle(canvas,20, 5, new Rgb(230, 126, 34), {x: 40, y: 100}, 3);
const animation = new Animate(myRectangle);

function main(): void {
    animation.start();
}

main();

canvas.canvasElement.addEventListener('mousemove', (event: MouseEvent) => {
    myRectangle.setDirectionByMousePosition({x: event.x, y: event.y});
});

