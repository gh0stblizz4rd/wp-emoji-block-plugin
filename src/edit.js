import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./editor.scss";

export default function Edit(props) {
	const [emojiPickerActive, setEmojiPickerActive] = useState(false);

	return (
		<div {...useBlockProps()}>
			<BlockControls>
				<AlignmentToolbar
					value={props.attributes.aligment}
					onChange={(newAligment) =>
						props.setAttributes({ alignment: newAligment })
					}
				></AlignmentToolbar>
			</BlockControls>
			<div
				className="emoji-selector"
				style={{ justifyContent: props.attributes.alignment }}
			>
				<div className="selected-emoji">{props.attributes.emoji}</div>
				<div className="emoji-edit-buttons-wrapper">
					<button
						className="choose-emoji emoji-edit-buttons"
						onClick={() => {
							if (emojiPickerActive) {
								setEmojiPickerActive(false);
							} else {
								setEmojiPickerActive(true);
							}
						}}
					>
						Choose emoji
					</button>
					<button
						className="remove-emoji emoji-edit-buttons"
						onClick={() => {
							props.setAttributes({ emoji: "😊" });
						}}
					>
						Remove chosen
					</button>
				</div>
			</div>
			{emojiPickerActive ? (
				<EmojiPicker
					className="emoji-picker-window"
					onEmojiClick={(choosenEmoji) => {
						props.setAttributes({ emoji: choosenEmoji.emoji });
						setEmojiPickerActive(false);
					}}
				/>
			) : (
				""
			)}
		</div>
	);
}
