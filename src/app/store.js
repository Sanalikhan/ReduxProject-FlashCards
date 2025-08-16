import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsSliceReducer from '../features/topics/topicsSlice';
import quizSliceReducer from '../features/quizzes/quizzesSlice';
import cardsSliceReducer from "../features/cards/cardsSlice";

export const store= configureStore({
  reducer: {
    topics: topicsSliceReducer,
    Quiz: quizSliceReducer,
    cards: cardsSliceReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});
