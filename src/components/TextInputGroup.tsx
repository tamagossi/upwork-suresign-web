import { FC, ReactElement, ReactNode } from 'react';

type TextInputGroupProps = {
	name: string;
	placeholder?: string;
	type?: string;
	label: string;
	children?: ReactNode;
};

const TextInputGroup: FC<TextInputGroupProps> = ({
	label,
	name,
	placeholder,
	children,
	type = 'text',
}): ReactElement => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-lg font-light text-blue-900">
				{label}
			</label>

			{children || (
				<input
					className="border border-blue-900 rounded-lg block w-full p-2.5"
					name={name}
					placeholder={placeholder}
					type={type}
				/>
			)}
		</div>
	);
};

export default TextInputGroup;
