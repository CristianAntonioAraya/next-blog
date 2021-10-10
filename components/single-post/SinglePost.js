import style from "../../styles/components/posts/single-post.module.scss";
import Link from "next/link";

export const SinglePost = ({ title, id, body }) => {
	return (
		<Link href={`/posts/${id}`}>
			<a>
				<div className={style.container}>
					<div className={style.title}>
						<p>{title}</p>
						<p>{id}</p>
					</div>
					<p> {body}</p>
				</div>
			</a>
		</Link>
	);
};
