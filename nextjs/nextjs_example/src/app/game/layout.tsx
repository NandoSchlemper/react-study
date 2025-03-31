"use client"
import { useState } from "react";
import { Navbar } from "@/components/game/layout/navbar";
import { InventoryModal } from "../../components/game/player/inventory";
import { SkillsModal } from "../../components/game/player/skills";
import { AttributesModal } from "../../components/game/player/attributes";
import { UserProfile } from "@/components/game/battle/userProfile";
import "./modals.scss"

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
    <div className="flex flex-col p-10 h-screen">
      <UserProfile />
      <div className="flex justify-center items-center flex-grow h-1/4 bg-amber-400">
        {children}
      </div>    
      <div className="flex justify-center items-center h-1/6 bg-blue-400">
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
        </div>
    </div>
  );
}
