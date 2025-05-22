import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        className="bg-secondary hover:bg-secondary/70 text-black font-bold py-2 px-4 rounded cursor-pointer disabled:bg-accent disabled:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
