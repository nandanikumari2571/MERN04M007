import React, { useContext } from 'react'
import { nameContext } from './App';

function Child() {
    let value = useContext(nameContext); // accessing the context data
    let theme = useContext(themeContext);
  return (
    <div>
      this is the child
      <br />
      value from context is : {value}

      <br />
        theme from context is : {theme}
    </div>
  )
}

export default Child
