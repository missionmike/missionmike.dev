import React, { useEffect, useState } from 'react';

import { BsClipboard } from 'react-icons/bs';
import styles from './CodeBlock.module.scss';

const CodeBlock = ({
  language = 'javascript',
  children,
  copyOnClick = false,
}: {
  language?: string;
  children: React.ReactNode;
  copyOnClick?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const clickHandler = () => {
    if (!copyOnClick) return;
    setCopied(true);
    navigator.clipboard.writeText(children.toString());
  };

  useEffect(() => {
    if (!copied) return;

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div onClick={clickHandler} className={styles.codeContainer}>
      {copyOnClick ? (
        <div className={styles.status} data-copied={copied}>
          {copied ? `Copied!` : <BsClipboard />}
        </div>
      ) : null}
      <pre>
        <code className={`hljs language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export { CodeBlock };
