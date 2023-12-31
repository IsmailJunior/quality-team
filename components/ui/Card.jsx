import {motion} from 'framer-motion'
function Card ( { children,animate,delay,margin} )
{
	return (
		<motion.div initial={ animate ? { opacity: 0, translateY: '140px' } : null } whileInView={ animate ? { opacity: 1, translateY: '0px', transition: { 'duration': 0.4, 'delay': delay } } : null } viewport={ { once: true, amount: 0.70 } } className={ `
		w-4/5 h-3/2 bg-gradient-to-t
		 from-indigo-900 to-indigo-600
		 rounded-3xl p-7 lg:p-16
		 flex flex-col justify-center
		 border shadow-xl shadow-green-500/30 border-gray-500 ${margin}`}>
			{children}
		</motion.div>
	)
}

export default Card;