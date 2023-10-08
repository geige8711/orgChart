import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Type of data we are expecting from the api
export interface StructureType {
    [key: number]: boolean;
}

export interface StructureState {
    structure: StructureType;
}

const initialState: StructureState = {
    structure: {},
};

const structure_slice = createSlice({
    name: "structure",
    initialState,
    reducers: {
        // createSlice looked at all of the functions that were defined in the reducers field,
        // and for every "case reducer" function provided, generates an action creator that uses the name of the reducer as the action type itself.
        // So, the addCountries reducer became an action type of "countries/addCountries",
        // and the addCountries() action creator will return an action with that type.

        // Use the PayloadAction type to declare the contents of `action.payload`
        updateStructure(state, action: PayloadAction<StructureState>) {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.structure = action.payload.structure;
        },
    },
});

// Extract the action creators object and the reducer
const { actions, reducer } = structure_slice;
// Extract and export each action creator by name
export const { updateStructure } = actions;
// Export the reducer, either as a default or named export
export default reducer;
