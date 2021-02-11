import { useContext } from "react";
import { SubMenu } from "../components/SubMenu";
import { ServiceContext } from "../service/service";

const subMenu = [
    {
        title: 'Settings',
        link: '/settings'
    },
    {
        title: 'Usage',
        link: '/usage'
    },
    {
        title: 'Subscriptions',
        link: '/subscriptions'
    },
    {
        title: 'Teams',
        link: '/teams'
    },
];

export function SettingsHeader() {
    const ctx = useContext(ServiceContext);
    
    return <div className="lg:px-28 px-10 pt-6 border-gray-100 border-t-2 border-b-2">
        <div className="flex pb-8">
            <img className="rounded-full w-28 h-28 border-2 border-transparent hover:border-indigo-400"
                src={ctx.getUser().avatarUrl} alt={ctx.getUser().name} />
            <div className="px-6 py-5">
                <p className="text-2xl text-gray-700 font-semibold leading-relaxed">{ctx.getUser().name}</p>
                <p className="text-gray-500">{ctx.getUser().email}</p>
            </div>
        </div>
        <div className="px-4">
            <SubMenu menuEntries={
                subMenu
            } />
        </div>
    </div>;
}