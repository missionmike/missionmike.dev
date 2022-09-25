import React from 'react';

const CopyStatus = ({
  copied = false,
  copyText = '(click to copy)',
}: {
  copied: boolean;
  copyText?: string;
}) => {
  return (
    <span className={`copy-status ${copied === true ? `copied` : ``}`}>
      <React.Fragment>{copied === true ? `Copied!` : copyText}</React.Fragment>
    </span>
  );
};

export { CopyStatus };
