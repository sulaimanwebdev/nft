import { useState } from "react";

function App() {

  const [counter, setcounter] = useState(0);


  const inc = () =>{
    setcounter( counter+1)
  }

  const decr = () =>{

    if(counter > 0){
      setcounter(counter-1)

    }
    else{
      setcounter(0)


    }

  }

  return (
    <>

      <div className="main">




<h1>MINT ROGUES</h1>


<div className="card">

<div className="cardFlex1">
  <h2 className="aaa">#GOROGUE</h2>
</div>

<div className="cardFlex1">
<div className="innerCont">
  <h2>MY SOL BALANCE</h2>
  <h3>0 SOL</h3>
</div>

<div className="middle">
<h2>AMOUNT</h2>
<div className="ggg"><button onClick={decr}>-</button><span>{counter}</span><button onClick={inc}>+</button></div>
<button className="max">Max</button>
</div>


<div className="innerCont">
  <h2>TOTAL PRICE</h2>
  <h3>{counter}</h3>
</div>








</div>



<div className="cardFlex1 mainBTN">
  <button>Mint Now</button>
</div>

</div>















        <div className="darkBackground"></div>
        <img src="/images/background.jpeg" className="background" alt="" />
      </div>

    </>
  );
}

export default App;
