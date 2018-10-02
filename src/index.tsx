import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PushButton } from '../lib/index'

const App = () => {
  return (
    <div>
      <PushButton text="Push Button" onClick={() => { }} />
      <br />
      <br />
      <PushButton text="Push Button" size="small" onClick={() => { }} />
      <br />
      <br />
      <PushButton text="Push Button" size="mini" onClick={() => { }} style={{ width: '100px' }} />
      <br />
      <br />
      <PushButton text="Push Button" type="on" onClick={() => { }} />
      <br />
      <br />
      <PushButton text="Push Button" disabled onClick={() => { }} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#page')
)