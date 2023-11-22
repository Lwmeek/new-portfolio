import ColorMode from "./ColorMode";
import ExpandMenu from "./ExpandMenu";

export default function NavBar() {
	return (
		<div className="navbar bg-transparent rounded-box">
			<ColorMode />
			<div className="flex-1 px-2 lg:flex-none text-accent">
				<a className=" btn btn-ghost text-lg font-bold">DaisyUI</a>
			</div>
			<div className="flex items-stretch justify-end flex-1 px-2">
				<ExpandMenu />
			</div>
		</div>
	);
}
