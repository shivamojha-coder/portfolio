import React, { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import "./styles/AgentWidget.css";

const AgentWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "Hi! I'm Shivam's AI Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I will pass this message to Shivam. Please use the contact section for direct emails.", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="agent-widget-container">
      {isOpen && (
        <div className="agent-chat-window">
          <div className="agent-header">
            <div className="agent-avatar">
              <FaRobot size={20} color="white" />
            </div>
            <div className="agent-info">
              <h3>AI Assistant</h3>
              <p>Online</p>
            </div>
          </div>
          
          <div className="agent-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.isBot ? "bot" : "user"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="agent-input">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}
      
      <div className="agent-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot size={28} />
      </div>
    </div>
  );
};

export default AgentWidget;
