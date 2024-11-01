import React from 'react';
import DOMPurify from "isomorphic-dompurify";
import styles from './text.module.css';

// Add a `variant` prop to determine the class name dynamically
const HtmlSanitizer = ({ text, variant = 'body' }) => {
  const clean = DOMPurify.sanitize(text);
  // Determine the class name based on the `variant` prop
  const containerClass = variant === 'card' ? styles.card : styles.body;

  return (
    <div className={containerClass} dangerouslySetInnerHTML={{ __html: clean }}></div>
  );
};

export default HtmlSanitizer;

