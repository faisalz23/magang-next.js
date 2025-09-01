import react, { forwardRef } from "react";

type Props = React.ComponentProps<"button"> & {};

const CalculatorButton = forwardRef<HTMLButtonElement, Props>(
    ({ className, ...props }, ref) => {
        return (
            <button
            ref={ref}
            className={'w-20 h-20 text-2xl rounded-2xl ${className}'}
            {... props}
            />
        );
    }
);

CalculatorButton.displayName = "CalculatorButton";