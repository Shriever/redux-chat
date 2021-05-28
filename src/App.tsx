import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(["hello"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  // const changeThread = (e) => {

  // }

  return (
    <div className='min-h-20 bg-gray-300 p-4 mx-auto mt-20 w-1/3 bg-gray-50 border-black border-2 text-center'>
      {/* <div className='flex'>
        <div onClick={changeThread} className="px-4  cursor-pointer py-2 rounded rounded-b-none border-t-2 border-black border-r-2 border-l-2">Mike</div>
        <div className="px-4 py-2 border-black border-b-2">Dave</div>
        <div className="px-4 py-2 border-black border-b-2">Buster</div>
      </div> */}
      <div>
        {messages.map((m: string) => (
          <>
            {m} <br />
          </>
        ))}
      </div>
      <form className='mt-8' onSubmit={handleSubmit}>
        <input
          className='p-2 rounded focus:outline-none focus:ring focus:border-blue-300'
          type='text'
          value={inputValue}
          onChange={handleChange}
        />
        <button className='focus:outline-black bg-green-400 px-3 py-2 rounded-md ml-2'>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
