import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
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
	loading: boolean;
	latestSuggestion: number;
}

class AnimeSelect extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = { latestSuggestion: 1, suggestions: [], loading: false };
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
			<FormItem hasFeedback validateStatus={this.getStatus()}>
				<Select
					style={{ width: '100%' }}
					value={this.props.value ? this.props.value.name : undefined}
					showSearch
					showArrow={false}
					filterOption={false}
					onSearch={this.onSearch.bind(this)}
					onSelect={this.onSelect.bind(this)}
					notFoundContent={null}>
					{options}
				</Select>
			</FormItem>
		);
	}
	private getStatus() {
		if (this.state.loading) {
			return 'validating';
		}
		if (
			this.props.value &&
			this.props.alreadyChosenAnimes
				.map(anime => anime.id)
				.filter(id => id === this.props.value!.id).length > 1
		) {
			return 'warning';
		}
		return undefined;
	}
	private onSearch(value: string) {
		const currentSelection = this.state.latestSuggestion + 1;
		this.setState({
			loading: true,
			latestSuggestion: currentSelection
		}, () => {
			searchAnime(value).then(suggestions => {
				if (this.state.latestSuggestion === currentSelection) {
					this.setState({
						suggestions: suggestions || [],
						loading: false
					});
				}
			});

		});
	}
	private onSelect(value: SelectValue) {
		const chosenAnime = JSON.parse(value.toString());
		this.props.onSelect(chosenAnime);
	}
}

export default AnimeSelect;
