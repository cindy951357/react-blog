import React, { useState } from 'react';

interface GlowButtonProps {
    btnText: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ btnText }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <button
      className={`glow-button ${isGlowing ? 'glow' : ''}`}
      onMouseOver={() => setIsGlowing(true)}
      onMouseOut={() => setIsGlowing(false)}
    >
      {btnText}
    </button>
  );
};

export default GlowButton;