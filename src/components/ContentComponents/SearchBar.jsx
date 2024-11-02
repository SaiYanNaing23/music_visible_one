import React, { useRef, useState } from 'react';

const SearchBar = () => {
  const inputRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    inputRef.current.classList.toggle('inclicked');
  };

  return (
    <div className=' cursor-pointer ' onClick={handleClick} >
      <input type="text" ref={inputRef} className='input' />
      {!isClicked && (
        <button className='btn' type='button' ></button>
      )}
    </div>
  );
};

export default SearchBar;
