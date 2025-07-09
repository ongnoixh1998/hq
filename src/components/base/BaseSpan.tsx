export default function BaseSpan(props:any) {
	return (
		<span className={`${props.data.className}`}>
			{props.data.text}
			{props.children}
		</span>
	)
}