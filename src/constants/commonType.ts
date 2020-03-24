export type raceType = {
    page_num: number;
    page_size: number;
    raceList: Array<{
        id: number,
        game_name: string;
        icon: string;
    }>;
    raceCount: number;
}