import React from 'react';
import { Layout } from '~/layouts';

const contact = () => {
	return (
		<div className="h-screen w-screen flex justify-center items-center text-base lg:text-lg gap-y-2 font-semibold dark:text-white">
			<Layout.Default>
				<div className="px-4 py-2 rounded-md border border-stone-600 w-fit  dark:bg-slate-900 bg-slate-300 bg-opacity-40 backdrop-blur-lg z-10">
					<p className=" ">Email : ankit0panchal@gmail.com</p>
					<p className="lg:self-center self-start">Phone : +91 99936 73521</p>
				</div>
			</Layout.Default>
		</div>
	);
};

export default contact;
