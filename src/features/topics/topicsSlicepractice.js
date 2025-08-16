import { createSlice } from "@reduxjs/toolkit";


const initialSliceState= {
    topics:{}
};
const topicsSlice= createSlice({
    name: topics,
    initialState: initialSliceState,
    reducers: {
        addTopic: ((state,action) =>{
            const {topicid,name,icon,quizIds} = action.payload;
            state.topics[id] = {
                topicid, 
                name,
                icon,
                quizIds: quizIds.push(quizIds) || []
            }
        })
    },
    extraReducers: (builder) => {
        builder.addCase("addQuiz", (state,action)=>{
            if(state.topics[topicid]){
            const {topicid,quizIds} = action.payload;
            }
        })
    }
});

export default topicsSlice.reducer;
export const topicSelector = (state) => state.topics.topics;
export const addTopic = topicsSlice.actions;





