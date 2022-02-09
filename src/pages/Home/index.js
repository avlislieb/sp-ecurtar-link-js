import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import './style.css';

import api from '../../services/api';
import { saveLink } from '../../services/storeLink';


export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      });
      setData(response.data);
      setShowModal(true);

      saveLink('@saveLink', response.data);

      setLink('');
    } catch {
      alert('ops, deu ruim.');
      setLink('');
      setShowModal(false);
    }
    
    //setShowModal(true);
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/Logo.png" alt="Sujeito link logo" />
        <h1>Sujeito link</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            className="input"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="cole seu link aqui"
          />
        </div>

        <button onClick={handleShortLink}>Gerar link</button>
      </div>

      <Menu />
      {showModal && (
        <LinkItem hideModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
