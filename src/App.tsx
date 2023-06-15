import './App.css'
import Header from './components/Header';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <div>
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default App
