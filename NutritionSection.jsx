import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_ANSWERS = {
  default: "I'm analyzing your metrics. What aspect of your training or recovery would you like to optimize?",
  recovery: "Your current heart rate variability (HRV) is 82ms, and recovery is at 78%. I recommend a light aerobic workout (Zone 2) for 30 minutes, followed by active stretching. Focus on hydration—aim for 500ml of electrolytes within the next hour.",
  sprint: "Analyzing your athletics sprint: Your block reaction time was 0.14s (excellent), but your acceleration peak was slightly delayed at step 4. Keep your hips forward during the drive phase to maintain vertical power transfer.",
  boxing: "Power output check: Your lead hook hit 340 Joules of kinetic energy with a hand speed of 8.2 m/s. Your wrist angle deviated by 3.5 degrees upon impact; keep it locked to avoid joint strain.",
  diet: "Based on today's calorie burn of 2,450 kcal, you need a high-protein dinner. Aim for 35g of lean protein, 70g of complex carbohydrates (quinoa or sweet potato), and healthy fats to support muscle repair.",
  injury: "Muscle tightness detected in your left hamstring (Load ratio 1.25x vs right). I've flagged a moderate risk of overuse strain. Skip high-intensity agility drills today and focus on isometric releases."
};

const AICoachChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'coach', text: "Hi! I'm AURA, your AI Performance Coach. I've analyzed your latest workouts. You're in peak condition today. How can I help you optimize your training?" }
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { id: messages.length + 1, sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const lowerText = userMsg.text.toLowerCase();
      let replyText = MOCK_ANSWERS.default;

      if (lowerText.includes('recovery') || lowerText.includes('sleep') || lowerText.includes('rest')) {
        replyText = MOCK_ANSWERS.recovery;
      } else if (lowerText.includes('sprint') || lowerText.includes('run') || lowerText.includes('speed')) {
        replyText = MOCK_ANSWERS.sprint;
      } else if (lowerText.includes('box') || lowerText.includes('punch') || lowerText.includes('power')) {
        replyText = MOCK_ANSWERS.boxing;
      } else if (lowerText.includes('eat') || lowerText.includes('diet') || lowerText.includes('food') || lowerText.includes('nutrition')) {
        replyText = MOCK_ANSWERS.diet;
      } else if (lowerText.includes('injury') || lowerText.includes('hurt') || lowerText.includes('sore') || lowerText.includes('pain')) {
        replyText = MOCK_ANSWERS.injury;
      }

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'coach',
        text: replyText
      }]);
    }, 1000);
  };

  return (
    <div className="ai-coach-card">
      <div className="ai-coach-header">
        <div className="coach-avatar">
          <Bot size={20} color="#FFFFFF" />
          <span className="coach-status-dot"></span>
        </div>
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '700' }}>AURA Coach</h4>
          <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={10} color="#00C853" /> Active Analytics Engine
          </span>
        </div>
      </div>

      <div className="ai-coach-chat-history">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`chat-bubble ${msg.sender}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSend} className="ai-coach-input-area">
        <input
          type="text"
          className="ai-coach-input"
          placeholder="Ask about recovery, sprint power, diet..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="ai-coach-send-btn">
          <Send size={16} />
        </button>
      </form>
      <div style={{ padding: '8px 16px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '6px', overflowX: 'auto' }}>
        {['Hamstring soreness?', 'Sprinting tips?', 'What should I eat?', 'My recovery score?'].map((suggestion, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setInputText(suggestion)}
            style={{
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              fontSize: '0.75rem',
              color: 'var(--victory-blue)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600'
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AICoachChat;
