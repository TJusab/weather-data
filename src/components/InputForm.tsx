import { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const InputForm: FC = () => {
    const [input, setInput] = useState({
        year: '',
        month: '',
        day: ''
    });

    const handleOnChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setInput((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleOnSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={handleOnSubmit} className='weather-form'>
            <Form.Group controlId='year'>
                <Form.Label>Year</Form.Label>
                <Form.Control 
                    className='year'
                    value={input.year}
                    type='number'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='month'>
                <Form.Label>Month</Form.Label>
                <Form.Control
                    className='month'
                    value={input.month}
                    type='number'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='day'>
                <Form.Label>Day</Form.Label>
                <Form.Control
                    className='day'
                    value={input.day}
                    type='number'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button variant='primary' type='submit' className='submit-btn'>
                    Get Weather Data
                </Button>
            </Form.Group>
        </Form>
    );
};

export default InputForm;