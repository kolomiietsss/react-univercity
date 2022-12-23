import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Task3 = () => <Cart products={data} />;

const data = [
    { id: 1, name: 'Ноутбук', min: 0, max: 100, price: 150 },
    { id: 2, name: 'Навушники', price: 30 },
    { id: 3, name: 'Колонка', min: 1, max: 5, price: 15 },
];

const cellClass = 'border border-black p-1';

const Cart = ({ products }) => {
    const [totals, setTotals] = useState(Object.fromEntries(products.map(p => [p.id, p.min * p.price])));
    const [quantities, setQuantities] = useState(Object.fromEntries(products.map(p => [p.id, p.min])));

    return (
        <div>
            <table className='border border-collapse me-3'>
                <tr>
                    <th className={cellClass}>Name</th>
                    <th className={cellClass}>Price</th>
                    <th className={cellClass}>Quantity</th>
                    <th className={cellClass}>Total</th>
                </tr>
                {products.map(({ id, name, min, max, price }) => (
                    <tr key={id}>
                        <td className={cellClass}>{name}</td>
                        <td className={cellClass}>{price}$</td>
                        <td className={cellClass}>
                            <Counter min={min} max={max} listener={value => {
                                setQuantities({ ...quantities, [id]: +value });
                                setTotals({ ...totals, [id]: +value * price });
                            }} />
                        </td>
                        <td className={cellClass}>{totals[id]}$</td>
                    </tr>
                ))}
                <tr>
                    <th className={cellClass}>Totals</th>
                    <th className={cellClass}></th>
                    <th className={cellClass}>{Object.values(quantities).reduce((p, c) => p + c, 0)}</th>
                    <th className={cellClass}>{Object.values(totals).reduce((p, c) => p + c, 0)}</th>
                </tr>
            </table>
        </div>
    );
};

const Counter = ({ min = 0, max = Number.MAX_VALUE, listener }) => {
    const [current, setCurrent] = useState(min);

    const set = value => {
        setCurrent(value);
        listener(value);
    };

    return (
        <div className='d-flex flex-row p-2'>
            <Button variant="outline-info" className='me-3' onClick={() => current < max && set(current + 1)}>+</Button>
            <span className='me-3 p-2'>{current}</span>
            <Button variant="outline-info" className='me-3' onClick={() => current > min && set(current - 1)}>-</Button>
        </div>
    );
};

export default Task3;