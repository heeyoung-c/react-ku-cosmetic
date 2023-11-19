import React from 'react'

import classes from './MainFooter.module.css'

const MainFooter = () => {
  return (
    <>
      <footer className={classes[`container`]}>
        <div className={classes[`inner`]}>
          <div className={classes['content']}>
            <div>
              주)프래그런스빅데이터 | 사업자등록번호: XXX-XX-XXXXX | 대표자:
              건국인 | 서울특별시 건국대 주소 | 대표번호: 1000-1000 | 이메일:
              {'abc@koukuk.ac.kr'}
            </div>
            <div>
              개인정보 보호 책임자: 천아무개 | 호스팅 서비스 사업자: Aws |
              통신판매업신고: 제 20XX-서울광진-1XXX 호
            </div>
            <div>© toi,vous 대한민국</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MainFooter
