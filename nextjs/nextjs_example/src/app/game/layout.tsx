"use client"
import { useState } from "react";
import { Navbar } from "../../components/game/navbar";
import { InventoryModal } from "../../components/game/inventory";
import { SkillsModal } from "../../components/game/skills";
import { AttributesModal } from "../../components/game/attributes";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isInventoryOpen, setIsInventoryOpen] = useState<boolean>(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState<boolean>(false);
  const [isAttributesOpen, setIsAttributesOpen] = useState<boolean>(false);

  function handleOpenModal(type: string) {
    switch (type) {
      case "inventory":
        setIsInventoryOpen(true);
        break;
      case "skills":
        setIsSkillsOpen(true);
        break;
      case "attributes":
        setIsAttributesOpen(true);
        break;
    }
  }

  function handleCloseModal(type: string) {
    switch (type) {
      case "inventory":
        setIsInventoryOpen(false);
        break;
      case "skills":
        setIsSkillsOpen(false);
        break;
      case "attributes":
        setIsAttributesOpen(false);
        break;
    }
  }

  return (
    <>
      {children}
      <Navbar onOpenModal={handleOpenModal} />
      {isInventoryOpen && (
        <InventoryModal onClose={() => handleCloseModal("inventory")} />
      )}
      {isSkillsOpen && (
        <SkillsModal onClose={() => handleCloseModal("skills")} />
      )}
      {isAttributesOpen && (
        <AttributesModal onClose={() => handleCloseModal("attributes")} />
      )}
    </>
  );
}
