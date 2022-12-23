import { useState } from "react";

const Task4 = () => {
    const me = ['Artem', 'Kolomiiets'];
    const [prop, setProp] = useState(me[0]);

    return (
        <div>
            <h3>Завдання 6. Задання стану компоненту</h3>
            <h1 className='font-bold'>I am {prop}!</h1>
            <select value={prop} onChange={elem => setProp(elem.target.value)}>
                {me.map(info => <option key={info} value={info}>{info}</option>)}
            </select>
        </div>
    );
};

export default Task4;