import React from "react";

const Input = ({ register, name, rules, label, error, ...props }) => {
  return (
    <div className="w-full leading-none">
      <label htmlFor="username" className="font-bold text-sm">
        {label}
      </label>
      <input
        {...register(name, rules)}
        {...props}
        className={
          "w-full outline-none border border-1 border-gray-500/60 rounded px-3 py-2 bg-transparent font-light text-sm"
        }
      />
      {error && <p className="text-red-800 text-xs">{error.message}</p>}
    </div>
  );
};

export default Input;
