import React from 'react'
import PropTypes from 'prop-types'

import './CardBtn.scss'

const CardBtn = ({ children, textInfo, infoClasses }) => {
  return (
    <article className='card-btn'>
      <p className={`btn-info ${infoClasses}`}>{textInfo}</p>
      {children}
    </article>
  )
}

CardBtn.propTypes = {
  children: PropTypes.element,
  textInfo: PropTypes.string,
  infoClasses: PropTypes.string
}

export default CardBtn
