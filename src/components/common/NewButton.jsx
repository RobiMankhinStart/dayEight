import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx"; // npm install clsx (for clean class merging)

const NewButton = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick = () => {},
  children,
  className = "",
  to,
  ...rest
}) => {
  // Define variant styles
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  // Define size styles
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Combine everything dynamically
  const combinedClasses = clsx(
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className // allow custom classes or dynamic template literal
  );

  // If 'to' prop exists, render as a Link
  if (to) {
    return (
      <Link
        to={to}
        className={combinedClasses}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  // Otherwise, render as a normal button
  return (
    <button
      type="button"
      className={combinedClasses}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default NewButton;
