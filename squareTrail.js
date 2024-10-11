
const sq = (p) => {

    let nSquares = 100;
    let squares = [];

    let angle = 0;
    let squareSize = 40;
    let alphaIncr = 255 / nSquares;
    let sizeIncr = squareSize / nSquares;

    let count = 0;

    p.setup = () => {
        //var myCanvas = createCanvas(windowWidth, windowHeight);
        //myCanvas.parent("landing");
        //myCanvas.id('canvasSquares');
        p.createCanvas(p.windowWidth, p.windowHeight);

        p.rectMode(p.CENTER);
        p.noFill();
        p.strokeWeight(3);

        p.angleMode(p.DEGREES);

        for (let i = 0; i < nSquares; i++) {
            squares.push(new Square(p.mouseX, p.mouseY, squareSize, angle, 255));
            count++;
        }
    };

    p.draw = () => {
        p.clear();

        for (let s of squares) {
            s.show(p);
        }
    };

    p.mouseMoved = () => {
        angle += 4;
        squares.shift();
        squares.push(new Square(p.mouseX, p.mouseY, squareSize, angle, 255));
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

let squareSketch = new p5(sq, 'canvasSquares');

class Square {
    constructor(x, y, size, angle, a) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
        this.a = a;
    }
    show(p) {
        p.stroke(0, this.a);
        p.push();
        p.translate(this.x, this.y);
        p.rotate(this.angle);
        p.rect(0, 0, this.size, this.size, 1);
        p.pop();
        //this.a -= alphaIncr;
        //this.size -= sizeIncr;
        this.a -= 10;
        this.size -= 1;
    }
}