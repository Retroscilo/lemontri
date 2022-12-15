"use client";
import { useContext, useState } from "react";
import { ThreadContext } from "./context";

const Thread = ({ pages }) => {
  const [state, setState] = useState(0);
  return (
    <ThreadContext.Provider value={{ state, setState }}>
      {pages.map((Page, i) => (
        <Page key={i} state={state} setState={setState} />
      ))}
    </ThreadContext.Provider>
  );
};

export default Thread;
