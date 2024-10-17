import React from 'react';

// Define the types for the Card component's props
interface CardProps {
  children: React.ReactNode;  // The content inside the card
  className?: string;  // Optional className prop for styling
}

// Define the Card component
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}  {/* Render any children passed to the Card component */}
    </div>
  );
};

// Define the CardHeader component
export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
};

// Define the CardTitle component
export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return (
    <h2 className={`card-title ${className}`}>
      {children}
    </h2>
  );
};

// Define the CardDescription component
export const CardDescription: React.FC<CardProps> = ({ children, className }) => {
  return (
    <p className={`card-description ${className}`}>
      {children}
    </p>
  );
};

// Define the CardContent component
export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

// Define the CardFooter component
export const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card-footer ${className}`}>
      {children}
    </div>
  );
};

// Export the Card component by default
export default Card;
