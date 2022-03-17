import React from "react";
const Hero = () => {
	return (
		<main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
			<div className="sm:text-center lg:text-left">
				<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
					<span className="block ">Riski Meydiansyah</span>{" "}
					<span className="block text-2xl tracking-wide font-medium text-indigo-600">
						Front End React Developer
					</span>
				</h1>
				<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
					qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
					occaecat fugiat aliqua.
				</p>
				<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					<div className="shadow rounded-md">
						<a
							href="#"
							className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
						>
							Get started
						</a>
					</div>
					<div className="mt-3 sm:mt-0 sm:ml-3">
						<a
							href="#"
							className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
						>
							Resume
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
