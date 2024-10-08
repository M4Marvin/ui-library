import fs from "node:fs/promises";
import path from "node:path";

async function getDesigns() {
	const designsDirectory = path.join(process.cwd(), "src/designs");
	const entries = await fs.readdir(designsDirectory, { withFileTypes: true });

	const designs = entries
		.filter((entry) => entry.isDirectory())
		.map((dir) => ({
			id: dir.name,
			title: dir.name
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" "),
		}));

	return designs;
}

export default getDesigns;
