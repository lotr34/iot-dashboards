import React from 'react';
import { HiX } from 'react-icons/hi';
import { links } from '../data';
import { useGlobalContext } from '../context';
import logo from '../assets/c.png'

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<div
			className={`transition-all  duration-500  fixed top-0 ${
				isSidebarOpen ? 'left-0' : '-left-64'
			}`}
		>
			<div className="flex h-screen overflow-y-auto flex-col bg-white  w-64 px-4 py-8 border-r min-h-screen relative">
				<button
					onClick={closeSidebar}
					className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
				>
					<HiX className="w-5 h-5" />
				</button>
				<div className='flex items-center'>
				<img alt='logo' src={logo} className='h-10'/>
				<h1 className='text-xl ml-4'>Control<span className='text-red-600'>ix</span></h1>
				</div>
				<div className="flex flex-col mt-6  justify-between flex-1">
					<nav className="text">
						{links.map((link, index) => {
							const { id, url, text, icon } = link;
							return (
								<a
									key={id}
									href={url}
									className={`capitalize flex items-center px-4 py-2 ${
										index === 0
											? 'bg-gray-200 text-gray-700'
											: null
									} ${
										index > 0
											? 'mt-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform'
											: null
									} rounded-md`}
								>
									{icon}
									<span className="mx-4 font-medium">
										{text}
									</span>
								</a>
							);
						})}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
