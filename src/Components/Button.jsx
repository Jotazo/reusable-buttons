/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

import icon from '../assets/icons/local_grocery_store.png'

const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color
}) => {
  const text = disabled
    ? 'Disabled'
    : color === 'primary'
    ? 'Primary'
    : color === 'secondary'
    ? 'Secondary'
    : color === 'danger'
    ? 'Danger'
    : 'Default'

  const disabledShadowBtn = disableShadow && 'no-shadow'
  const disabledBtn = disabled && 'disabled'

  return (
    <button
      className={`btn ${variant} ${disabledShadowBtn} ${disabledBtn} ${size} ${color}`}
    >
      {startIcon && <img src={icon} alt='icon' />}
      {text}
      {endIcon && <img src={icon} alt='icon' />}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Button
