import { useState } from "react";

const Task3 = () => {
    const me = ['Artem', 'Kolomiiets', '80'];
    const [prop, setProp] = useState(me[0]);

    return (
        <div>
            <h3>Завдання 5. Масив інфи в селекті</h3>
            <select value={prop} onChange={elem => setProp(elem.target.value)}>
                {me.map(info => <option key={info}>{info}</option>)}
            </select>
        </div>
    );
};

export default Task3;