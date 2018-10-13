import * as React from 'react';
import ChallengeItem from './ChallengeItem';
import Anime from './models/anime';
import Challenge from './models/challenge';
import Difficulty from './models/difficulty';
import Selection from './models/selection';
import Tier from './models/tier';
import './styles/signupbox.css';

interface Props {
	tier: Tier;
	index: number;
	chosenDiff: Difficulty;
	selection: Selection[];
	alreadyChosenChallenges: Challenge[];
	alreadyChosenAnime: Anime[],
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
	onSetStatus: (completed: boolean, inputIndex: number, tierIndex: number) => void;
}

class TierBox extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
	}
	shouldComponentUpdate(nextProps: Readonly<Props>) {
		return this.props.selection !== nextProps.selection;
	}
	public render() {
						// tslint:disable:no-console
						console.log('rerendering the tier box')
		return (
			<div className="">
				<div>Tier {this.props.index + 1}</div>
				{this.props.selection.map((sel, index) => (
					<ChallengeItem
						key={index}
						selection={sel}
						index={index}
						onSelect={this.onSelect.bind(this)}
						allChallenges={this.props.tier.challenges}
						alreadyChosenChallenges={
							this.props.alreadyChosenChallenges
						}
						alreadyChosenAnime={this.props.alreadyChosenAnime}
						onSelectAnime={this.onSelectAnime.bind(this)}
						onSetStatus={this.onComplete.bind(this)}
					/>
				))}
			</div>
		);
	}
	private onComplete(completed: boolean, inputIndex: number) {
		this.props.onSetStatus(completed, inputIndex, this.props.index);
	}
	private onSelect(challenge: Challenge, inputIndex: number) {
		this.props.onSelect(challenge, inputIndex, this.props.index);
	}
	private onSelectAnime(anime: Anime, inputIndex: number) {
		this.props.onSelectAnime(anime, inputIndex, this.props.index);
	}
}

export default TierBox;
