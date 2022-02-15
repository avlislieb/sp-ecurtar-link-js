

import { useState } from 'react';
import { useHistory } from 'react-router';
import { AiOutlineUser } from 'react-icons/ai';

import './style.css';

export default function Login() {
    const [access, setAccess] = useState('');
    const history = useHistory();

    function handleSubmit() {
        history.push('/');
    }
  return (
    <div className="container-login">
      <div className="logo">
        <img src="/Logo.png" alt="Sujeito link logo" />
        <h1>Open link</h1>
      </div>

      <div className="area-input">
        <div>
            <AiOutlineUser size={28} color="#fff" />
          <input
            className="input"
            value={access}
            onChange={(e) => setAccess(e.target.value)}
            placeholder="Digite seu ID."
          />
        </div>

        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  );
}