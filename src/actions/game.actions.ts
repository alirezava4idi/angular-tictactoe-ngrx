import { createAction, props } from '@ngrx/store';




export const enterGame = createAction(
    '[Game] Enter'
)


export const randomPlayerPick = createAction(
    '[Game] Choose Random Player'
)

export const move = createAction(
    '[Game] Player moved',
    props<{gridIndex: number}>()
)

export const gameFinished = createAction(
    '[Game] Game Is Finished'
)
