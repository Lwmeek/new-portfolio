export default function NavBar() {
	return (
		<div className="navbar bg-base-00">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
			</div>
			<div className="flex-none">
				<details className="dropdown dropdown-end">
					<summary className="m-1 btn btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-5 h-5 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</summary>
					<ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36">
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Work</a>
						</li>
					</ul>
				</details>
			</div>
		</div>
	);
}
