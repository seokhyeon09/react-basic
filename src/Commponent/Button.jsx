import React from 'react'

const Button = ({ text, color = 'gray', children = null }) => {
    // console.log(text)

    const onClickButton = (e) => {
        // console.log(text, color)
        // console.log(e)
    }

    return (
        <div
            style={{ color: color }}
            // 클릭시 이벤트 발생 함수
            onClick={onClickButton}
        >
            {text}-{color.toUpperCase()}
            <div>
                {children}
            </div>
        </div>
    )
}