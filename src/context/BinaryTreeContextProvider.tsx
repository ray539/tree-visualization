import { createContext, useEffect, useRef, useState } from "react";
import * as PIXI from 'pixi.js';
import { BinaryTreeController, BinaryTreeState, _SampleBinaryTreeController, _SampleBinaryTreeState } from "./BinaryTreeController";

export interface BinaryTreeContextT {
  binaryTreeState: BinaryTreeState,
  binaryTreeController: BinaryTreeController
}

const initialContext: BinaryTreeContextT = {
  binaryTreeState: _SampleBinaryTreeState,
  binaryTreeController: _SampleBinaryTreeController
}

const BinaryTreeContext = createContext<BinaryTreeContextT>(initialContext);

const BinaryTreeContextProvider = ({children} : {children: React.ReactNode}) => {
  const [binaryTreeState, setBinaryTreeState] = useState<BinaryTreeState>(_SampleBinaryTreeState);
  const [binaryTreeController, setBinaryTreeController] = useState<BinaryTreeController>()
  const canvas = useRef<any>(null);

  useEffect(() => {
    const app = new PIXI.Application({view: canvas.current, width: 1000, height: 500, backgroundColor: 'white'});
    setBinaryTreeController(new BinaryTreeController(app, binaryTreeState, setBinaryTreeState));
  }, []);

  const value: BinaryTreeContextT = {
    binaryTreeState: binaryTreeState,
    binaryTreeController: binaryTreeController!
  }

  return (
    <>
    <canvas ref={canvas}></canvas>
    <BinaryTreeContext.Provider value={value}>
      {children}
    </BinaryTreeContext.Provider>
    </>
  )
}

export {BinaryTreeContext, BinaryTreeContextProvider}