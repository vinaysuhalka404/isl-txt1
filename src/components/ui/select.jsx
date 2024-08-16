import React from 'react';


// Define each component
const Select = ({ children, className = '', ...props }) => (
  <select className={`select ${className}`} {...props}>
    {children}
  </select>
);

const SelectTrigger = ({ children, className = '', ...props }) => (
  <div className={`select-trigger ${className}`} {...props}>
    {children}
  </div>
);

const SelectValue = ({ children, className = '', ...props }) => (
  <div className={`select-value ${className}`} {...props}>
    {children}
  </div>
);

const SelectContent = ({ children, className = '', ...props }) => (
  <div className={`select-content ${className}`} {...props}>
    {children}
  </div>
);

const SelectItem = ({ value, children, className = '', ...props }) => (
  <option value={value} className={`select-item ${className}`} {...props}>
    {children}
  </option>
);

// Export components
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };

