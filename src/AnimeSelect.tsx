import { Select } from 'antd';
import { SelectValue } from 'antd/lib/select';
import * as React from 'react';
import Anime from './models/anime';
import { searchAnime } from './services/anime.service';
import './styles/signupbox.css';

interface Props {
	onSelect: (anime: Anime) => void;
	value?: Anime;
	alreadyChosenAnimes: Anime[];
}

interface State {
	suggestions: Anime[];
}

class AnimeSelect extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			suggestions: []
		};
	}
	public render() {
		const options = this.state.suggestions.map(sug => (
			<Select.Option key={sug.name} value={JSON.stringify(sug)}>
				<div className="anime-suggestion">
					<div
						className="cover-image"
						style={{
							background: `url(${sug.coverImage})`
						}}
					/>
					<div className="title">
						<div className="romaji">{sug.name}</div>
						<div className="english">{sug.english}</div>
					</div>
				</div>
			</Select.Option>
		));
		return (
			<Select
				style={{
					width: '100%'
				}}
				value={this.props.value ? this.props.value.name : undefined}
				showSearch
				showArrow={false}
				filterOption={false}
				onSearch={this.onSearch.bind(this)}
				onSelect={this.onSelect.bind(this)}
			>
				{options}
			</Select>
		);
	}
	private onSearch(value: string) {
		searchAnime(value).then(suggestions =>
			this.setState({
				suggestions
			})
		);
	}
	private onSelect(value: SelectValue) {
		const chosenAnime = JSON.parse(value.toString());
		this.props.onSelect(chosenAnime);
	}
}

export default AnimeSelect;
