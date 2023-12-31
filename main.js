const {
	app,
	BrowserWindow,
	globalShortcut,
	Menu,
	MenuItem,
	screen,
} = require("electron");
// app，它着您应用程序的事件生命周期。
// BrowserWindow，它负责创建和管理应用窗口。

// createWindow 函数用于创建一个应用窗口
const createWindow = () => {
	const win = new BrowserWindow({
		// 设置宽高
		width: 800,
		height: 600,
		titleBarStyle: "customButtonsOnHover",
		// 失去焦点的时候隐藏窗口
		// hiddenInMissionControl:true,
		// vibrancy: "sheet",
		show: false,
	});
	win.once("ready-to-show", () => {
		win.show();
	});

	const menu = new Menu();
	menu.append(
		new MenuItem(
			{
				label: "Mermaid-Flow",
				submenu: [
					{
						role: "Quit",
						accelerator:
							process.platform === "darwin" ? "Cmd+Q" : "Alt+Shift+Q",
						click: () => {
							console.log("Electron rocks!");
						},
					},
					{
						role: "Hide",
						accelerator:
							process.platform === "darwin" ? "Cmd+W" : "Alt+Shift+W",
						click: () => {
							console.log("Electron rocks!");
						},
					},
					{
						role: "Zoom",
						accelerator:
							process.platform === "darwin" ? "Cmd+F" : "Alt+Shift+F",
						click: () => {
							console.log("Electron rocks!");
						},
					},
					{
						role: "selectAll",
						accelerator: "Cmd+A",
						click: () => {},
					},
					{
						role: "copy",
						accelerator: "Cmd+C",
						click: () => {},
					},
					{
						role: "paste",
						accelerator: "Cmd+V",
						click: () => {},
					},
					{
						role: "undo",
						accelerator: "Cmd+Z",
						click: () => {},
					},
					{
						role: "redo",
						accelerator: "Cmd+Shift+Z",
						click: () => {},
					},
				],
			},
		)
	);
	Menu.setApplicationMenu(menu);

	// 加载网址
	win.loadURL(
		"https://excalidraw.com"
	);
};

// 在应用准备就绪时调用函数 创建窗口
app.whenReady().then(() => {
	createWindow();
});