import type { Card } from "@/components/game/battle/card";

const card_path = '../../public/assets/CARD_ASSET.jpg'

export const CardsDatabase: Card[] = [
    {
        id: "1",
        type: "abjuration",
        description: "Uma magia iniciante de proteção, concede proteção contra o proximo ataque.",
        img: card_path,
        name: "Proteger"
    },
    {
        id: "2",
        name: "Bola de Fogo",
        type: "evocation",
        description: "Conjura uma bola de fogo e envia a mesma para o adversário",
        img: card_path
    }
]