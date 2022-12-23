import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './lab6.css'

const Task1 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

    const onClick = () => {
        if (isValid()) {
            setName('');
            setEmail('');
            setTopic('');
            setMessage('');

            console.log({
                name,
                email,
                topic,
                message,
            });
        }
    };

    const validateEmail = email => {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return email.match(regex);
    };

    const isValid = () => {
        return email && topic && validateEmail(email);
    };

    return (
        <div className="m-3">
            <div className="form-group p-3">
                <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Name" />
            </div>
            <div className="form-group p-3">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email*" />
                <div className="pt-3 text-red">
                    {!email && 'Field is required!'}
                    {email && !validateEmail(email) && 'Must match email pattern!'}
                </div>
            </div>
            <div className="form-group p-3">
                <input value={topic} onChange={e => setTopic(e.target.value)} className="form-control" placeholder="Topic*" />
                <div className="pt-3 text-red">
                    {!topic && 'Field is required!'}
                </div>
            </div>
            <div className="form-group p-3">
                <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control" rows="3" placeholder="Message"></textarea>
            </div>
            <div className="form-group p-3">
                <Button variant="outline-info" className='p-3' onClick={onClick} disabled={!isValid()}>Submit</Button>
            </div>
        </div>
    );
};

export default Task1;