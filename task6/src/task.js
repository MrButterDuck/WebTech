import React, { useState } from 'react';

function AutocompleteInput({ options }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(options);
  const [isSuggest, checkSuggest] = useState(false);
  //const [last_len, lastLenCheck] = useState(0);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    let added = false
    Array.from(suggestions).forEach(el => {
        console.log(el)
        if(!added && el.indexOf(e.target.value) == 0 && e.target.value != ''){
            setInputValue(el)
            checkSuggest(true)
            added = true
        }
    });
    if(e.target.value == ''){
        checkSuggest(false) 
    }
  };


  const handleSubmit = () => {
    if (!inputValue) return;

    if (!options.includes(inputValue)) {
      options.push(inputValue)
    }
    setInputValue('')
    checkSuggest(false)
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
}

export default AutocompleteInput;
