import React, { useState } from 'react'
import { surveyListData } from '../constants/surveyListData'
import { useSelector, useDispatch } from 'react-redux'

import classes from './SurveyList.module.css'
import { surveyActions } from '../store/slice/surveySlice'

const SurveyList = () => {
  const [surveyList, setSurveyList] = useState(surveyListData)
  const surveyNumber = useSelector((state) => state.survey.surveyNumber)
  const selectedValue = useSelector((state) => state.survey.selectedValue)

  const dispatch = useDispatch()
  const { changeSelectedValue } = surveyActions

  const selectedValueHandler = (selectedValue) => {
    dispatch(changeSelectedValue(selectedValue))
  }

  const renderValue = (renderNumber) => {
    const { title, surveyImages } = surveyList[renderNumber - 1]
    return (
      <div className={classes['container']}>
        <div className={classes['title-container']}>
          <div>{title}</div>
        </div>
        <div className={classes['content-container']}>
          {surveyNumber === 9 ? (
            <div
              className={classes['result']}
              style={{ backgroundImage: `url(${surveyImages[2].url})` }}
            />
          ) : (
            surveyImages.map(({ title, url, preference }) => {
              return (
                <div
                  className={classes['survey']}
                  key={title}
                  style={{ backgroundImage: `url(${url})` }}
                  onClick={() => {
                    selectedValueHandler(preference)
                  }}
                />
              )
            })
          )}
        </div>
      </div>
    )
  }

  return <>{renderValue(surveyNumber)}</>
}

export default SurveyList
