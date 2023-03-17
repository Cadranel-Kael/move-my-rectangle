export class Canvas {
    readonly canvasElement: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D;
    private _height: number;
    private _width: number;

    constructor(canvasElement: HTMLCanvasElement, fullWindow: boolean = false) {
        this.canvasElement = canvasElement;
        this.ctx = canvasElement.getContext('2d');
        if (fullWindow) {
            canvasElement.height = window.innerHeight;
            canvasElement.width = window.innerWidth;
            canvasElement.addEventListener('resize', () => {
                this.height = window.innerHeight;
                this.width = window.innerWidth;
            });
        }
        this.height = canvasElement.height;
        this.width = canvasElement.width;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        if (value > 0) {
            this._height = value;
            this.canvasElement.height = value;
        }
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        if (value > 0) {
            this._width = value;
            this.canvasElement.width = value;
        }
    }
}