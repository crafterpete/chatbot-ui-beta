import React, { useState, useEffect } from 'react';
import './Chat.css'; // import the CSS file

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setMessages([{ sender: 'bot', content: "Hello there! How can I help you today?" }]);
      setLoading(false);
    }, 1000); // 1000ms delay

    return () => clearTimeout(timer); // cleanup on unmount
  }, []); // empty dependency array means this effect runs once on mount

  const handleSend = (event) => {
    event.preventDefault(); // prevent the form from refreshing the page
    if (input.trim() !== '') {
      setMessages([...messages, { sender: 'user', content: input }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <p key={index} className={`message ${message.sender}-message`}>{message.content}</p>
        ))}
        {loading && <div className="message bot-message">...</div>}
      </div>
      <form className="input-area" onSubmit={handleSend}>
        <input className="input-box" value={input} onChange={e => setInput(e.target.value)} />
        <button className="send-button" type="submit" disabled={input.trim() === ''}>Send</button>
      </form>
    </div>
  );
}

export default Chat;