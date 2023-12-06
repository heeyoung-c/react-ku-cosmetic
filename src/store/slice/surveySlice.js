import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  surveyNumber: 1,
  selectedValue: '',
  selectedSurvey: [],
}

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    increaseSurveyNumber(state) {
      state.surveyNumber = state.surveyNumber + 1
    },
    decreaseSurveyNumber(state) {
      state.surveyNumber = state.surveyNumber - 1
    },
    resetSurveyNumber(state) {
      state.surveyNumber = 1
    },
    changeSelectedValue(state, action) {
      state.selectedValue = action.payload
    },
    addSelectedSurvey(state, action) {
      state.selectedSurvey = state.selectedSurvey.push(action.payload)
    },
  },
})

export const surveyActions = surveySlice.actions
export default surveySlice.reducer
