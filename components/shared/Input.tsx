import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = ({ error, ...props }: InputProps) => {
  return (
    <div>
      <input
        {...props}
        className="outline outline-accent/50 rounded px-4 py-2 w-full"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
