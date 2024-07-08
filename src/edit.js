import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	BlockToolbar,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./editor.scss";

export default function Edit(props) {
	const [emojiPickerActive, setEmojiPickerActive] = useState(false);

	function toggleState(currentState, updateState) {
		updateState((currentState) => !currentState);
	}

	return (
		<div {...useBlockProps()}>
			<BlockControls>
				<AlignmentToolbar
					value={props.attributes.aligment}
					onChange={(newAligment) =>
						props.setAttributes({ alignment: newAligment })
					}
				></AlignmentToolbar>
				<ToolbarGroup>
					<ToolbarButton
						icon="buddicons-activity"
						label="Choose Emoji"
						onClick={() => {
							toggleState(emojiPickerActive, setEmojiPickerActive);
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
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
			<div
				className="emoji-selector"
				style={{ justifyContent: props.attributes.alignment }}
			>
				<div className="selected-emoji">{props.attributes.emoji}</div>
			</div>
		</div>
	);
}
