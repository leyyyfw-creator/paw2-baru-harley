import React from 'react'

function Counter() {
    const [angka, setangka] = React.useState(0)
  return (
    <div>
        <h1>{angka}</h1>
        <button className='btn btn-primary'>inc</button>
    </div>
  )
}

export default Counter  