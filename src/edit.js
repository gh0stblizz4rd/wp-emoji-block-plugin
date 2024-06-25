import { useBlockProps } from "@wordpress/block-editor";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./editor.scss";

export default function Edit(props) {
	console.log(props);
	const [emojiPickerActive, setEmojiPickerActive] = useState(false);

	return (
		<div {...useBlockProps()}>
			<div className="emoji-selector">
				<div className="selected-emoji">{props.attributes.emoji}</div>
				<div className="emoji-edit-buttons-wrapper">
					<button
						className="choose-emoji emoji-edit-buttons"
						onClick={() => {
							setEmojiPickerActive(true);
						}}
					>
						Choose emoji
					</button>
					<button className="remove-emoji emoji-edit-buttons">
						Remove chosen
					</button>
				</div>
			</div>
			{emojiPickerActive ? (
				<EmojiPicker
					className="emoji-picker-window"
					onEmojiClick={(choosenEmoji) => {
						props.setAttributes({ emoji: choosenEmoji.emoji });
					}}
				/>
			) : (
				"not active"
			)}
		</div>
	);
}
