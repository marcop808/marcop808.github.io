console.log('My new File!!!!!!!!!!');
class GameOfLife {
  constructor(){
  }
  next(shape){

  }
}
class Canvas {
  constructor(container){
  let canvasElement=document.createElement('canvas');
  this.obj=canvasElement
  this.pixelWidth=803;
  this.pixelHeight=506;
  container.appendChild(canvasElement)
  this.ctx = this.obj.getContext("2d")
  this.setGridSize(11);
  canvasElement.width = this.pixelWidth;
  canvasElement.height = this.pixelHeight;
}
setGridSize(gridSize) {
}
draw(cells){
  this.ctx.lineWidth=
  strokeStyle= #999
  for(let i = 0,i<this.pixelHeight, i = this.cellSize)
  this.cellSize
  this.ctx.beginPath()
  ctx.moveTo(20,20);
  ctx.lineTo(200,20);
  ctx.stroke();
  ctx.canvas.click((event)=>{});
  this.obj=addEventListener
}
click(fn){

}
getDimension(){

}
getGridsize(){

}

}
class Shape{
  constructor(canvas) {
    this.canvas =canvas;
    this.current = [];
    this.collection = {};
  }
  get(){

  }
  set(shape){

  }
  copy(shape){

  }
  redraw(){

  }
  center(){

  }
  offset(dx, dy){

  }
  toggle(cell){

  }

}
class Controls{
  constructor(canvas, shape, gameoflife){
    this.canvas = canvas;
    this.shape = shape;
    this.gameoflife = gameoflife;
    this.started = false;
    this.timer = null;
    this.generation = 0;
  }
  init(shapes){

  }
  setGeneration(gen){

  }
  animate(){

  }
  next(){

  }

}
let canvasElement = document.getElementById("canvas-div")
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let gameoflife = new GameOfLife();
let controls = new Controls(canvas, shape, gameoflife);
