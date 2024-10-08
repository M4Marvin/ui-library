import getDesigns from "@/lib/get-designs";
import { use } from "react";

export function useDesigns() {
	const designsPromise = getDesigns();
	return use(designsPromise);
}
