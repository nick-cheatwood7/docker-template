import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

const __prod__ = process.env.NODE_ENV === "production";
const BASE_URL = __prod__ ? "/api" : "http://localhost:4000/api";

function App() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        const res = await fetch(`${BASE_URL}/people`);
        const data = await res.json();
        setUsers(data);
    }

    return (
        <div className='App'>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src='/vite.svg' className='logo' alt='Vite logo' />
                </a>
                <a href='https://reactjs.org' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
