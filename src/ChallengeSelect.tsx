import { Select, Tooltip } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { OptionProps, SelectValue } from 'antd/lib/select';
import * as React from 'react';
import Challenge from './models/challenge';
import './styles/signupbox.css';

interface Props {
	onSelect: (challenge: Challenge) => void;
	allChallenges: Challenge[];
	value?: Challenge;
	alreadyChosenChallenges: Challenge[];
}

class ChallengeSelect extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
	}
	public render() {
		let item = (
			<Select
				style={{
					width: '100%'
				}}
				onChange={this.onChange.bind(this)}
				value={this.props.value ? this.props.value.name : undefined}
				showSearch
				filterOption={(input, option) => this.matches(input, option)}>
				{this.getUnselectedChallenges.call(this)}
			</Select>
		);
		if (this.props.value && this.props.value.helptext) {
			item = <Tooltip title={this.props.value.helptext}>{item}</Tooltip>;
		}
		return <FormItem>{item}</FormItem>;
	}
	private getUnselectedChallenges() {
		return this.props.allChallenges
			.filter(cha => this.props.alreadyChosenChallenges.map(c => c.id).indexOf(cha.id) < 0)
			.map(sug => (
				<Select.Option key={sug.id} value={sug.id}>
					{sug.name}
				</Select.Option>
			));
	}
	private onChange(value: SelectValue) {
		const challenge = this.props.allChallenges.filter(
			cha => cha.id === value
		)[0];
		this.props.onSelect(challenge);
	}
	private matches(input: string, option: React.ReactElement<OptionProps>) {
		return (
			option.props.children &&
			option.props.children
				.toString()
				.toLowerCase()
				.indexOf(input.toLowerCase()) >= 0
		);
	}
}

export default ChallengeSelect;
