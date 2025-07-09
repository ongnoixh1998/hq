import Image from "next/image";

export default function SidebarHeader(props:any) {
	return (
		<div className='sidebar-header flex justify-center'>
			<Image src={props.data.logo} width={80} height={100} alt={'HQ'}/>
		</div>
	)
}