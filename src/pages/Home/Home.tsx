import { memo, Fragment } from 'react'
import NavBar from '../../ui/NavBar'

function Home () {
  return (
    <Fragment>
      <NavBar />
    </Fragment>
  )
}

export default memo(Home)
