import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../utils/posts';

function AllPostsPage (props){
	return (
		<Fragment>
			<Head>
				<title>All My Posts</title>
				<meta name='description' content='Read through all my posts to learn more about NextJS and React.' />
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps (){
	const posts = getAllPosts();
	return {
		props: {
			posts
		}
	};
}

export default AllPostsPage;
