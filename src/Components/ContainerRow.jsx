import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  display: 'flex',
  gap: '1rem'
}

const ContainerRow = ({ children }) => {
  return <div style={styles}>{children}</div>
}

ContainerRow.propTypes = {
  children: PropTypes.element
}

export default ContainerRow
