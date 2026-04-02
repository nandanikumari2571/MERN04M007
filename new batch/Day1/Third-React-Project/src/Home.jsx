
function Home(props) {
  return (
    <>
      <h1>Home Page</h1>
       {/* {children} */}

       value : {props.value}
       <br />
       string : {props.str }
       <br />
       array : {props.arr}


<ul>
       {
        props.arr.map((v, i) => (
             <li key={i}>{v}</li>
        ))
       }
</ul>

     {props.arr.join(", ")}
    </>
  )
}

export default Home;