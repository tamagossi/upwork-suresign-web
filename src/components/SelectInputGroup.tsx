import React, { FC, ReactElement } from 'react';

type SelectType = {
	label: string;
	value: string | number | readonly string[] | undefined;
};

type SelectInputGroupProps = {
	label: string;
	name: string;
	placeholder?: string;
	options: SelectType[];
};

const SelectInputGroup: FC<SelectInputGroupProps> = ({
	label,
	name,
	options,
	placeholder,
}): ReactElement => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-lg font-light text-blue-900">
				{label}
			</label>

			<select
				className="border border-blue-900 rounded-lg block p-2.5"
				name={name}
				placeholder={placeholder}
			>
				{options.map((opt: SelectType) => {
					return <option value={opt.value}>{opt.label}</option>;
				})}
			</select>
		</div>
	);
};

export default SelectInputGroup;
