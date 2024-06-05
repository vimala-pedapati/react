import { useState,useCallback,useEffect,useRef } from 'react'
function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState('');
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+{}:""<>?,./;[]';

    for (let i = 1; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  useEffect(() => {
    generatePassword()
  },[length,numberAllowed,charAllowed])



  const handleNumbersCheckboxChange = () => {
    setNumberAllowed((prev) => {
      console.log(prev);
      return !prev;
    });
  };
  const handleCharsCheckboxChange = () => {
    setCharAllowed((prev) => {
      console.log(prev);
      return !prev;
    });
  };

  const coptyTextToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select()
  }

  return (
    <div className='max-w-md mx-auto shadow-md px-4 py-2 my-10 bg-gray-800 text-white rounded-lg'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className="flex shadow rounded-lg  overflow-hidden mb-2">
        <input type='text' readOnly value={password} placeholder='Password' className='px-3 py-2  w-full outline-none text-blue-800' ref={passwordRef}></input>
        <button className='text-white outline-none px-3 py-0.5 bg-blue-800' onClick={coptyTextToClipBoard}>copy</button>
      </div>
      <div className=''>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={20} value={length} className='cursor-pointer outline-none' onChange={(e) => setLength(e.target.value)}></input>
          <label>Length : {length} {numberAllowed}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' onChange={handleNumbersCheckboxChange} defaultChecked={numberAllowed}></input>
          <label>Numbers Allowed</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' onChange={handleCharsCheckboxChange} defaultChecked={charAllowed}></input>
          <label>Chars Allowed</label>
        </div>
      </div>
    </div>

  )
}

export default App
