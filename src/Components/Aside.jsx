import React from 'react'

import './Aside.scss'

const Aside = () => {
  return (
    <aside className='aside'>
      <h4 className='aside-title'>
        <span className='orange'>Dev</span>challenges.io
      </h4>
      <ul className='aside-list'>
        <li className='aside-list-item'>Colors</li>
        <li className='aside-list-item'>Typography</li>
        <li className='aside-list-item'>Spaces</li>
        <li className='aside-list-item selected'>Buttons</li>
        <li className='aside-list-item'>Inputs</li>
        <li className='aside-list-item'>Grid</li>
      </ul>
    </aside>
  )
}

export default Aside
