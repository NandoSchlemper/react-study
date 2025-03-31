import type { Card } from "@/components/game/battle/card"
import { CardsDatabase } from "@/types/allCardsDb"

export function generateDeck(QuantidadeCartas: number): Card[] {
    const Deck: Card[] = []

    for (const i in CardsDatabase) {
        if (Number.parseInt(i) >= QuantidadeCartas) break;
        const randomIndex = Math.random() * CardsDatabase.length
        Deck.push(CardsDatabase[randomIndex])
    }

    return Deck
}