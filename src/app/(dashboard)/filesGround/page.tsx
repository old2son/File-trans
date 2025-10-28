export default function Page() {
	return (
		<div className="">
			<nav>
				<ul>
					<li>
						<a href="#">菜单项 1</a>
					</li>
					<li>
						<a href="#">菜单项 2</a>
					</li>
					<li>
						<a href="#">菜单项 3</a>
					</li>
				</ul>
			</nav>

			{/* 功能蛆 */}
			<ul className="">
				<li>
					<img src="" alt="" />
					<p>excel 转 pdf</p>
				</li>
				<li>功能蛆 2</li>
				<li>功能蛆 3</li>
			</ul>

			<div className="p-4 bg-gray-100 text-blue-500 sm:text-lg">Hello</div>

			<div className="text-base sm:text-lg md:text-xl lg:text-2xl">响应式字体</div>
		</div>
	);
}
