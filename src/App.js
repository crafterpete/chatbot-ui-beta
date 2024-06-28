import React, { useState } from 'react';
import Modal from 'react-modal';
import Draggable from 'react-draggable';
import Chat from './Chat';
import './App.css';

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      <button className="open-button" onClick={openModal}>Open Chat</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Chat Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <Draggable>
          <div className="modal-content">
          <button className="close-button" onClick={closeModal}>Close</button>
            <Chat /> {/* Use the Chat component here */}
          </div>
        </Draggable>
      </Modal>
    </div>
  );
}

export default App;