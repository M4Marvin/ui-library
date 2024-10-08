import "@/styles/pyramid-loader.css";

export default function PyramidLoader() {
	return (
		<div className="pyramid-loader">
			<div className="wrapper">
				<span className="side side1"/>
				<span className="side side2"/>
				<span className="side side3"/>
				<span className="side side4"/>
				<span className="shadow"/>
			</div>
		</div>
	);
}
