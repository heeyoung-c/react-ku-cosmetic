import React from 'react'

import { BsHandbag } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'

import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.logo}>toi,vous</div>
        <div className={classes.right_box}>
          <div>
            <RxPerson />
          </div>
          <div>
            <BsHandbag />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
