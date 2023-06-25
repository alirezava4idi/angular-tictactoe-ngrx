import { Player } from "./player.model";

export interface Game
{
    board: string[],
    players: Player[],
    turn: Player,
    whoClicked: Player | null,
    isFinished: boolean,
    winner: Player | null,
    status: string | null
}