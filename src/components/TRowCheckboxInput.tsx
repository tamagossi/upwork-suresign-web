import { FC, ReactElement } from 'react';

type TRowCheckboxInputProps = { label: string };

const TRowCheckboxInput: FC<TRowCheckboxInputProps> = ({
	label,
}): ReactElement => {
	const name = label.replace(/ /g, '_').toLowerCase();

	return (
		<tr>
			<td>{label}</td>

			<td className="">
				<div className="flex justify-center w-100 p-3">
					<input
						className="w-6 h-6 border-blue-900 rounded-xl"
						type="checkbox"
						name={name}
						value="very_important"
					/>
				</div>
			</td>

			<td className="">
				<div className="flex justify-center w-100 p-3">
					<input
						className="w-6 h-6 border-blue-900 rounded-xl"
						type="checkbox"
						name={name}
						value="nice_to_have"
					/>
				</div>
			</td>
		</tr>
	);
};

export default TRowCheckboxInput;
