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
  this.ctx.lineWidth = 1;
  this.ctx.strokeStyle= '#999';
  for(let i = this.cellSize, i < this.pixelWidth; i = i + this.cellSize)
  this.ctx.beginPath();
  ctx.moveTo(i + 0.5, 0);
  ctx.lineTo(i + 0.5, this.pixelWidth);
  ctx.stroke();
  ctx.canvas.click((event)=>{});
  this.obj=addEventListener
}
draw(cells){
  this.ctx.lineHeight = 1;
  this.ctx.strokeStyle= '#999';
  for(let i = this.cellSize, i < this.pixelHeight; i = i + this.cellSize)
  this.ctx.beginPath();
  ctx.moveTo(i + 0.5, 0);
  ctx.lineTo(i + 0.5, this.pixelHeight);
  ctx.stroke();
  ctx.canvas.click((event)=>{});
  this.obj=addEventListener
}
this.ctx.fillStyle ='yellow';
for(let i = 0; i < cells.length; i = i + 1) {
  let cell = cells[i];
  let x = cell[0];
  let y = cell[1];
  this.ctx.fillRect(
    x * this.cellSize + 1,
    y * this.cellSize + 1,
    this.cellSize - 1,
    this.cellSize - 1)
}
click(fn){
  this.obj.addEventListener('click', (clickEvent)=> {
    let clientX = clickEvent.clientX;
    let clientY = clickEvent.;
    let rect = this.obj getBoundingClientRect();
  }
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
