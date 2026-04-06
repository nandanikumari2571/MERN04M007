import './App.css'
import About from './component/About'
import Card from './component/Card'
import Home from './component/Home'

function App() {

  function fun(){
    console.log("this is new function")
  }

  let animals = [

    {
      img: "https://thf.bing.com/th/id/OIP.8t_l7AiDSzRIpDQaSftAvAHaE8?w=177&h=150&c=6&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3",
      title: "Panda image",
      desc: "This is a panda image",
      btn: "view panda"
    },

    {
      img: "https://thf.bing.com/th/id/OIP.QghJfUlTwSWzfSNZIeovMwHaEh?w=272&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3",
      title: "Cat image",
      desc: "This is a cat image",
      btn: "view cat"
    },

    {
      img: "",
      title: "Dog image",
      desc: "This is a dog image",
      btn: "view dog"
    },

    {
      img: "https://www.google.com/imgres?q=rabbit%20images&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Flovely-bunny-easter-fluffy-baby-260nw-2493059551.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Frabbit-insurance%3Fimage_type%3Dphoto&docid=R9FI9pLaisoWNM&tbnid=hkI0xccy7qOaFM&vet=12ahUKEwjPtZiFiNGTAxWesFYBHVysB_wQnPAOegQIKxAB..i&w=390&h=280&hcb=2&itg=1&ved=2ahUKEwjPtZiFiNGTAxWesFYBHVysB_wQnPAOegQIKxAB",
      title: "Rabbit image",
      desc: "This is a rabbit image",
      btn: "view rabbit"
    },




  ]

  
  

  return (
    <>
      <h1>this is the App page</h1>
      <Home obj={{ name: "John", age: 30 }} func={fun} /> 
    
      {/* <About/> */}

      <div className='grid grid-cols-1 gap-2 ps-5'>
         <Card animal={animals[0]}></Card>
         <Card animal={animals[1]}></Card>
         <Card animal={animals[2]}></Card>
         <Card animal={animals[3]}></Card>
         <Card animal={animals[4]}></Card>

      </div>

      
      


    </>
  )
}

export default App