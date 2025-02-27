import { createSlice } from "@reduxjs/toolkit";

const initialState = {cards:{}};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers:{
        addCard: (state, action) => {
            const {id, front, back} = action.payload;
            state.cards[id] = {
                id,
                front,
                back
            }
        }
    }
});

 export const cardSelector = (store) => store.cards.cards;
 export default cardSlice.reducer;
 export const {addCard} = cardSlice.actions;