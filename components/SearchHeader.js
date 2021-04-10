import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { XIcon } from '@heroicons/react/solid';
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from './Avatar';
import SearchHeaderOptions from './SearchHeaderOptions';

function SearchHeader() {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const search = (e) => {
		e.preventDefault()
		const term = searchInputRef.current.value;
		if (!term) return;
		router.push(`/search?term=${term}`)
		searchInputRef.current.value = "";
	};
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image 
					src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					height={40}
					width={120}
					onClick={() => router.push('/')}
					className="cursor-pointer"
				/>
				<form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
					<input 
						ref={searchInputRef} 
						type="text" 
						className="flex-grow w-full focus:outline-none" 
						placeholder="Search Google"
					/>
					<XIcon 
						className="sm:mr-3 cursor-pointer h-7 text-gray-500 transition duration-100 transform hover:scale-125"
						onClick={() => {
							searchInputRef.current.value = ""
						}}
					/>
					<MicrophoneIcon 
						className="cursor-pointer mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
					/>
					<SearchIcon 
						className="h-6 text-blue-500 hidden sm:inline-flex"
					/>
					<button hidden onClick={search} type="submit">
						Search
					</button>
				</form>
				<Avatar 
					url="https://avatars.githubusercontent.com/u/70377522?v=4"
					className="ml-auto"
				/>
			</div>
			<SearchHeaderOptions />
		</header>
	)
};

export default SearchHeader;
