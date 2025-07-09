import BaseElement from "@/components/base/BaseElement";

export default function AdminPage() {
    const pageDefinition = {
        id:'Root',
        type:'Container',
        className: 'w-full h-full bg-palette-primary-dark p-2',
        children: [
            {
                id: 'Sidebar',
                type: 'Sidebar',
                className: 'fixed top-0 left-0 w-[300px] h-full bg-palette-primary-dark p-2',
                logo: './logo/logo.svg',
                categories: [
                    {
                        category: 'Dashboard',
                        name: 'Dashboard',
                        href: '/dashboard',
                        iconKind: 'fa6',
                        iconName: '',
                        items: [
                            {
                                itemname: 'Dashboard',
                                href: '/admin/dashboard',
                                iconKind: 'fa6',
                                iconName: '',
                            }
                        ]
                    },
                    {
                        category: 'Order',
                        name: 'Order',
                        href: '/admin/order',
                        iconKind: 'fa6',
                        iconName: '',
                        items: [
                            {
                                itemname: 'Order',
                                href: '/admin/order',
                                iconKind: 'fa6',
                                iconName: '',
                            },
                            {
                                itemname: 'Invoice',
                                href: '/admin/invoice',
                                iconKind: 'fa6',
                                iconName: '',
                            }
                        ]
                    }
                ]
            },
            {
                id:'Content',
                type:'Container',
                className: 'pl-[300px] h-full w-full bg-palette-800',
            }
        ]
    }
    return (
        <BaseElement data={pageDefinition}/>
    )
}