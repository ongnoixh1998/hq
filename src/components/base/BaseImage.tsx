import Image from "next/image";

export default function BaseImage(props:any) {
	return (
		<div className={`${props.data.className}`}>
			<Image src={props.data.src} alt={props.data.alt ? props.data.alt : ''} />
		</div>
	)
}