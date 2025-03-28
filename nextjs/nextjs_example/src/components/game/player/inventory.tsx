import React from 'react';
import ReactModal from 'react-modal';

interface InventoryModalProps {
  onClose: () => void;
}

export function InventoryModal({ onClose }: InventoryModalProps) {
  return (
    <ReactModal isOpen={true} onRequestClose={onClose} ariaHideApp={false}>
      <h2>Inventory Modal</h2>
      <button type='button' onClick={onClose}>Fechar</button>
    </ReactModal>
  );
}
