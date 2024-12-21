interface GlowButtonProps {
  btnText: string;
  color: string; // background color is controlled by parent component
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
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.backgroundColor = "LavenderBlush";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = color;
      }}
    >
      {btnText}
    </button>
  );
};

export default GlowButton;
