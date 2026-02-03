import React from "react"
import "./css/Main.css"
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
const Main = () => {

    const techList = [
        {
            id: 1,
            title: "HTML",
            desc: "웹 구조를 만드는 마크업 언어",
            icon: htmlIcon,
        },
        {
            id: 2,
            title: "CSS",
            desc: "화면을 꾸미는 스타일 언어",
            icon: cssIcon,
        },
        {
            id: 3,
            title: "JavaScript",
            desc: "웹에 동작을 추가하는 언어",
            icon: jsIcon,
        },
    ];
    return (
        <main>
            <h2>{"<Main>SECTION"}</h2>
        </main>
    )
}
export default Main