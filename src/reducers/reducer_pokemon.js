import { FETCH_POKEMON } from "../actions/index";

export default function(state=null, action) {
    
     // eslint-disable-next-line
    switch (action.type) {
        
        case FETCH_POKEMON: 
            console.log('Action received', action.payload.data);
            return action.payload.data;
    }

    return state;
}