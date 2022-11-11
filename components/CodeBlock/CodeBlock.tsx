import React from 'react';

const CodeBlock = ({
  language = 'javascript',
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <pre>
        <code className={`hljs language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export { CodeBlock };
