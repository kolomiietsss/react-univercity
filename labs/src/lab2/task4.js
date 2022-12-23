import React, {useState} from 'react'
import Button from "react-bootstrap/Button";

const Task4 = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);
    const [word, setWord] = useState([{id: 0, massage: ""}]);
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function Check() {
        if (count === 9) {
            alert("You looser")
            setResult(number);
            setCount(10);

        } else {
            if (+input === number) {
                alert("You Win")
                setWord([
                    ...word,
                    {
                        id: word.length + 1,
                        message: "N == " + input
                    }
                ])
                setResult(number);
            } else {
                setCount(count + 1);
                if (number > input) {
                    setWord([
                        ...word,
                        {
                            id: word.length + 1,
                            message: "N > " + input
                        }
                    ])
                    console.log(number)
                    console.log(input)
                } else {
                    setWord([
                        ...word,
                        {
                            id: word.length + 1,
                            message: "N < " + input
                        }
                    ])
                }
            }
        }
    }

    function random() {
        setResult('');
        setCount(0);
        setWord([{id: 0, massage: ""}])
        setNumber(Math.floor(Math.random() * (1000)) + 1);

    }

    return (
        <div className={"firstl"}>
            <div>
                <Button variant="outline-info" className='me-3' onClick={random} disabled={count < 10 && count !== 0}>NeW game</Button>
                <input className='me-3' type={"number"} onChange={(event) => setInput(event.target.value)} disabled={count === 10 }/>
                <Button variant="outline-success" className='me-3' onClick={Check} disabled={count === 10 }>Check</Button>
            </div>
            <h2>Information</h2>
            <div className={"back"}> {word.map(m => (
                <p key={m.id}>{m.message}</p>
            ))}</div>
            <h3>Attempts {count}</h3>
            <h3>Result: {result}</h3>
        </div>
    );
}

export default Task4;