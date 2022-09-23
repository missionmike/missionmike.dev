import React from 'react';

interface ICopy {
  copied: boolean;
  copyText: string;
}

const CopyText = function ({ copied = false, copyText = '' }: ICopy) {
  let returnText = `(click to copy)`;

  if (copied === true) {
    returnText = `Copied!`;
  } else if (copyText && copyText === 'none') {
    returnText = ``;
  } else if (copyText) {
    returnText = copyText;
  }

  return <React.Fragment>{returnText}</React.Fragment>;
};

const CopyStatus = ({ copied = false, copyText = '' }: ICopy) => {
  return (
    <span className={`copy-status ${copied === true ? `copied text-pink-500` : ``}`}>
      <CopyText copied={copied} copyText={copyText} />
    </span>
  );
};

export default CopyStatus;
