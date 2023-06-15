import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherTable from './weatherApi';


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <WeatherForm />
      </div>
      <div className='weather-list'>
        <WeatherTable />
      </div>
    </div>
  );
};
export default App;