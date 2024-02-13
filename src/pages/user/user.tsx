import React from 'react'

const user = () => {
  console.log("name",process.env.MONGODB_URI)
  return (
    <div>
      process.env.customKey
    </div>
  )
}

export default user
