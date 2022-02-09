import './style.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({ hideModal, content }) {

    async function copyLink() {
        await navigator.clipboard.writeText(content.link);
        alert('url copiada com sucesso.')
    }
    return(
        <div className="modal-container">
            
            <div className="modal-header">
                <h2>Link encurtado</h2>
                <button onClick={hideModal}>
                    <FiX sike={28} color="#000" />
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className="modal-link" onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="#fff" />
            </button>
        </div>
    )
}