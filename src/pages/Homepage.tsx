import BG from '../assets/suresign-bg.png';
import Logo from '../assets/suresign-logo.png';
import {
	TextInputGroup,
	SelectInputGroup,
	TRowCheckboxInput,
	Footer,
	Header,
} from '../components';

const Homepage = () => {
	return (
		<>
			<section
				className="relative w-100 h-[120vh] bg-no-repeat bg-center bg-cover"
				style={{ backgroundImage: `url(${BG})` }}
			>
				<Header />

				<div className="relative flex justify-end w-[100%]">
					<div className="absolute left-0 top-[500px] bg-sky-400 opacity-70 w-[60%] h-[250px]"></div>

					<div className="absolute left-0 top-[510px] w-[60%] flex flex-col gap-5 p-10 text-white text-xl leading-6">
						<p>
							<strong>
								Introducing our revolutionary new electric
								document signing application designed for
								Realtors & Closers!
							</strong>{' '}
							<span className="font-light">
								With our user-friendly platform, signing
								documents has never been easier. Plus, our
								advanced security measures ensure your sensitive
								information is protected at all times.
							</span>
						</p>

						<strong>
							Join the future of real estate document signing.
						</strong>
					</div>
				</div>
			</section>

			<div className="flex flex-col gap-10 p-10 w-[60%]">
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl font-bold text-blue-900">
						We’re looking for people just like you. <br />
						Join our Beta Test Group.
					</h1>

					<p className="text-xl font-light text-blue-900">
						As we continue to develop the best document signing
						platform for the Real Estate industry, we are looking
						for listing agent partners, like you, to join our Beta
						Program of our first release. Simply fill out the form
						below and we will be in touch about your application.
					</p>
				</div>

				<section className="flex flex-col gap-4">
					<div className="divider"></div>

					<h1 className="text-2xl font-bold text-blue-900">
						Application for Beta Program
					</h1>

					<form className="flex flex-col gap-5" action="">
						<TextInputGroup
							name="company"
							placeholder="Company"
							label="Company Name / Realtor Name"
						/>

						<TextInputGroup
							name="contact-person"
							placeholder="Contact Person"
							label="Primary Contact Person"
						/>

						<TextInputGroup
							name="email"
							placeholder="Email Address"
							label="Email Address"
						/>

						<TextInputGroup name="phone" label="Phone Number">
							<div className="flex border border-blue-900 rounded-lg block w-[50%] ">
								<div className="flex pl-2.5 py-2.5">
									<p>(</p>
									<input
										className="w-10 "
										placeholder="+1"
										name="country_code"
										type="text"
									/>
									<p>)</p>
								</div>

								<input className="w-full m-0.5" type="text" />
							</div>
						</TextInputGroup>

						<div className="flex justify-between w-[50%]">
							<SelectInputGroup
								label="Years in Business"
								name="years_in_bussiness"
								options={[
									{
										value: 'lt-1',
										label: 'Less than 1',
									},
									{
										value: '1-2',
										label: '1-2 years',
									},
									{
										value: '3-5',
										label: '3-5 years',
									},
									{
										value: '5+',
										label: '5+ years',
									},
								]}
							/>

							<SelectInputGroup
								label="Size of brokerage/company"
								name="size_of_company"
								options={[
									{
										value: '1',
										label: `1 (it's just me)`,
									},
									{
										value: '2-10',
										label: '2-10',
									},
									{
										value: '11-49',
										label: '11-49',
									},
									{
										value: '50+',
										label: '50+',
									},
								]}
							/>
						</div>

						<button
							className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg w-40"
							type="submit"
						>
							Apply Now
						</button>
					</form>
				</section>

				<section className="flex flex-col gap-7">
					<div className="mt-10 divider"></div>

					<div className="flex flex-col gap-4">
						<h1 className="text-3xl font-bold text-blue-900">
							Help shape the future
						</h1>

						<h1 className="text-xl font-light text-blue-900">
							We aim to create the best document signing platform
							for the Real Estate industry. To do so, we need to
							hear from you, the experts in the field every day.
							<br />
							<br />
							Please tell us which of the following features are{' '}
							<strong className="font-bold">
								most important to you:
							</strong>
						</h1>
					</div>

					<form action="" className="flex flex-col gap-6">
						<table className="text-blue-900">
							<thead className="border-b-2 border-gray-200">
								<tr>
									<th></th>
									<th className="text-lg font-bold p-3">
										Very Important
									</th>
									<th className="text-lg font-bold p-3">
										Nice to Have
									</th>
								</tr>
							</thead>

							<tbody className="font-light">
								<TRowCheckboxInput label="Send documents via secure link" />
								<TRowCheckboxInput label="Add fillable fields to PDF documents" />
								<TRowCheckboxInput label="Demo templates" />
								<TRowCheckboxInput label="Enterprise-level QES Security" />
								<TRowCheckboxInput label="Roles setup in the editor" />
								<TRowCheckboxInput label="Require recipients to draw/upload a signature" />
								<TRowCheckboxInput label="Ability to merge documents into a single PDF" />
								<TRowCheckboxInput label="Ability to merge documents into a single PDF" />
								<TRowCheckboxInput label="Option for video and/or live notary" />
								<TRowCheckboxInput label="Require recipients to draw/upload a signature" />
							</tbody>
						</table>

						<div className="flex flex-col gap-2 mt-2">
							<label
								htmlFor="notes"
								className="text-blue-900 font-light"
							>
								Something else you'd like to see?
							</label>

							<textarea
								className="border border-blue-900 rounded-lg block w-[80%] p-2.5"
								name="notes"
								cols={10}
								rows={5}
							/>
						</div>

						<button
							className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg w-40"
							type="submit"
						>
							Submit
						</button>
					</form>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default Homepage;
