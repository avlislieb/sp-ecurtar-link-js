
import { useState, useEffect } from 'react';
import './style.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinksSave, deleteLink } from '../../services/storeLink';
import LinkItem from '../../components/LinkItem';



export default function Links() {

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect( () => {
    async function getLinks() {
      const result = await getLinksSave('@saveLink');
      
      if (result.length === 0) {
        setEmptyList(true);
      }

      setLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    console.log('link', link);

    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    if (result.length === 0) {
      setEmptyList(true);
    }

    setLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      { emptyList && (
        <div className="links-items">
          <h2 className="empty-text">Sua lista está vazia...</h2>
        </div>
      )}

      {links.map((link) => (
        <div key={link.id} className="links-items">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button className="link-delete" onClick={ () => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5252" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem content={data} hideModal={() => setShowModal(false)} />
      )}
    </div>
  );
}
  