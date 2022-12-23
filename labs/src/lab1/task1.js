import './lab1.css'

const Task1 = () => {

    return (
        <div>
            <h2>Лабораторна робота 1. Коломієць</h2>
            <h3>Завдання 2. таблиця</h3>
            <table className='border border-collapse task1'>
                <tr>
                    <td className='border border-black p-1 fw-bold '>First Name</td>
                    <td className='border border-black p-1'>Artem</td>
                </tr>
                <tr>
                    <td className='border border-black p-1 fw-bold'>Last Name</td>
                    <td className='border border-black p-1'>Kolomiiets</td>
                </tr>
                <tr>
                    <td className='border border-black p-1 fw-bold'>Score</td>
                    <td className='border border-black p-1'><b>80</b></td>
                </tr>
            </table>
        </div>
    );
};

export default Task1;