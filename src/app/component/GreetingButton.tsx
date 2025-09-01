"use client"
import React from "react"

type  Props = {name: String };

const GreetingButton = (props: Props) => { 'props is defined but never used.'
    

  return (
    <button
      onClick={() => {
        alert("Kiw " + props.name);
      }}
      className="bg-amber-700 p-2 text-amber-100 rounded-2xl"
    >
      Greeting {props.name}
    </button>
  );
};

export default GreetingButton;
