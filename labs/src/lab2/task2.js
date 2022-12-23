import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Task2 = () => {
    return (
        <div>
            <h2>Завдання 2.2. Компоненти + додавання і видалення зі списку</h2>
            <List products={data} />
        </div>
        )
}

const data = [
    { id: 1, name: 'Ноутбук' },
    { id: 2, name: 'Телефон' },
    { id: 3, name: 'Колонка' },
    { id: 4, name: 'Флешка' }
];

const List = ({ products }) => {
    const [selected, setSelected] = useState(new Set());

    const add = e => {
        e.preventDefault();
        setSelected(new Set([...selected, e.target.product.value]));
    };

    const remove = id => {
        setSelected(new Set([...selected].filter(s => +s !== id)));
    };

    return (
        <div>
            <Form className='d-flex flex-row p-2' onSubmit={add}>
                <Form.Select name='product' className='me-3'>
                    {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </Form.Select>
                <Button type='submit' variant='outline-info' className='me-3'>
                    Додати
                </Button>
            </Form>
            {[ ...selected ].map(id => products.find(p => p.id === +id)).map(p => (
                <div key={p.id} className='d-flex flex-row justify-content-between me-3 p-2'>
                    <span className='me-3'>{p.name}</span>
                    <Button variant="outline-danger" onClick={() => remove(p.id)}>Delete</Button>
                </div>
            ))}
        </div>
    );
};

export default Task2;