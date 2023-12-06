import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from './slice/surveySlice'

const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
})

export default store
