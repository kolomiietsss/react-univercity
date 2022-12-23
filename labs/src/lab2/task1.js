import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Task1 = () => {

    const counters = [
        { id: 1, initial: 6, min: -5, max: 10 },
        { id: 1, initial: 5 },
        { id: 3 }
    ];

    return (
        <div>
            <hr/>
            <h1>Лабораторна робота 2.</h1>
            <h2>Завдання 1.2</h2>
            {counters.map(({ ...props }) => <Counter {...props}/>)}
        </div>
    )

}



const Counter = ({ min = -10, max = 10, initial = 0 }) => {
    const [current, setCurrent] = useState(initial);

    return (
        <div className='d-flex flex-row p-2'>
            <span className='me-3 p-2'>Поточний рахунок: {current}</span>
            <Button variant="outline-info" className='me-3' onClick={() => current < max && setCurrent(current + 1)}>+</Button>
            <Button variant="outline-info" className='me-3' onClick={() => current > min && setCurrent(current - 1)}>-</Button>
            <Button variant="outline-info" className='me-3' onClick={() => setCurrent(initial)}>Reset</Button>
        </div>
    );
};

export default Task1;