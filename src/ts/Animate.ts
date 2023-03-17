import {Rectangle} from "./shapes/Rectangle";
import {Square} from "./shapes/Square";
import {StrokeRectangle} from "./shapes/StrokeRectangle";
import {StrokeSquare} from "./shapes/StrokeSquare";

export class Animate {
    private readonly animated: Rectangle;
    private readonly ctx: CanvasRenderingContext2D;

    constructor(rectangle: Rectangle) {
        this.animated = rectangle;
    }

    /*
    * @returns: void,
    *   clears the object,
    *   updates the position of the objet,
    *   redraws object with new information,
    *   repeats 60fps
    * */
    start(): void {
        this.animated.clear();
        this.animated.update();
        this.animated.draw();
        requestAnimationFrame(this.start.bind(this));
    }


}