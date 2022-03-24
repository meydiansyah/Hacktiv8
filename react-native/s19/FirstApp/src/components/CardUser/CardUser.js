import { Avatar, Card, IconButton } from "react-native-paper";

const CardUser = (props) => {
	return (
		<Card.Title
			title={
				props.data.name.title +
				" " +
				props.data.name.first +
				" " +
				props.data.name.last
			}
			subtitle={props.data.email}
			left={(prop) => (
				<Avatar.Image {...prop} source={{uri: props.data.picture.medium}} />
			)}
		/>
	);
};

export default CardUser;
