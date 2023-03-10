import {Rectangle} from "./shapes/Rectangle";
import {Hsl} from "./Colors/Hsl";

function main(): void {
    // @ts-ignore
    const ctx = document.getElementById('my-canvas').getContext('2d');
    const rect = new Rectangle(ctx, new Hsl(130, 80, 40), {x: 40, y: 100}, 20, 70);
    rect.draw();
}

main();