import React from 'react';
import './App.css';


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['acordar', 'beber água', 'malhar', 'café da manhã', 'estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>
        {tarefas.map((item) => Task(item))}
      </ul>
    );
  }
}

export default App;
