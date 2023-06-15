import { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const WeatherForm: FC = () => {
    const [weatherData, setData] = useState({
        year: '',
        month: '',
        day: ''
    });
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(weatherData);
    };
    return (
        <Form onSubmit={handleOnSubmit} className='weather-form'>
            <Form.Group controlId='year'>
                <Form.Label>Year</Form.Label>
                <Form.Control
                    className='year'
                    name='year'
                    value={weatherData.year}
                    type='text'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='month'>
                <Form.Label>Month</Form.Label>
                <Form.Control
                    className='month'
                    name='month'
                    value={weatherData.month}
                    type='text'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='day'>
                <Form.Label>Day</Form.Label>
                <Form.Control
                    className='day'
                    name='day'
                    value={weatherData.day}
                    type='text'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button variant='primary' type='submit' className='submit-btn'>
                    Add Weather Date
                </Button>
            </Form.Group>
        </Form>
    );
};
export default WeatherForm;

