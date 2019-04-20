import React from 'react'
import { Link } from 'gatsby'

import Header from '../Header/'

import './layout.scss'

import { rhythm, scale } from '../../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
      <Header location={location} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </div>
      </div>
    )
  }
}

export default Template
