import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
    datetime: string;
    tempmax: number;
    tempmin: number;
    precip: number;
    windspeed: number;
    winddir: string;
}

const API_KEY = 'GQLHBW7UXWKH8NH6ACF26FNJG';
const LOCATION = 'Canada';

const WeatherTable: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
            LOCATION
        )}?unitGroup=us&key=${API_KEY}`;

        try {
            const response = await axios.get(url);
            const data = response.data;

            if (data && data.days) {
                setWeatherData(data.days);
            } else {
                console.error('Unexpected weather data format:', data);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const buildWeatherTable = () => {
        if (!weatherData || weatherData.length === 0) {
            return <h3>No weather data available</h3>;
        }

        return (
            <div className='weather-list-table-container'>
                <table className='weather-list-table'>
                    <thead className='weather-list-header'>
                        <tr>
                            <th>Date</th>
                            <th>Max Temp</th>
                            <th>Min Temp</th>
                            <th>Precip</th>
                            <th>Wind Speed</th>
                            <th>Wind Direction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherData.map((day) => (
                            <tr key={day.datetime}>
                                <td>{day.datetime}</td>
                                <td>{day.tempmax}</td>
                                <td>{day.tempmin}</td>
                                <td>{day.precip}</td>
                                <td>{day.windspeed}</td>
                                <td>{day.winddir}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            <h3 className='weather-list-title'>Weather Data for {LOCATION}</h3>
            {buildWeatherTable()}
        </div>
    );
};

export default WeatherTable;
