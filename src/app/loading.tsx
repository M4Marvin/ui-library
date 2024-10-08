import PyramidLoader from "@/components/pyramid-loader";
import React from "react";// Adjust the import path as needed

export default function Loader() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-80 z-50">
			<div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
				<PyramidLoader />
				<p className="mt-4 text-lg font-semibold text-center text-gray-700 dark:text-gray-300">
					Loading...
				</p>
			</div>
		</div>
	);
}
