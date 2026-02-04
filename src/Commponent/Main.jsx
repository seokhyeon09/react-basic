import React from 'react'

function Main({content="기본컨텐츠", bgColor}) {
  return (
    <div style={{
      background:bgColor,
      padding:'20px',
      marginBottom:'20px'
      }}>
      {content}
    </div>
  )
}

export default Main