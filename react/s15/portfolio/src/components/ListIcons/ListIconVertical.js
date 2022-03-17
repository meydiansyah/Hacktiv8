import { motion } from "framer-motion";
import ListIcons from "./ListIcons";

const ListIconVertical = () => (
	<div className="socialIcons">
		<motion.div
			initial={{
				y: 250,
			}}
			animate={{
				y: 0,
			}}
			transition={{
				type: "spring",
				stiffness: 100,
				duration: 0.5,
			}}
			className="d-flex flex-column"
		>
			{ListIcons.map((data, i) => {
				return (
					<a
						key={i}
						href={data.url}
						className={`my-2 border btn ${data.class}`}
					>
						{data.icon}
					</a>
				);
			})}
		</motion.div>
	</div>
);

export default ListIconVertical;
