import * as PIXI from 'pixi.js';
import { LINEWIDTH, NODERADIUS, Vector2 } from '../common';


// export class RenderableBinaryTree {
  
//   parentContainer: PIXI.Container;
//   topLeft: Vector2;

//   render() {

//   }
// }

export class RenderableNode {
  parentContainer: PIXI.Container
  center: Vector2
  value: string

  constructor(parentContainer: PIXI.Container<PIXI.DisplayObject>, center: Vector2, value: string) {
    this.parentContainer = parentContainer;
    this.center = center;
    this.value = value;
  }

  render() {
    const graphics = new PIXI.Graphics();
    graphics.beginFill('white');
    graphics.lineStyle(LINEWIDTH, 'red');
    graphics.drawCircle(this.center.x, this.center.y, NODERADIUS);


    this.parentContainer.addChild(graphics)
  }

}