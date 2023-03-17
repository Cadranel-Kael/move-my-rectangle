import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export class Rectangle {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private position: IPosition;
    private readonly width: number;
    private readonly height: number;
    private readonly color: Hsl | Rgb;
    private alpha: number;
    private speed: number;

    constructor(canvas: HTMLCanvasElement, color: Hsl | Rgb, position: IPosition, width: number, height: number, speed: number) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color
        this.speed = speed;
        this.alpha = Math.random()* Math.PI*2;
    }

    draw() {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        return this;
    }

    clear() {
        // this.ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update() {
        //ex: Math.cos(this.alpha) < 0 --> rectangle bouge negative sur x
        if ((this.position.x + this.width >= this.canvas.width && Math.cos(this.alpha) > 0) ||
            (this.position.x <= 0 && Math.cos(this.alpha) < 0)) {
            this.alpha = Math.PI - this.alpha;
        } else if ((this.position.y + this.height >= this.canvas.height && Math.sin(this.alpha) > 0) ||
            (this.position.y <= 0 && Math.sin(this.alpha) < 0)) {
            this.alpha = 2*Math.PI - this.alpha;
        }
        this.position.x += this.speed * Math.cos(this.alpha);
        this.position.y += this.speed * Math.sin(this.alpha);
    }
}