import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_NOTES, ADD_NOTE } from "./NotesTypes";

export const getNotes = () => dispatch => {
    axios
        .get("/api/v1/notes/")
        .then(response => {
            dispatch({
                type: GET_NOTES,
                payload: response.data
            });
        })
        .catch(error => {
            toastOnError(error);
        });
};

export const addNote = note => dispatch => {
    axios
        .post("/api/v1/notes", note)
        .then(response => {
            dispatch({
                type: ADD_NOTE,
                payload: response.data
            });
        })
        .catch(error => {
            toastOnError(error);
        });
};