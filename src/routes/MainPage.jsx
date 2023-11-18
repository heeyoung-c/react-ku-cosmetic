import React from 'react'

import classes from './MainPage.module.css'
import SurveyButton from '../components/SurveyButton'

const MainPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.button}>
            <SurveyButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
