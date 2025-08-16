import { createSlice } from "@reduxjs/toolkit";

const quizinitialState={
    quizzes: {}
}
const quizSlice= createSlice({
    name:"quizzes",
    initialState:  quizinitialState,
    reducers: {
        addQuiz: (state,action) =>{
            const {quizid, name, topicId,cardId} = action.payload;
            state.quizzes[quizid] = {
                quizid,
                name,
                topicId,
                cards: cards.push(cardId) //ask chatgpt whether when we destructure the cardId from payload, and then chnage the state, i have named card ids the cards and pushed the cardId in to the cards array,do as it mutates the array we can use this cardIds:[...cardIds] but we can push as due to undergoing underhood immutation in redux, the other point is do i need to keep the cardId (name) same in the property name in the change in the state? third thing is that we have given the initial state as a property quizzes with an empty object, and then we are adding the chnages in the methods from action.payload values , so then the state will be determined by what we tell in the methods?
            }

        }
    }

});

export default quizSlice.reducer;
export const addQuiz = quizSlice.actions;
export const quizSelector = (state) => state.quizzes.quizzes;