import { FC } from 'react';
import { WeatherData } from '../reducer/weatherReducer';

interface WeatherListProps {
    weatherData: WeatherData[];
}

const WeatherList: FC<WeatherListProps> = ({ weatherData }) => {
    return (
        <div className='weather-list'>
            <h3>List of Weather Data</h3>
            <div className='weather-list-table-container'>
                <table className='weather-list-table'>
                    <thead className='weather-list-header'>
                        <tr>
                            /** Display the date, maxTemp, minTemp, precip, Wind, wind direction */
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}