import React from "react";

const Button = (props) => {
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    onClick = () => {},
    children,
    className = "",
  } = props;

  // my variant styles
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    third: "bg-black text-white hover",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    myCart:
      "opacity-100 py-2 text-sm rounded-b-xl hover:scale-110 transition-all duration-300 cursor-pointer absolute left-0 right-0 bottom-[27%]",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const base =
    "rounded-lg font-poppins font-medium transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClass = variants[variant] || variants.primary || variant.third;
  const sizeClass = sizes[size] || sizes.md || sizes.myCart;

  const finalClassName = `${base} ${variantClass} ${sizeClass} ${className}`;

  return (
    <button className={finalClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
