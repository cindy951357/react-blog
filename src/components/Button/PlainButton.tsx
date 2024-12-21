interface GlowButtonProps {
  btnText: string;
  color: string; // background color is controlled by parent component
  onClick?: () => void;
}

const PlainButton: React.FC<GlowButtonProps> = ({ btnText, color, onClick }) => {
  return (
    <button
      className={`plain-button cursor-pointer
        hover:bg-secondary-100
        p-4 pb-1`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default PlainButton;
