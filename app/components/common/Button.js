import Link from 'next/link';

const Button = ({ text, href, style, onClick }) => {
  const primaryStyle = "relative overflow-hidden border-4 border-black px-8 py-3 font-bold text-white bg-cta hover:bg-cta-hover transition duration-300 ease-out";
  const secondaryStyle = "relative overflow-hidden border-4 border-black px-8 py-3 font-bold text-cta bg-white hover:bg-cta-hover hover:text-white transition duration-300 ease-out";
  const amazonStyle = "relative overflow-hidden px-8 py-3 text-orange-600 border border-orange-600 rounded-md bg-clean hover:bg-orange-600 hover:text-white transition duration-300 ease-out";
  let buttonStyle;
  if (style === 'primary') {
    buttonStyle = primaryStyle;
  } else if (style === 'secondary') {
    buttonStyle = secondaryStyle;
  } else if (style === 'amazon') {
    buttonStyle = amazonStyle;
  } else {
    buttonStyle = primaryStyle; // Default to primary style if style prop is not provided or doesn't match any condition
  }

  return (
    <Link href={href} passHref>
      <button as="a" className={buttonStyle} onClick={onClick}>
        <span className="relative z-10">{text}</span>
      </button>
    </Link>
  );
};

export default Button;