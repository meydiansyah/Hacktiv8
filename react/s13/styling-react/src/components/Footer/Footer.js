import { Container } from "react-bootstrap";
import {
	FaFacebook,
	FaGoogle,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaTwitter,
} from "react-icons/fa";

const Footer = (props) => {
	return (
		<div className="bg-dark text-center text-white">
			<Container className="p-4 pb-0">
				<div style={{ marginBottom: "1rem" }}>
					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<FaFacebook />
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<FaTwitter />
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<FaGoogle />
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<FaInstagram />
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<FaLinkedin />
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<FaGithub />
					</a>
				</div>
			</Container>
			<div
				className="text-center p-3"
				style={{ backgroundColor: "black" }}
			>
				© 2022 Copyright Bindev.com
			</div>
		</div>
	);
};

export default Footer;
