import { Navbars, Logo, Hero, Trusted, Footer, Features } from "@components";
import React from "react";
import bin from "@assets/bin.png";

export default class Home extends React.Component {
	render() {
		console.log(bin);
		return (
			<>
				<div className="relative overflow-hidden bg-white">
					<div className="mx-auto max-w-7xl">
						<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
							<Logo />

							<Navbars />

							<Hero />
						</div>
					</div>
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<img
							className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
							src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
							alt=""
						/>
					</div>
				</div>
				<Trusted />
				<Features />
				<Footer />
			</>
		);
	}
}
