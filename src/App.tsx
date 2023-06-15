import { useReducer } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import { weatherReducer, State } from './reducer/weatherReducer';

const initialState: State = {
  weatherData: []
};

function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  console.log('state', state);
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <WeatherForm dispatch={dispatch} />
      </div>
    </div>
  );
};
export default App;