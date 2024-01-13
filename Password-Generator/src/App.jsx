import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumber] = useState(false);
  const [chars, setChars] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (chars) str += "(){}[]@#$%&!=-_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, chars, setPassword])

  const copyPass = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,24);

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => { generatePassword() }, [length, numbers
    , chars, generatePassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 bg-gray-600 text-red-800  font-semibold'>
        <h1 className='text-white text-center'>Passoword Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4'>
          <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3 ' placeholder='password' 
          readOnly
          ref={passwordRef} />
          <button 
          className='bg-blue-500 text-white  px-3 py-2 outline-none shrink-0'
          onClick={copyPass}>
            Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
            type="range" 
            min={8} max={24} 
            value={length} 
            className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={setNumber}  onChange={() => {
              setNumber((prev) => !prev);
            }} /><label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={setChars} id="chars" onChange={() => {
              setChars((prev) => !prev);
            }} /><label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
