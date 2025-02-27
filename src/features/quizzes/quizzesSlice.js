import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    quizzes:{}
};

const quizSlice= createSlice({
    name:'Quiz',
    initialState,
    reducers: {
        addQuiz: (state,action) =>{
            const {id, name, topicId,cardIds} = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds:[...cardIds]
            }
        }
    }
});
export const quizSelector = (state) => state.Quiz.quizzes;
export const {addQuiz} = quizSlice.actions;
export default quizSlice.reducer;  