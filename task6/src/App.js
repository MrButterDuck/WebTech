import './App.css';
import AutocompleteInput from './task'

function App() {
  const options = ["двфу", "тгму", "невельского"];

  return (
    <div className="App">
      <AutocompleteInput options={options} />
    </div>
  );
}

export default App;
