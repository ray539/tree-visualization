import * as PIXI from 'pixi.js';
import { Dispatch, SetStateAction } from 'react';
import { RenderableNode } from '../render/Renderable';

export interface Command {
  command: string
}


export interface BinaryTreeState {
  curCommand: Command
}


/**
 * in charge of manipulating canvas
 */
export class BinaryTreeController {
  app: PIXI.Application<PIXI.ICanvas>
  binaryTreeState: BinaryTreeState
  setBinaryTreeState: Dispatch<SetStateAction<BinaryTreeState>>

  
  constructor (app: PIXI.Application<PIXI.ICanvas>, binaryTreeState: BinaryTreeState, setBinaryTreeState: Dispatch<SetStateAction<BinaryTreeState>>) {
    this.app = app;
    this.binaryTreeState = binaryTreeState
    this.setBinaryTreeState = setBinaryTreeState;
    // this.app.stage.addChild(graphics);
  }

  startLoop() {
    this.app.ticker.add(d => {
      console.log('hi');
    })
  }

  // test
  changeBTState(newThing: string) {
    this.setBinaryTreeState({curCommand: {command: newThing}})
  }

  insertValues() {
  }



}

/**
 * used for initialization purposes. Does not contain any actual function
 */
export const _SampleCommand:Command = {command: 'do stuff'};
/**
 * used for initialization purposes. Does not contain any actual function
 */
export const _SampleBinaryTreeState:BinaryTreeState = {curCommand: _SampleCommand}
/**
 * used for initialization purposes. Does not contain any actual function
 */
export const _SampleBinaryTreeController = new BinaryTreeController(new PIXI.Application(), 2 as unknown as BinaryTreeState, 3 as unknown as Dispatch<SetStateAction<BinaryTreeState>>);