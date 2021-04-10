import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';

function Search() {
	return (
		<div>
			<Head>
				<title>Your Tem - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SearchHeader />
		</div>
	)
};

export default Search;
