import {useState} from 'react';
import { Button, AirlyLogo, MobileMenu, MobileCancel } from "components";
import { Link } from 'react-scroll';
// import Link from "next/link";

const NAV__LINK = [
  {
    path: "home",
    display: "",
  },
  {
    path: "design",
    display: "DESIGN",
  },
  {
    path: "development",
    display: "DEVELOPMENT",
  },
  {
    path: "marketing",
    display: "MARKETING",
  },
  {
    path: 'clients',
    display: "CLIENTS",
  },
  {
    path: 'Process',
    display: "PROCESS",
  },
  {
    path: 'testmonials',
    display: "TESTIMONIALS",
  },
  {
    path: 'contact_us',
    display: "CONTACT US",
  },
];

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 bg-white shadow-headerShadow w-full z-50">
        <div
          className={[
            "flex justify-between items-center h-[60px]",
            // screen,
          ].join(" ")}
        >            
        <Link to={"home"} spy={true} smooth={true} offset={-60} duration={500} className='cursor-pointer'>
          <AirlyLogo />
        </Link>
          <div className="flex gap-3">
            <div className={'gap-5 hidden 1xl:flex'}>
              {NAV__LINK.map((item, index) => (
                  <Button variant="text">
                    <Link to={item.path} spy={true} smooth={true} offset={-60} duration={500} key={index} className="pb-4 border-b-4 border-white whitespace-nowrap hover:border-main-deepBlue">
                      {item.display}
                    </Link>
                  </Button>
                ))}
            </div>
            <div className="p-3 1xl:pr-3">
              <Link to={"portfolio"} spy={true} smooth={true} offset={-60} duration={500}>
                <Button variant="primary" className="hover:bg-main-hoverOrange w-[140px] h-[40px] sm:w-[200px] h-[40px]">
                  Portfolio
                </Button>
                </Link>
            </div>
            <div className="flex text-center 1xl:hidden flex text-center justify-center">
              <i className="w-[1px] h-[40px] border-r-2 border-lightBlue mr-3 mt-3"/>
              <div 
                className="flex text-center"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <MobileCancel/>)
                   : (
                  <MobileMenu />
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
            <div
              className={`w-auto h-auto flex v-screen flex-col items-start justify-center gap-5 shadow-headerShadow ${
                navbar ? 'p-5 md:p-0 block' : 'hidden'
              }`}
            >
              {NAV__LINK.map((item, index) => (
                  <Button variant="text">
                    <Link to={item.path} spy={true} smooth={true} offset={-60} duration={500} key={index} onClick={() => setNavbar(!navbar)} className="border-b-4 border-white whitespace-nowrap hover:border-main-deepBlue">
                      {item.display}
                    </Link>
                  </Button>
                ))}
            </div>
         </div>

         {/* fixed buttons */}
         
        {/* mobile */}
         {/* <div
          className={[
            // "flex w-full justify-center fixed top-[410px] 360:top-[660px] 375:top-[600px] 390:top-[620px] 420:top-[680px] sm:hidden"
            // "fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600"
            
          ].join(" ")}
        > */}
        <Link to={'contact_us'} spy={true} smooth={true} offset={-60} duration={500}>
          <Button
            variant="secondary"
            className=
            // "w-[300px] h-[40px] pt-1 sm:hidden"
            "fixed z-50 w-[300px] h-[40px] -translate-x-1/2 bottom-4 left-1/2 sm:hidden"
            typoVariant="title-semi-button"
          >
            Let’s Connect
          </Button>
          </Link>
        {/* </div> */}
         <div className='hidden sm:block x:block]'>
         <Link to={'contact_us'} spy={true} smooth={true} offset={-60} duration={1000}>
          <Button
            variant="secondary"
            className=
            // "text-main-deepBlue hover:bg-main-hoverWhite sm:fixed w-[200px] h-[40px] absolute top-[800px] left-[1%] xl:top-[650px] 2xl:top-[900px]"
            "hidden sm:block fixed z-50 w-[200px] h-[40px] text-main-deepBlue bottom-10 left-6"
            typoVariant="body"
          >
            Let’s Connect
          </Button>
          </Link>

           <div className=
          //  'sm:fixed w-[325px] h-[35px] text-white bg-main-blue rounded-[20px] flex justify-center items-center inline-flex top-[670px] -right-[15%] rotate-90 x:-right-[10%] xl:top-[550px] xl:-right-[7%] 2xl:xl:top-[770px] 5xl:-right-[5%]'>
            'sm:fixed w-[325px] h-[35px] text-white bg-main-red rounded-[20px] flex justify-center items-center inline-flex rotate-90 bottom-40 -right-20 -mr-[45px]'>
            <li className='flex items-center justify-center'>
              <a className='flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white' href="https://dribbble.com/airlystudio" target="_blank" rel="noopener noreferrer">
                DRIBBBLE
              </a>
            </li>
            <p className='cursor-default flex items-center mr-[5px] ml-[5px]'>/</p>
            <li className='flex items-center justify-center'>
              <a className='flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white' href="https://twitter.com/airlystudio" target="_blank" rel="noopener noreferrer">
                TWITTER
              </a>
            </li>
            <p className='cursor-default flex items-center mr-[5px] ml-[5px]'>/</p>
            <li className='flex items-center justify-center'>
              <a className='flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white' href="https://www.behance.net/airlystudio" target="_blank" rel="noopener noreferrer">
                BEHANCE
              </a>
            </li>
            <p className='cursor-default flex items-center mr-[5px] ml-[5px]'>/</p>
            <li className='flex items-center justify-center'>
              <a className='flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white' href="https://www.linkedin.com/company/airlystudio" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
            </li>
           </div>
        </div>
      </div>
    </>
  );
};