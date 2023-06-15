export interface WeatherData {
    year: string;
    month: string;
    day: string;
}

export interface Action {
    type: 'ADD_WEATHER_DATA';
    payload: WeatherData;
}

export interface State {
    weatherData: WeatherData[];
}

export const weatherReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD_WEATHER_DATA':
            return {
                ...state,
                weatherData: [...state.weatherData, action.payload]
            };
        default:
            return state;
    }
};