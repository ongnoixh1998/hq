import {getIcon} from "@/components/ultility/Ultility";

export default async function BaseIcon(props:any) {
	const  Icon = await getIcon(props.data.library, props.data.icon)
	return (
		<>
			<Icon className={`${props.data.className}`} size={props.data.size ? props.data.size : 40}/>
		</>
	)
}