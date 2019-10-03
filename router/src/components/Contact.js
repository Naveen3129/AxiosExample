import React from 'react'

const Contact= (props) => {
   // console.log(props)
      setTimeout(() => {
   props.history.push('/');
   }, 2000);

  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>G-4 building 10th floor</p>
      </div>
    </div>
  )
}

export default Contact