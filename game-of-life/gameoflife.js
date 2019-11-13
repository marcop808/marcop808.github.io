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
}
setGridSize(gridSize) {
}
draw(){

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
