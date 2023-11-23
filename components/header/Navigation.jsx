import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Logo from '@/public/Logo.png'
function Navigation ()
{
	return (
	<NavigationMenu.Root className='w-screen h-16 bg-gradient-to-r from-indigo-900 to-indigo-600 flex items-center justify-between p-5 px-40 text-slate-50'>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						<Image className='h-12 w-12' src={Logo} alt="" />
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
			<NavigationMenu.List className='hidden lg:flex justify-bwteen items-center gap-5'>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						About us
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						Services
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						Our work
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						Contact
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						<Button>
							Subsecribe Now
						</Button>
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
	 </NavigationMenu.Root>
	)
}

export default Navigation;