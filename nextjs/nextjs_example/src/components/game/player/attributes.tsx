import React from 'react';
import ReactModal from 'react-modal';

interface AttributesModalProps {
  onClose: () => void;
}

export function AttributesModal({ onClose }: AttributesModalProps) {
  return (
    <ReactModal isOpen={true} onRequestClose={onClose} ariaHideApp={false}>
      <h2>Attributes Modal</h2>
      <button type='button' onClick={onClose}>Fechar</button>
    </ReactModal>
  );
}
