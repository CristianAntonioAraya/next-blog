import Layout from "../../components/Layout";

const FirstPost = ({ data }) => {
	return (
		<Layout title={"this is the first post"}>
			<div>
				<div>
					<p>{data.id}</p>
					<p>{data.title}</p>
					<p>{data.body}</p>
				</div>
			</div>
		</Layout>
	);
};

export default FirstPost;

export async function getStaticPaths() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
		return {
			paths,
			fallback: false,
		};
	} catch (error) {
		console.log(error);
	}
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	const data = await res.json();
	return {
		props: { data },
	};
}
