interface NavbarProps {
    onOpenModal: (type: string) => void;
  }
  
  export function Navbar({ onOpenModal }: NavbarProps) {
    return (
      <div>
        <h1>I'm a navbar</h1>
        <button type='button' onClick={() => onOpenModal("inventory")}>Inventory</button>
        <button type='button' onClick={() => onOpenModal("skills")}>Skills</button>
        <button type='button' onClick={() => onOpenModal("attributes")}>Attributes</button>
      </div>
    );
  }
  