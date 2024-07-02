import { createRoot } from "react-dom/client";

document.querySelectorAll(".emoji-block-wrapper").forEach((blockWrapper) => {
	const blockDataDiv = blockWrapper.querySelector(".emoji-block-data");
	const blockRootDiv = blockWrapper.querySelector(".emoji-block-root");
	const blockData = JSON.parse(blockDataDiv.innerHTML);
	const blockRoot = createRoot(blockRootDiv);

	blockRoot.render(<EmojiBlock {...blockData} />);
});

function EmojiBlock(attributes) {
	return (
		<div
			className="emoji-block-frontend"
			style={{ textAlign: attributes.alignment }}
		>
			{attributes.emoji}
		</div>
	);
}
