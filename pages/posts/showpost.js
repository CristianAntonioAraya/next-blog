import Layout from "../../components/Layout";
import { SinglePost } from "../../components/single-post/SinglePost";
import styles from "../../styles/components/posts/show-post.module.scss";
import Link from "next/link";

const showpost = ({ data }) => {
	console.log(data);
	return (
		<Layout text="Show Post">
			<div className={styles.titleContainer}>
				<h3 className={styles.title}> Post </h3>
				<Link href="/">
					<a> Back to home </a>
				</Link>
			</div>
			<div className={styles.content}>
				{data.map(({ title, id, body }) => (
					<SinglePost key={id} title={title} id={id} body={body} />
				))}
			</div>
		</Layout>
	);
};

export default showpost;

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data },
	};
};
