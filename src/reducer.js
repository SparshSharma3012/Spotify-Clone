export const initialState= {
        user: null,
        playlists: [],
        playing: false,
        item: null,
       // token: 'BQAGhyZ3eKVbOrYVuNMGsLE6xZrmilTmF_A8LfuB34CTkBVoHUsH-kD_xqwEXq5nXkhvSugJAnjcVgGKTTRWH06riNrAYAIZqZ1TGHyNJcM4_HoOJdAV46VovWFQ5-mfR3qNicZZCw0IIGLY8nZaC5M-be5R3-N_to6nCCbxDJ-b24gPm90Y'
};

const reducer = (state, action) =>{
console.log(action);

switch(action.type){
    case "SET_USER":
        return{
            ...state, 
            user:action.user 
        }

    case 'SET_TOKEN':
        return {
            ...state,
            token:action.token
        }
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists
        }
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly
        }
    default:
        return state; 
}

}

export default reducer;