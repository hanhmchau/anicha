import { Col, Row } from 'antd';
import * as React from 'react';
import AnimeSelect from './AnimeSelect';
import ChallengeSelect from './ChallengeSelect';
import Anime from './models/anime';
import Challenge from './models/challenge';
import Selection from './models/selection';
import './styles/signupbox.css';

interface Props {
	challenge?: Challenge;
	anime?: Anime;
	index: number;
	allChallenges: Challenge[];
	alreadyChosenChallenges: Challenge[];
	selection: Selection[];
	onSelect: (challenge: Challenge, inputIndex: number) => void;
	onSelectAnime: (anime: Anime, inputIndex: number) => void;
}

class ChallengeItem extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public render() {
		return (
			<Row gutter={48}>
				<Col span={10}>
					<ChallengeSelect 
						onSelect={this.onSelect.bind(this)}
						value={this.props.challenge}
						alreadyChosenChallenges={this.props.alreadyChosenChallenges}
						allChallenges={this.props.allChallenges}
					/>
				</Col>
				<Col span={10}>
					<AnimeSelect 
						onSelect={this.onSelectAnime.bind(this)}
						value={this.props.anime}
						alreadyChosenAnimes={[]}
					/>
				</Col>
			</Row>
		);
	}
	private onSelect(challenge: Challenge): void {
		this.props.onSelect(challenge, this.props.index);
	}
	private onSelectAnime(anime: Anime): void {
		this.props.onSelectAnime(anime, this.props.index);
	}
}

export default ChallengeItem;
