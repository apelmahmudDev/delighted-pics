import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@heroicons/react/outline/ShoppingBagIcon';
import { useAuth } from '../../contexts/AuthContext';
import navLogoLight from '../../images/logo/nav-logo-light.svg';
import navLogoDark from '../../images/logo/nav-logo-dark.svg';

const navigation = [
	{ name: 'Home', link: 'home' },
	{ name: 'Example', link: 'example' },
	{ name: 'Clients', link: 'clients' },
	{ name: 'Dashboard', link: 'dashboard' },
];
const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
	const { currentUser, logout, isNavigate, setIsNavigate } = useAuth();
	setIsNavigate(false);

	return (
		<Disclosure as='nav' className='py-4'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						{/* delighted pics logo for mobile layout */}
						<Link to='/'>
							<div className='md:hidden text-center flex justify-center my-4'>
								<img
									src={isNavigate ? navLogoDark : navLogoLight}
									alt='delighted pics logo'
								/>
							</div>
						</Link>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start '>
								{/* delighted logo for large layout*/}
								<Link to='/'>
									<img
										className='mt-2 hidden md:block'
										src={isNavigate ? navLogoDark : navLogoLight}
										alt='delighted pics logo'
									/>
								</Link>
								<div className='hidden md:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={`/${item.link}`}
												className={classNames(
													isNavigate
														? 'text-gray-900'
														: 'text-white hover:bg-gray-700 hover:text-white',
													'block px-3 py-2 rounded-md text-base font-medium'
												)}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								{/* user cart */}
								<Link to='/checkout'>
									<button
										type='button'
										className='bg-gray-800 p-1 mr-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
									>
										<span className='sr-only'>View notifications</span>
										<ShoppingBagIcon className='h-6 w-6' aria-hidden='true' />
									</button>
								</Link>
								{/* Profile dropdown */}
								<Menu as='div' className='ml-3 relative'>
									<div>
										{/* login button */}
										{!currentUser && (
											<Link to='/login'>
												<button className='text-gray-300 hover:text-white font-medium text-sm'>
													Login
												</button>
											</Link>
										)}
										{/* signed in user show*/}
										{currentUser && (
											<Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
												<span className='sr-only'>Open user menu</span>
												{/* user image */}
												{currentUser.photoURL && (
													<img
														className='w-11 rounded-full'
														src={currentUser.photoURL}
														alt='user'
													/>
												)}
												{!currentUser.photoURL && (
													<div className='p-1 text-white'>
														{currentUser.email}
													</div>
												)}
											</Menu.Button>
										)}
									</div>
									<Transition
										as={Fragment}
										enter='transition ease-out duration-100'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={logout}
														className={
															'block py-2 text-sm text-gray-700 w-full h-10'
														}
													>
														Sign out
													</button>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
					{/* menu for mobile device */}
					<Disclosure.Panel className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={`/${item.link}`}
									className={classNames(
										isNavigate
											? 'text-gray-900 hover:bg-gray-700 hover:text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
