'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll,} from 'react-scroll';

const functionNav = [
  { nameText: "Members", id: 'members' },
  { nameText: "Projects", id: 'projects' },
  { nameText: "Service", id: 'service' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const section = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const distance = Math.abs(window.scrollY - element.offsetTop);
          const duration = Math.min(1500, Math.max(500, distance / 2));
          scroll.scrollTo(element.offsetTop, {
            duration,
            smooth: true,
          });
        } 
      }, 500)
    }
  }, [pathname]);

  return (
    <>
      <div className='fixed z-40 text-center container flex justify-center w-full'>
        <div className='bg-[#101D1F] mt-10 text-white rounded-full hidden lg:block max-w-full'>
          <nav className='flex lg:w-[623px] items-center py-2 px-[2px] lg:px-[6px] lg:gap-2'>  

            <Link href={'/'} className='flex items-center ml-6'>
              <Image
                src={'/assets/logovar.svg'}
                alt='logo'
                width={30}
                height={32}
              />
              <span className='ml-3 text-sm lg:text-[28px] font-[700]'>Var</span>
            </Link>
            

            <div className='flex flex-grow justify-center gap-4'>
              {functionNav.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.id}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}
                  href={`#/${item.id}`}
                  onClick={() => {
                    if (pathname !== '/') {
                      window.location.href = `/#${item.id}`;
                    }
                  }}
                >
                  <HoverAnimation text={item.nameText} />
                </ScrollLink>
              ))

              }
            </div>      

            <div className='mr-2 font-[700] bg-[#AAC8CD] rounded-full px-3 hover:brightness-90'>
              <Link href={'/contacts'}>
                <HoverAnimation text={`Let's Talk`} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

type HoverAnimationProps = {
  text: string;
};

const HoverAnimation: React.FC<HoverAnimationProps> = ({ text,  }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="group relative py-2 my-1 px-2 flex justify-center items-center overflow-hidden"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
    <span
      className={`absolute inset-0 rounded-2xl transition-all duration-300 ${hovered ? 'bg-[#AAC8CD] bg-opacity-45' : ''}`}
    ></span>

      <span
      className={`text-[16px] font-[500] whitespace-nowrap transition-transform duration-300 z-10 ${hovered ? 'transform -translate-y-[100px]' : ''}`}
    >
      {text}
    </span>
      <span
      className={`text-[16px] font-[500] whitespace-nowrap transition-transform duration-300 absolute top-full z-10 ${hovered ? 'transform -translate-y-[31px]' : ''}`}
    >
      {text}
    </span>
    </div>
  );
};

export default Navbar;
