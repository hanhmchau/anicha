import { Checkbox, Col, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import FormItem from 'antd/lib/form/FormItem';
import * as React from 'react';
import AnimeSelect from './AnimeSelect';
import ChallengeSelect from './ChallengeSelect';
import Anime from './models/anime';
import Challenge from './models/challenge';
import Selection from './models/selection';
import './styles/signupbox.css';

interface Props {
	index: number;
	allChallenges: Challenge[];
	alreadyChosenChallenges: Challenge[];
	alreadyChosenAnime: Anime[];
	selection: Selection;
	onSelect: (challenge: Challenge, inputIndex: number) => void;
	onSetStatus: (completed: boolean, inputIndex: number) => void;
	onSelectAnime: (anime: Anime, inputIndex: number) => void;
}

class ChallengeItem extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public render() {
		const { challenge, anime, completed } = { ...this.props.selection };
		return (
			<Row gutter={48} className="challenge-item">
				<Col span={10}>
					<ChallengeSelect
						onSelect={this.onSelect.bind(this)}
						value={challenge}
						alreadyChosenChallenges={
							this.props.alreadyChosenChallenges
						}
						allChallenges={this.props.allChallenges}
					/>
				</Col>
				<Col span={10}>
					<AnimeSelect
						onSelect={this.onSelectAnime.bind(this)}
						value={anime}
						alreadyChosenAnimes={this.props.alreadyChosenAnime}
					/>
				</Col>
				<Col span={2}>
					<FormItem>
						<Checkbox
							checked={challenge && anime && completed}
							disabled={!(anime && challenge)}
							onChange={this.onSetStatus.bind(this)}
						/>
					</FormItem>
				</Col>
			</Row>
		);
	}
	private onSetStatus(e: CheckboxChangeEvent): void {
		this.props.onSetStatus(e.target.checked, this.props.index);
	}
	private onSelect(challenge: Challenge): void {
		this.props.onSelect(challenge, this.props.index);
	}
	private onSelectAnime(anime: Anime): void {
		this.props.onSelectAnime(anime, this.props.index);
	}
}

export default ChallengeItem;
