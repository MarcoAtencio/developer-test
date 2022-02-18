import React from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper } from '../../styles/Common';

export const Modal = ({ isShow, children }) => {
  if (!isShow) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalWrapper>
      <div>{children}</div>
    </ModalWrapper>,
    document.getElementById('modal')
  );
};
