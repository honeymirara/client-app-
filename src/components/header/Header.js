import React from 'react'
import style from './style.module.css'

export default function header() {
    return (<> <header>
        <div>
            <span className={style.logo}> House staff </span>
        </div>
        <div className={style.presentation}> </div>
    </header></>

    )
}