import { GETRACELIST } from '../constants/race'; 

import { raceType } from '../constants/commonType'
const INITIAL_STATE: raceType = {
    page_num: 1,
    page_size: 20,
    raceCount: 0,
    raceList: []
}
export default function race (state = INITIAL_STATE, action) {
    console.log(state, action)
    switch(action.type) {
        case GETRACELIST:
            const { page_size, page_num, raceList, raceCount } = action.payload;
            return {
                ...state,
                page_size,
                page_num,
                raceCount,
                raceList
            }

        default: return state
    }
}