import { useState } from "react";

export function PlayerAttributes(playerInfo: Player) {
    const [getPlayer, _setPlayer] = useState<Player>(playerInfo);

    return (
        <dialog>
            <ul>
                <li>id: {getPlayer.id}</li>
            </ul>
        </dialog>
    );
}

export type Player = {
    id: string;
};
