import React from 'react'
import { useNavigate } from 'react-router-dom'
import { surveyActions } from '../store/slice/surveySlice'
import { useSelector, useDispatch } from 'react-redux'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'

import classes from './NewSurvey.module.css'
import SurveyList from '../components/SurveyList'

const NewSurvey = () => {
  const {
    increaseSurveyNumber,
    decreaseSurveyNumber,
    resetSurveyNumber,
    addSelectedSurvey,
    changeSelectedValue,
  } = surveyActions

  const surveyNumber = useSelector((state) => state.survey.surveyNumber)
  const selectedValue = useSelector((state) => state.survey.selectedValue)
  const selectedSurvey = useSelector((state) => state.survey.selectedValue)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const closeSurveyHandler = () => {
    dispatch(resetSurveyNumber())
    navigate('/')
  }

  const eventHandler = (event) => {
    event.stopPropagation()
  }

  const buttonHandler = (type) => {
    if (selectedValue === '') {
      alert('값을 선택해주세요')
    }

    if (type === 'left') {
      leftButtonHandler()
    }

    if (type === 'right') {
      rightButtonHandler()
    }

    dispatch(changeSelectedValue(''))
  }

  const leftButtonHandler = () => {
    if (surveyNumber > 1) {
      dispatch(decreaseSurveyNumber())
      dispatch()
    }
  }

  const rightButtonHandler = () => {
    if (surveyNumber < 9) {
      dispatch(increaseSurveyNumber())
      dispatch(addSelectedSurvey(selectedValue))
      console.log(selectedSurvey)
    }
  }

  return (
    <>
      <div
        className={classes['backdrop']}
        onClick={closeSurveyHandler}
      >
        <div
          className={classes['container']}
          onClick={eventHandler}
        >
          <button
            className={classes['cancel-button']}
            onClick={closeSurveyHandler}
          >
            {MdCancel()}
          </button>
          <SurveyList />
          <div className={classes['button-container']}>
            <button
              className={classes['left-button']}
              onClick={() => {
                leftButtonHandler()
                buttonHandler()
              }}
            >
              {FaArrowAltCircleLeft()}
            </button>
            <button
              className={classes['right-button']}
              onClick={rightButtonHandler}
            >
              {FaArrowAltCircleRight()}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewSurvey
