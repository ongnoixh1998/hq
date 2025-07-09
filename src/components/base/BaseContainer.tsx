export default function BaseContainer(props:any) {
	return (
		<div className={`${props.data.className}`}>
			{props.children}
		</div>
	)
}