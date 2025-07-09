const getIcon = async  (kind:string, name:string) => {
	let libary:any = {};
	let Icon;

	switch (kind) {
		case 'fa6': libary = await import ('react-icons/fa6'); break;
		case 'fa6': libary = await import ('react-icons/fa6'); break;
		case 'fa6': libary = await import ('react-icons/fa6'); break;
		case 'fa6': libary = await import ('react-icons/fa6'); break;
		case 'fa6': libary = await import ('react-icons/fa6'); break;
		case 'fa6': libary = await import ('react-icons/fa6'); break;
		case 'fa6': libary = await import ('react-icons/fa6'); break;
	}

	Icon = libary[name];
	return Icon
}
export {
	getIcon,
}