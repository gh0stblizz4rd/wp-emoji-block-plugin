import { useBlockProps } from "@wordpress/block-editor";
import EmojiPicker from "emoji-picker-react";
import "./editor.scss";

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div className="emoji-selector">
				<div className="selected-emoji">😊</div>
				<div className="emoji-edit-buttons-wrapper">
					<button className="choose-emoji emoji-edit-buttons">
						Choose emoji
					</button>
					<button className="remove-emoji emoji-edit-buttons">
						Remove chosen
					</button>
				</div>
			</div>
			{/* <EmojiPicker /> */}
		</div>
	);
}
