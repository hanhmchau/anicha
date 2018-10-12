import { Button, Col, Row } from 'antd';
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
	selections: Selection[][];
	onSelect: (challenge: Challenge, inputIndex: number, tierIndex: number) => void;
	onSelectAnime: (anime: Anime, inputIndex: number, tierIndex: number) => void;
	onSort: () => void;
}

class MultiTierBox extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
	}
	public render() {
		return (
			<div>
				<div>
					<Row>
						<Col span={2} offset={22}>
							<Button onClick={this.props.onSort} icon="sort-descending" size={'large'} />
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
						alreadyChosenChallenges={this.getChosenChallenges(index)}
					/>
				))}
			</div>
		);
	}
	private getChosenChallenges(index: number) {
		return this.props.selections[index].filter(sel => sel.challenge).map(sel => sel.challenge) as Challenge[];
	}
	// private getChosenAnimes(index: number): Anime[] {
	// 	return this.props.selections[index].filter(sel => sel.anime).map(sel => sel.anime) as Anime[];
	// }
}

export default MultiTierBox;
