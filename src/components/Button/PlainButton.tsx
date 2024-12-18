interface GlowButtonProps {
  btnText: string;
  color: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ btnText, color, onClick }) => {
  return (
    <button
      className={`plain-button rounded p-4 pb-1 mx-2`}
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      {btnText}
    </button>
  );
};

export default GlowButton;
