import React from 'react';

const BetaThankYou = () => {
	return (
		<section className="flex flex-col gap-6">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-blue-900">
					Thanks for your interest in the Beta Program.
				</h1>

				<p className="text-xl font-light text-blue-900">
					Your application has been received and we will let you know
					when you are approved.
				</p>
			</div>

			<p className="text-xl font-light text-blue-900">Talk Soon!</p>
		</section>
	);
};

export default BetaThankYou;
