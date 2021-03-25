import Image from 'next/image';
import classes from './Hero.module.css';

function HeroComponent (){
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src='/images/picture.png' alt='An image showing Adam' width={400} height={400} />
			</div>
			<h1>Hi, I'm Adam</h1>
			<p>I blog about web development, especially fullstack frameworks, like NextJS.</p>
		</section>
	);
}

export default HeroComponent;
