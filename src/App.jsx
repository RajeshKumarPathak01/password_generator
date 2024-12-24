import { useState,useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [length, setLength] = useState(5);
  const [number, setNumber]= useState(false);
  const [character, setCharcter] = useState(false);
  const [Password, setPassword] = useState("");

  let pass="";
  let strng ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx1yz";
  let num = "1234567890";
  let specChar="!@#$%^&*()_+-=[]{};':|,.<>/?`~";
  const passref = useRef(null);

  const generatePassword = useCallback(()=>{
    if(character){
      strng+=specChar;
    }
    if(number){
      strng+=num;
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strng.length + 1);
      pass += strng.charAt(char);
    }
    setPassword(pass);

  },[length,character,number,setPassword])

  const handleCopy = useCallback(()=>{
   passref.current?.select();
   passref.current?.setSelectionRange(0,length);
   window.navigator.clipboard.writeText(Password);
  },[Password])
    
  

   useEffect(() => {
     generatePassword();
   }, [length, character, number, generatePassword]);

  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/passImg.jpg')] bg-cover">
        <div
          className=" bg-slate-700 px-2 py-1 fixed top-56 right-[30%] rounded-lg w-[40%] sm:w-[95%] 
          
          bg-opacity-[96%]
          sm:right-3 sm:fixed sm:mr-[1px] sm:ml-1 sm:h-[50%] sm:py-5 sm:-mt-14 sm:mb-8 py-5 lg:w-[80%] lg:-mr-32 "
        >
          <h2 className=" sm:text-pretty sm:text-center  text-3xl text-center text-white">
            Password Generator
          </h2>
          <hr className=" text-white my-5 mx-3" />
          <input
            type="text"
            name="inputBox"
            className="rounded-l-xl my-3 ml-4 py-2 w-[70%] font-bold text-xl sm:w-[88%] outline-none text-green-500 text-center lg:w-[70%] "
            id="inputBox"
            readOnly
            ref={passref}
            value={Password}
          />
          <button
            className="text-white  bg-blue-500 my-3 text-xl font-thin mr-4 py-2 
              rounded-r-xl rounded-l-none sm:ml-[30%] sm:text-xl sm:py-2
               hover:bg-green-400 "
            onClick={handleCopy}
          >
            Copy
          </button>
          <div className="flex flex-wrap font-bold ml-2 gap-x-5 px-2 sm:mx-2 sm:gap-x-4 sm:mr-2 sm:py-2 text-white  ">
            <input
              type="range"
              className="sm:w-[100%]"
              name="length"
              id="length"
              defaultValue={length}
              min={5}
              max={45}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="sm:mr-14" htmlFor="length">Length : {length}</label>

            <input
              type="checkbox"
              name="numbers"
              className="sm:ml-5"
              id="numbers"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numbers">Numbers</label>

            <input
              type="checkbox"
              name="characters"
              id="characters"
              className="sm:ml-12 sm:my-2"
              defaultChecked={character}
              onChange={() => setCharcter((prev) => !prev)}
            />
            <label htmlFor="characters"> Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
