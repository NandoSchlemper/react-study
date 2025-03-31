// logica das cartas individuais

export type Card = {
    id: string,
    name: string,
    type: string, // enum later maybe? 
    description: string,
    img: string,
}


export function Card({props}: {props: Card}) {}J