'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll,} from 'react-scroll';
// import { useLoading } from '../loading/loadingContext';

const functionNav = [
  { nameText: "Members", id: 'members' },
  { nameText: "Projects", id: 'projects' },
  { nameText: "Service", id: 'service' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  // const [iconsIndex, setIconsIndex] = useState(1);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const { isLoading } = useLoading();

  // useEffect(() => {
  //   const controlNavbar = () => {
  //     if (window.scrollY > 0) {
  //       setIconsIndex(0);
  //     } else {
  //       setIconsIndex(1);
  //     }

  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", controlNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, [lastScrollY]);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // if (isLoading) {
  //   return null; 
  // }

  // const Icons = [
  //   <ArrowUpIcon key={0} onClick={scrollToTop} />,
  //   <Link href={'/'} key={1}><ArrowLeftIcon /></Link>,
  // ];

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
      <div className='fixed z-30 text-center container flex justify-center w-full'>
        <div className='bg-[#101D1F] mt-10 text-white rounded-full max-w-full'>
          <nav className='flex w-[623px] items-center py-2 px-[6px] gap-2'>  

            <Link href={'/'} className='flex items-center ml-6'>
              <Image
                src={'/assets/logovar.svg'}
                alt='logo'
                width={30}
                height={32}
              />
              <span className='ml-3 text-[28px] font-[700]'>Var</span>
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
            {/* {
              functionNav.map((item, index) => (
                item.id.startsWith('/') ? (
                  <LinkHoverAnimation key={index} text={item.nameText} href={item.id} />
                ) : (
                  <ScrollLink
                    key={index}
                    to={item.id}
                    smooth={true}
                    duration={1000}
                  >
                    <LinkHoverAnimation text={item.nameText} href={`#/${item.id}`} />
                  </ScrollLink>
                )
              ))
            } */}
            
          </nav>
        </div>
      </div>
    </>
  );
};

// type ArrowUpIconProps = {
//   onClick: () => void;
// };

// const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ onClick }) => {
//   const [hovered, setHovered] = useState(false);

//   const handleMouseOver = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   return (
//     <div className='relative group'>
//       <button
//         title='arrow up'
//         type='button'
//         className='bg-[#AAC8CD] w-[40px] h-[40px] m-1 rounded-full flex items-center justify-center'
//         onMouseEnter={handleMouseOver}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick} 
//       >
//         <div className='absolute inset-0 flex items-center justify-center'>
//           <Image
//             src={arrowUp}
//             width={20}
//             alt='arrow-up'
//             className={`transition-transform duration-300 transform`}
//           />
//         </div>
//       </button>
//     </div>
//   );
// };


// const ArrowLeftIcon = () => {
//   const [hovered, setHovered] = useState(false);

//   const handleMouseOver = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   return (
//     <div className='relative group'>
//       <button
//         title='arrow up'
//         type='button'
//         className='bg-[#AAC8CD] w-[40px] h-[40px] m-1 rounded-full flex items-center justify-center'
//         onMouseEnter={handleMouseOver}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className='absolute inset-0 flex items-center justify-center'>
//           <Image
//             src={arrowUp}
//             width={20}
//             alt='arrow-up'
//             className={`transition-transform duration-300 transform -rotate-90`}
//           />
//         </div>
//       </button>
//     </div>
//   );
// };

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
      className={`text-[16px] font-[500] whitespace-nowrap transition-transform duration-300 absolute top-full z-10 ${hovered ? 'transform -translate-y-[34px]' : ''}`}
    >
      {text}
    </span>
    </div>
  );
};

export default Navbar;
