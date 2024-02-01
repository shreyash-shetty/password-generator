import { useState, useCallback,useEffect } from "react";
import './App.css';

function App() {


  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback (() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "{}[]()$%#@!&<>";

    for (let i = 1; i <= length; i++) {
      
      let a = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(a);
      
    }

setPassword(pass);

  }, [length, num, char,  setPassword])

   useEffect (() => {passwordGenerator()},
   
   [length, num, char, passwordGenerator])


   const updateCopy = () =>{
    var textContent = document.getElementById("myBox");
    textContent.select();
     navigator.clipboard.writeText(textContent.value);
    
   }

  return (
    <>
      <div className="container">
        <h1 className="heading">Password Generator</h1>
        <div>
          <input type="text" value={password} placeholder="Password" id="myBox" readOnly />
          <button onClick={updateCopy}>Copy</button>
        </div>
        <div className="rangeContainer">
          <div className="range">
            <input type="range" min={6} max={50} value={length} className="rangeCursor" onChange={(event) => { setLength(event.target.value) }} />
            <label>Length : {length}</label>
          </div>
          <div className="num">
            <input type="checkbox" defaultChecked={num} id="numberInput" onChange={() => { setNum((prev) => !prev) }} />
            <label>Number {num}</label>
          </div>
          <div className="char">
            <input type="checkbox" defaultChecked={char} id="charInput" onChange={() => { setChar((prev) => !prev) }} />
            <label>Character {char}</label>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;


// import { useState, useCallback, useEffect, useRef } from 'react'



// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
      
//     }

//     setPassword(pass)


//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
//   return (
    
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className='text-white text-center my-3'>Password generator</h1>
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//         />
//         <button
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>
        
//     </div>
//     <div className='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//         <input 
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//          className='cursor-pointer'
//          onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label>Length: {length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//       />
//       <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
// </div>
    
//   )
// }

// export default App