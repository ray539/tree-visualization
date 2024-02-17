import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useRef, useState } from "react";
import {BinaryTreeContextProvider, BinaryTreeContext} from "./context/BinaryTreeContextProvider";

function Test1() {
  const btContext = useContext(BinaryTreeContext);
  // btContext.binaryTreeController.changeBTState('gey')
  

  return (
    <>
    <div>{btContext.binaryTreeState.curCommand.command}</div>
    <button onClick={() => {
      console.log(btContext.binaryTreeController)
      btContext.binaryTreeController.changeBTState('asd')
    }}>change to asd</button>
    </>

  )
}

function Test2() {
  const btContext = useContext(BinaryTreeContext);
  // btContext.binaryTreeController.changeBTState('gey')

  return (
    <>
    <div>{btContext.binaryTreeState.curCommand.command}</div>
    <button onClick={() => {
      console.log(btContext.binaryTreeController)
      btContext.binaryTreeController.changeBTState('def')
    }}>change to def</button>
    </>

  )
}

function App() {
  return (
    <>
      <BinaryTreeContextProvider>
        <Test1/>
        <Test2/>
      </BinaryTreeContextProvider>

      
    </>
  )
}

export default App
