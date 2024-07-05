import Link from 'next/link';

const AboutMenu = () => {
  return (
    <nav>
      <ul className='flex flex-col'>
        <li className='flex'>
          <Link href="/about/site-intro">Site Introduction</Link>
        </li>
        <li className='flex'>
          <Link href="/about/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AboutMenu;
