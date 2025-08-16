import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cards:{}
};

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers:{
        addCard :(state,action) =>{
            const {front,back,id,quizId} = action.payload;
            state.cards[cardId]= {
                cardId,
                front: front,
                back: back,
            }
        }
    }
});

export const cardSelector= (state) => state.cards.cards;
export default cardSlice.reducer;
export const addCard= cardSlice.actions;