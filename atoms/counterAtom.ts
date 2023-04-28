import {atom} from "recoil"

export const counterAtomState = atom<number>({
    key:"counterAtomStateKey",
    default:0
})