import { Fragment } from 'react';
import Head from 'next/head';

import { Hero, FeaturedPosts } from '../components/HomePage';
import { getFeaturedPosts } from '../utils/posts';

function HomePage (props){
	return (
		<Fragment>
			<Head>
				<title>Adam Dreszer's Blog</title>
				<meta name='description' content='I post about programming and webdevelopment. NextJS and React mostly!' />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps (){
	const posts = getFeaturedPosts();
	return {
		props: {
			posts
		}
	};
}

export default HomePage;
