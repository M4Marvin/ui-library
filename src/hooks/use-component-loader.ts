import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Define the error component as a function that returns a React component
const createErrorComponent = (message: string) => {
	return function ErrorComponent() {
		return {
			$$typeof: Symbol.for("react.element"),
			type: "div",
			props: {
				style: { color: "red", padding: "10px", border: "1px solid red" },
				children: `Error: ${message}`,
			},
			key: null,
		};
	};
};

export function useComponentLoader(componentId: string) {
	const [Component, setComponent] = useState<React.ComponentType | null>(null);
	const [ComponentDoc, setComponentDoc] = useState<React.ComponentType | null>(
		null,
	);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadComponent = async () => {
			const DynamicComponent = dynamic(() =>
				import(`@/designs/${componentId}/component.tsx`).catch((err) => {
					console.error("Failed to load component:", err);
					let errorMessage =
						"Failed to load component. Please try again later.";
					if (
						err instanceof Error &&
						err.message.includes("Cannot find module")
					) {
						errorMessage = `Component "${componentId}" not found. Please check the component name and try again.`;
					}
					setError(errorMessage);
					return createErrorComponent(errorMessage);
				}),
			);
			setComponent(() => DynamicComponent);
		};

		const loadDoc = async () => {
			const DynamicDoc = dynamic(() =>
				import(`@/designs/${componentId}/doc.mdx`).catch((err) => {
					console.error("Failed to load documentation:", err);
					return () => null;
				}),
			);
			setComponentDoc(() => DynamicDoc);
		};

		setIsLoading(true);
		Promise.all([loadComponent(), loadDoc()]).finally(() =>
			setIsLoading(false),
		);
	}, [componentId]);

	return { Component, ComponentDoc, error, isLoading };
}
