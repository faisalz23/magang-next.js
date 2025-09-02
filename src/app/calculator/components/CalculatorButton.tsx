import React, { forwardRef } from "react";

type Props = React.ComponentProps<"button"> & {};

const CalculatorButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`w-20 h-20  text-2xl rounded-2xl cursor-pointer hover:bg-amber-300 hover:text-amber-50 ${className}`}
        {...props}
      />
    );
  }
);

CalculatorButton.displayName = "CalculatorButton";

export default CalculatorButton;