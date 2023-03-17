import {IPosition} from "../Types/IPosition";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Canvas} from "../Canvas";

export abstract class Shape {
    protected ctx: CanvasRenderingContext2D;
    protected position: IPosition;
    protected speed: number;
    protected direction: number;
    protected color: Hsl | Rgb;
    protected canvas: Canvas;

    protected constructor(canvas: Canvas, position?: IPosition, color?: Hsl | Rgb, speed?: number, direction?: number) {
        if (canvas === undefined) {
            throw Error('Value error undefined HTMLCanvasElement in Shape');
        }
        this.canvas = canvas;
        this.ctx = canvas.ctx;
        if (position !== undefined) {
            if (position.x >= 0 && position.y >= 0) {
                this.position = position;
            } else {
                this.position = {x:0, y:0};
            }
        } else {
            this.position = {x:0, y:0};
        }
        this.color = color !== undefined ? color : new Rgb(0, 0, 0);
        this.speed = speed > 0 ? speed : 1;
        this.direction = direction >= 0 ? direction : Math.random() * Math.PI * 2;
    }
}