import { GET_NOTES, ADD_NOTE } from "./NotesTypes";

const initialState = {
    notes: []
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            };
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        default:
            return state;
    }
}