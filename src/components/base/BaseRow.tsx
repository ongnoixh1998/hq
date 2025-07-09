export default function BaseRow(props:any) {
	return (
		<div className={`${props.data.className}`}>
			{props.children}
		</div>
	)
}