import React, { useState } from "react";

interface GlowButtonProps {
  btnText: string;
  color: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ btnText, color, onClick }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <button
      className={`glow-button ${isGlowing ? "glow" : ""}`}
      onClick={onClick}
      onMouseOver={() => setIsGlowing(true)}
      onMouseOut={() => setIsGlowing(false)}
      style={{
        boxShadow: isGlowing ? `0 0 20px ${color}` : "none",
      }}
    >
      {btnText}
    </button>
  );
};

export default GlowButton;
