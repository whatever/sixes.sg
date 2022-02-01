export class Beneath {
  constructor({el}) {
    this.canvas = el;
    this.context = el.getContext("2d");
    this.size();
  }

  size() {
    let {width, height} = this.canvas.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
  }

  update() {
  }

  draw() {
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, 100, 100);
  }
}
