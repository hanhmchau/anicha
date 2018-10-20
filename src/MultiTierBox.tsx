import { Button, Checkbox, Col, Divider, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import FormItem from 'antd/lib/form/FormItem';
import * as React from 'react';
import { tier } from './consts';
import Anime from './models/anime';
import Challenge from './models/challenge';
import Difficulty from './models/difficulty';
import Selection from './models/selection';
import './styles/signupbox.css';
import TierBox from './TierBox';

interface Props {
	chosenDiff: Difficulty;
	checkAll: boolean;
	isAllDisabled: boolean;
	indeterminate: boolean;
	selections: Selection[][];
	onSelect: (
		challenge: Challenge,
		inputIndex: number,
		tierIndex: number
	) => void;
	onSelectAnime: (
		anime: Anime,
		inputIndex: number,
		tierIndex: number
	) => void;
	onSort: () => void;
	onSetStatus: (
		completed: boolean,
		inputIndex: number,
		tierIndex: number
	) => void;
	onCheckAll: (checked: boolean) => void;
}

class MultiTierBox extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
	}
	shouldComponentUpdate(nextProps: Readonly<Props>) {
		return this.props.selections !== nextProps.selections;
	}
	public render() {
		return (
			<div>
				<Divider />
				<div>
					<Row gutter={48}>
						<Col span={1} offset={20}>
							<FormItem>
								<Checkbox
									indeterminate={this.props.indeterminate}
									disabled={this.props.isAllDisabled}
									onChange={(e: CheckboxChangeEvent) =>
										this.props.onCheckAll(e.target.checked)
									}
									checked={this.props.checkAll}
								/>
							</FormItem>
						</Col>
						<Col span={1} offset={1}>
							<Button
								onClick={this.props.onSort}
								icon="sort-descending"
								size={'large'}
							/>
						</Col>
					</Row>
				</div>
				{tier.map((t, index) => (
					<TierBox
						onSelectAnime={this.props.onSelectAnime}
						onSelect={this.props.onSelect}
						key={index}
						chosenDiff={this.props.chosenDiff}
						tier={t}
						index={index}
						selection={this.props.selections[index]}
						alreadyChosenChallenges={this.getChosenChallenges(
							index
						)}
						alreadyChosenAnime={this.getChosenAnimes()}
						onSetStatus={this.props.onSetStatus}
					/>
				))}
			</div>
		);
	}
	private getChosenChallenges(index: number) {
		return this.props.selections[index]
			.filter(sel => sel.challenge)
			.map(sel => sel.challenge) as Challenge[];
	}
	private getChosenAnimes(): Anime[] {
		const flattenedSelection = [].concat.apply(
			[],
			this.props.selections
		) as Selection[];
		return flattenedSelection
			.filter(sel => sel.anime)
			.map(sel => sel.anime) as Anime[];
	}
}

export default MultiTierBox;
