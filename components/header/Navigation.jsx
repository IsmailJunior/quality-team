
import {useState,useEffect} from 'react'
import Button from '@/components/ui/Button';
import {useMediaQuery} from 'react-responsive'
import Image from 'next/image'
import Link from 'next/link'
import Switch from '@/components/ui/Switch/Switch'
import { RiMenu2Fill } from "react-icons/ri";
import { useRouter } from 'next/router'
import {motion, AnimatePresence} from 'framer-motion'
function Navigation ()
{
	const [ isOpen, setIsOpen ] = useState( false )
	const [ isMinWidthMedium, setIsMinWidthMedium ] = useState( false );
	const mediaQuery = useMediaQuery({ query: `(max-width: 1200px)` });
	const Logo = "https://res.cloudinary.com/dckoelcja/image/upload/v1701282856/Logo_llmprk.png"

	const { locale,push} = useRouter()
		const onLinkClicked = () =>
	{
		push('https://web.facebook.com/profile.php?id=61551994790268')
		}
	const onMenuClicked = () =>
	{
		isOpen ? setIsOpen(false) : setIsOpen(true)
	}
	const resetMenu = () =>
	{
		setIsOpen(false)
	}
	useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
	}
	if ( isMinWidthMedium )
	{
		setIsOpen(false)
	}
  }, [mediaQuery, isMinWidthMedium]);
	return (
		<AnimatePresence>
			<motion.div initial={{height: 100}} animate={{height: isOpen ? 400 : 100}} exit={{height: 100}} className='fixed overflow-hidden w-screen top-0 bg-gradient-to-r z-10 text-slate-100 font-semibold from-indigo-900 to-indigo-600 lg:px-16 px-6 flex flex-wrap items-center space-x-6 lg:space-x-0 lg:py-0 pb-10'>
				<div className='flex-1 flex justify-between items-center'>
				<Link onClick={resetMenu} className='p-5' href='/' locale={locale}>
					<Image width={55} height={55} src={Logo} alt="" />
				</Link>
				</div>
				<li>
					<Button onClick={onLinkClicked} variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>
                        Subsecribe Now
                    </Button>
						</li>
				<li>
				<Switch />
				</li>
					<button onClick={onMenuClicked}  className='cursor-pointer lg:hidden block p-5 text-xl'>
						<RiMenu2Fill />
					</button>
			<div className='lg:flex lg:items-center lg:w-auto w-full'>
					<nav>
					<ul className='lg:flex items-center space-y-5 lg:space-y-0 justify-between pt-4 lg:pt-0'>
					<li>
	                <Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/about-us'>
					<motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px'}} viewport={{once:false}}>
						About us	
					</motion.div>
                    </Link>
					</li>
					<li>
					<Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/services'>
                    <motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition: {delay:0.2}}} viewport={{once:false}}>
						Services	
					</motion.div>
                    </Link>
						</li>
						<li>
					<Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/our-work'>
                    <motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition: {delay:0.3}}} viewport={{once:false}}>
						Our Work
					</motion.div>
                    </Link>
						</li>
						<li className='lg:p-4 py-3 px-0 block'>
					<Link href='#'>
					<motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition: {delay:0.4}}} viewport={{once:false}}>
						Contact Us
					</motion.div>
							</Link>
						</li>
					</ul>
					</nav>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default Navigation;