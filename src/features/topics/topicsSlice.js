import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics:{}
};
const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers:{
        addTopic: (state,action) =>{
            const {id, name, icon,quizIds} = action.payload;
            state.topics[id]= {
                id,
                name,
                icon,
                quizIds: quizIds || []
            };
        }},
    extraReducers: (builder) => {
        builder.addCase('quizzes/addQuiz', (state,action) => {
            const {topicId,id} = action.payload;
            //ensure the topic exists before adding the quiz id.
            if (state.topics[topicId]){
                state.topics[topicId].quizIds.push(id);
            }
        });
    }
    });

export const selectTopics = (state) => state.topics.topics;


export default topicsSlice.reducer;
export const {addTopic} = topicsSlice.actions;
