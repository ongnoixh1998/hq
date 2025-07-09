import {memo} from "react";
import BaseRow from "@/components/base/BaseRow";
import SideBar from "@/components/sidebar/SideBar";
import BaseIcon from "@/components/base/BaseIcon";
import BaseImage from "@/components/base/BaseImage";
import BaseSpan from "@/components/base/BaseSpan";
import BaseContainer from "@/components/base/BaseContainer";

interface Props {
	data?: any,
	path: string
}
const Components:any = {
	'Container':BaseContainer,
	'Row':BaseRow,
	'Sidebar':SideBar,
	'Icon':BaseIcon,
	'Image':BaseImage,
	'Span':BaseSpan,
}
export default memo(function BaseElement(props:any) {
	const WithElement = (data?:any) => {
		if (!data)return null;

		const El = Components[data.type];
		const children = data.children?.map((child:any, idx:number) => {
			return BaseElement({data: child, path: props.path + '.children[' + idx +']'})
		});

		return (
			<El {...{data: data, path: props.path}} key={props.path}>
				{children}
			</El>
		);
	}

	return WithElement(props.data);
})