import { useBlockProps } from "@wordpress/block-editor";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./editor.scss";

export default function Edit() {
	const [emojiPickerActive, setEmojiPickerActive] = useState(false);

	return (
		<div {...useBlockProps()}>
			<div className="emoji-selector">
				<div className="selected-emoji">😊</div>
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
				<EmojiPicker className="emoji-picker-window" />
			) : (
				"not active"
			)}
		</div>
	);
}
