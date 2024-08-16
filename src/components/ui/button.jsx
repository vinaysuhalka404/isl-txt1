import React from 'react';

const Button = ({ variant, size, children, ...props }) => {
  const variantClass = variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500 text-white';
  const sizeClass = size === 'icon' ? 'p-2' : 'p-4';

  return (
    <button className={`${variantClass} ${sizeClass} rounded`} {...props}>
      {children}
    </button>
  );
};

export default Button;
