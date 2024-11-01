import React from 'react';
import DOMPurify from "isomorphic-dompurify";
import styles from './text.module.css';

const Text = ({ text, variant = 'body' }) => {
  const clean = DOMPurify.sanitize(text);

  const containerClass = variant === 'card' ? styles.card : styles.body;

  return (
    <div>
      <div className={containerClass} dangerouslySetInnerHTML={{ __html: clean }}></div>
    </div>
  );
};

export default Text;