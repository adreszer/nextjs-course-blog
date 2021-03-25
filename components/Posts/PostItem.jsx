import Link from 'next/link';
import Image from 'next/image';

import classes from './PostItem.module.css';

export default function PostItem (props){
	const { title, image, excert, date, slug } = props.post;
	const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<li className={classes.post}>
			<Link href={`/posts/${slug}`}>
				<a>
					<div className={classes.image}>
						<Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excert}</p>
					</div>
				</a>
			</Link>
		</li>
	);
}
