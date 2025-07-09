import SidebarHeader from "@/components/sidebar/SidebarHeader";
import SidebarBody from "@/components/sidebar/SidebarBody";

export default function SideBar(props:any) {
	return (
		<div className={`sidebar ${props.data.className}`}>
			<SidebarHeader data={props.data}></SidebarHeader>
			<SidebarBody data={props.data}></SidebarBody>
		</div>
	)
}