import React from 'react'

import classes from './MainPage.module.css'
import SurveyButton from '../components/SurveyButton'
import { Outlet, useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()

  const surveyButtonHandler = () => {
    navigate('survey')
  }

  return (
    <>
      <Outlet />
      <div className={classes['container']}>
        <div className={classes['inner']}>
          <div
            className={classes['button']}
            onClick={surveyButtonHandler}
          >
            <SurveyButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
