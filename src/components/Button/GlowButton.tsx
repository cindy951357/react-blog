import React, { useState } from 'react';

interface GlowButtonProps {
    btnText: string;
    color: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ btnText, color }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <button
      className={`glow-button ${isGlowing ? 'glow' : ''}`}
      onMouseOver={() => setIsGlowing(true)}
      onMouseOut={() => setIsGlowing(false)}
      style={{
        backgroundColor: color,
        boxShadow: isGlowing ? `0 0 20px ${color}` : 'none',
      }}
    >
      {btnText}
    </button>
  );
};

export default GlowButton;