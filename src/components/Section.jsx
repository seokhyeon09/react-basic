import React from 'react'

export const Section = () => {
    const user = {
        name: 'Tom',
        isLogin: true
    }
    if(user.isLogin){
        return (
            <div>
                웹 로그인
            </div>
        )
    }else{
        return (
            <div>
                웹 로그아웃
            </div>
        )

    }
}
export default Section