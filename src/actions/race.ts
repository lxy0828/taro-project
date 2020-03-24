import POST from '../utils/request';
import api from '../services/api';
import {GETRACELIST} from '../constants/race';

export const getAllRace = (payload) => {
    const { page_num, page_size } = payload;
    return dispatch => {
        POST({page_num, page_size}, api.race.getRaceList).then((res) => {
            console.log(res)
            if (res.code === 1) {
                let data = res.data,
                    list = data.list || [],
                    count = data.count;
                console.log(data, count,999999999)
                dispatch({
                    type: GETRACELIST,
                    payload: {
                        raceList: list,
                        raceCount: count,
                        page_size, page_num
                    }
                })
            }
        })
    }
}