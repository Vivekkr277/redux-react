import React from 'react'

const User = (props) => {
    const {data} = props;
  return (
    <div>
      <h3>User componenet</h3>
      <h3>{data.name}</h3>
      <h3> {data.year}</h3>
    </div>
  )
}

export default User
