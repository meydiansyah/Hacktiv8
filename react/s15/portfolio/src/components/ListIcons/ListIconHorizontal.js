import ListIcons from "./ListIcons";

const ListIconHorizontal = () => (
	<div className="my-4 socialIcons-hor">
		{ListIcons.map((data, i) => {
			return (
				<a
					href={data.url}
					key={i}
					className={`m-2 border btn ${data.class}`}
				>
					{data.icon}
				</a>
			);
		})}
	</div>
);

export default ListIconHorizontal;
