import React, { ReactElement } from 'react';
import { Footer, Header } from '../components';

const InfoGroup = ({
	title,
	content,
}: {
	title: string;
	content: string;
}): ReactElement => {
	return (
		<div className="flex flex-col">
			<h4 className="text-blue-900 font-semibold text-xl">{title}</h4>
			<p className="text-blue-900 font-light text-lg">{content}</p>
		</div>
	);
};

const Privacy = () => {
	return (
		<section className="flex flex-col gap-6">
			<Header />

			<div className="p-10 flex flex-col gap-6">
				<h1 className="text-blue-900 text-3xl font-bold mt-[10rem]">
					We value your privacy
				</h1>

				<InfoGroup
					title="Control Description"
					content="Suresign’s users are required to explicitly accept the notice of privacy practices prior to entering information into the application."
				/>

				<InfoGroup
					title="Introduction"
					content="The Suresign Talkdiscovery platform for conversational automation goes beyond the borders of any one country. This globalization demands that our Machine Learning engine ingests unstructured customer calls and live chats that may contain multiple types of information. This Policy document sets forth the general principles that underlie Suresign’s specific practices for collecting, using, disclosing, storing, retaining, disposing, accessing, transferring, or otherwise processing any customer provided data ingested."
				/>

				<InfoGroup
					title="Applicability"
					content="This Policy applies to all Suresign personnel and (as transferred and agreed) with suppliers/business partners who must act consistently with the principles contained in the policy. Country and industry-specific laws and regulations shall take precedence over this policy, to the extent applicable. The application of these principles is more particularly described in the applicable Suresign Corporate Instructions (and any accompanying implementation Guidelines) relating to processing Personal Information. Please read this policy along with the company guidelines for use and processing of Personal Information to understand how Suresign plans to achieve the set principles."
				/>

				<InfoGroup
					title="Privacy Policy Statement"
					content="Suresign remains committed to protecting the privacy and confidentiality of Personal Information of its Employees (including prospects and contractors), Clients, Client Customers, Business Partners, and other identifiable individuals that it may receive, use, access, process, transfer or store as part of its business. Uniform practices for collecting, using, disclosing, storing, retaining, disposing, accessing, transferring, or otherwise processing such information assists Suresign to process Personal Information fairly and appropriately.
Suresign requires all data we collect from customers be redacted and anonymized of any Personal Information as part of the services we may render to them, or during its course of business. Nevertheless, and based on the information or data being collected and nature of services or requirements, Suresign will apply suitable mechanisms to ensure that Suresign has a lawful basis for receiving, accessing, using, processing, transferring, storing and/or disposing such personal information."
				/>

				<InfoGroup
					title="General Privacy Principles"
					content="These general principles apply to the processing of Personal Information world-wide by Suresign."
				/>

				<InfoGroup
					title="Accountability"
					content="Suresign understands its accountability and responsibility for any Personal Information that it may receive, use, process, store as part of its business. Accordingly, it will:"
				/>

				<ul className="list-decimal pl-4 text-blue-900 text-lg font-light flex flex-col gap-2">
					<li>
						have appropriate corporate instructions, guidelines and
						other measures to be able to demonstrate that Personal
						Information is used/ stored / processed / retained /
						disposed / transferred in compliance with applicable law
						and other applicable guidelines.
					</li>

					<li>
						designate an individual or individuals who are
						accountable for the organization’s compliance with the
						Privacy principles; and
					</li>

					<li>
						ensure the availability of required policies,
						procedures, and contacts for management of personal
						information; these being reviewed at a minimum annually
						or as and when there is a change warranted.
					</li>
				</ul>

				<InfoGroup
					title="Fairness and Purpose"
					content="When applicable, Suresign will collect adequate, relevant, and necessary Personal Information, and will process such information fairly and lawfully for the purpose it is collected. The purpose of collection will be specified not later than at the time of data collection, or on each occasion of change of purpose."
				/>

				<InfoGroup
					title="Accuracy"
					content="When applicable, Suresign will keep Personal Information as accurate, complete and up to date as is necessary for the purpose for which it is processed; and provide appropriate channels for the same."
				/>

				<InfoGroup
					title="Disclosure and Data Sharing"
					content="When applicable, Suresign will make Personal Information available inside or outside Suresign under appropriate circumstances for business purpose only or as authorized by law. In the event Suresign is required to transfer personal information to countries other than Suresign operation’s country of business (including transfer to other entities or third parties), Suresign will implement privacy principles for the use / processing/ transfer / storing/ disposal of personal information as may be prescribed under applicable laws."
				/>

				<InfoGroup
					title="Cross-Border Data Flows"
					content="When conducting business, working on Company projects, or implementing new processes or systems, an operation may require the transfer of personal information to other entities or third parties that are located outside of the Suresign operation’s country of business. While permissible data transfer mechanisms are defined by applicable law or regulation, examples include:"
				/>

				<ul className="list-decimal pl-4 text-blue-900 text-lg font-light flex flex-col gap-1">
					<li>
						a data transfer agreement with the party who will access
						or obtain the personal information; or
					</li>

					<li>
						notice to and/or approval from a country’s local data
						protection authority; or
					</li>

					<li>
						notice to and/or consent from the individual whose data
						is to be transferred.
					</li>
				</ul>

				<InfoGroup
					title="Security"
					content="When applicable, Suresign will implement reasonable technical and organizational measures to safeguard Personal Information and instruct third parties processing Personal Information on behalf of Suresign to process and manage it in a manner which is consistent with Suresign standards (for Suresign owned information) or Suresign Client standards (for Client information), as may be applicable."
				/>

				<InfoGroup
					title="Access"
					content="When applicable, and upon request, Suresign will, within a reasonable time, manner, and in a readily intelligible form provide individuals appropriate access to Personal Information retained by Suresign. Suresign has the right to deny the request; however, the reasons of denial will be provided. Suresign will erase, rectify, complete, or amend the data pursuant to a justified request."
				/>

				<InfoGroup
					title="Retention and Disposal"
					content="When applicable, Suresign will retain Personal information in a form that permits identification for no longer than as necessary for the fulfilment of the stated purpose, and should be disposed thereafter in accordance with Suresign’s policy and supporting procedures concerning data retention and destruction."
				/>

				<InfoGroup
					title="Transparency"
					content="Suresign will be transparent, and make readily available to individuals, specific information related to management of Personal Information."
				/>

				<InfoGroup
					title="Custodianship"
					content="Suresign will follow appropriate policies and practices agreed with its clients for the safe handling of Personal Information that it processes on behalf of its clients."
				/>

				<InfoGroup
					title="Enforcement and Redressal"
					content="Suresign will provide appropriate robust mechanisms for assuring compliance with the Principles, and address grievance and / or provide recourse for individuals who are affected by non-compliance with the Principles."
				/>

				<p className="text-blue-900 font-light text-lg">
					Questions regarding this policy should be directed to
					Suresign via email to beta@suresign.com
				</p>

				<div className="w-[60%]">
					<div className="divider"></div>
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default Privacy;
