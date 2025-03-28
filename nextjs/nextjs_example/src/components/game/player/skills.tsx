import React from 'react';
import ReactModal from 'react-modal';

interface SkillsModalProps {
  onClose: () => void;
}

export function SkillsModal({ onClose }: SkillsModalProps) {
  return (
    <ReactModal isOpen={true} onRequestClose={onClose} ariaHideApp={false}>
      <h2>Skills Modal</h2>
      <button type='button' onClick={onClose}>Fechar</button>
    </ReactModal>
  );
}
