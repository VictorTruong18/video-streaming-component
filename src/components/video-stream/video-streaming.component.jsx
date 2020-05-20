import React from "react";
import { Component } from "react";

import Hls from "hls.js";



class Player extends Component {


	constructor(props){
		super(props)

		this.state = {
			url : this.props.url,
			widthChoice : this.props.widthChoice,
			heightChoice : this.props.heightChoice,
			autoPlay : this.props.autoPlay,
			backgroundColor: this.props.backgroundColor


		}
		

	}
	

	componentDidMount() {

	
		const streamURL = this.state.url;
		const video = this.player;
		const hls = new Hls();

		if (Hls.isSupported() && this.player) {
			hls.loadSource(streamURL);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			});
		}
	}

	render() {
		const style = {
			width: this.state.widthChoice,
			height: this.state.heightChoice,
			background: this.state.backgroundColor,
		};

		return (
			<div>
				<video
					controls={true}
					style={style}
					ref={(player) => (this.player = player)}
					autoPlay={this.state.autoPlay}
				>
					{" "}
				</video>
			</div>
		);
	}
}

export default Player;
