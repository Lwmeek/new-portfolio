import { BiMenuAltRight } from "react-icons/bi";



export default function NavBar() {
	return (
		<div className="navbar bg-transparent rounded-box">
			<div className="flex-1 px-2 lg:flex-none">
				<a className=" btn btn-ghost text-lg font-bold">DaisyUI</a>
			</div>
			<div className="flex items-stretch justify-end flex-1 px-2">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost rounded-btn text-4xl" >
						<BiMenuAltRight />
					</label>
					<ul
						tabIndex={0}
						className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
					>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Projects</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
