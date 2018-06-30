import { FETCH_POKEMON } from "../actions/index";

export default function(state=[], action) {
    
     // eslint-disable-next-line
    switch (action.type) {
        
        case FETCH_POKEMON: 
            if(!action.payload) {
                console.log('Action received', action);
                return state;
            }
            
            console.log('Action received', action.payload.data);
            return [action.payload.data, ...state];
            
    }

    return state;
}