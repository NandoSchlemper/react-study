// Logica das cartas + Deck do usuário
// todos vão começar com 12 cartas

import type { Card } from "./card";

// quando isntanciar a mão do usuário, ele vai pegar 4 cartas aleatoriamente do deck principal
// vai ter as seguintes opções: pickCard, discartCard, useCard
export function Hand({cards}: {cards: Card[]} ) {
    return (
        <div>
            <h1>i'm the hand ;D</h1>
        </div>
    )
}