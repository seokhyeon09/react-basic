import './App.css'
import Button from './Commponent/Button'
import Main from './Commponent/main'
import Section from './Commponent/Section'
import Input from './Commponent/Input'
function App() {
  const sectionData={
    content : '섹션이 전달되는 데이터',
    bgColor:'skyblue'
  }

  const handleChange=(value)=>{
    console.log("입력중:",value)
  }

  return (
    <div>
      <Input 
      inputValue={'hello react'}
      title={'input title'}
      placeholder={'입력하세요'}
      onChange={handleChange}
      />
      {/* data라는 이름으로 sectionData객체의 값을 보냄 */}
      {/* <Section data={sectionData}/> */}
      <Section {...sectionData}/>
      <hr />
      <Main content='메인 영역입니다.' bgColor='pink'/>
      <Main bgColor='pink'/>
      <Main content='메인 영역2입니다.' bgColor='pink'/>
      <hr />
      <Button text={'메일'} color={'red'}/>
      <Button text={'카페'} color={'blue'}>
        <span>자식요소 blue</span>
      </Button>
      <Button text={'블로그'} color={'green'}>
        <span>자식요소 green</span>
      </Button>
      <Button text={'블로그'}/>
      <h1>hello react</h1>
    </div>
  )
}

export default App
