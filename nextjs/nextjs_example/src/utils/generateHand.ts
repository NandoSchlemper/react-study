import type { Card } from "@/components/game/battle/card";

export function generateHand(QuantidadeCartas: number, Deck: Card[]): Card[] {
    const CardsInHand: Card[] = []

    for (const i in Deck) {
        if (Number.parseInt(i) >= QuantidadeCartas) {
            break
        }

        const randomIndex = Math.random() * Deck.length
        CardsInHand.push(Deck[randomIndex])
    }

    return CardsInHand
}