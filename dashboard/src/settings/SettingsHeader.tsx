import { SubMenu, SubMenuEntry } from "../components/SubMenu";

export function SettingsHeader() {
    return <div className="lg:px-28 px-10 pt-6 border-gray-100 border-t-2 border-b-2">
        <div className="flex pb-8">
            <img className="rounded-full w-28 h-28 border-2 border-transparent hover:border-indigo-400"
                src="https://avatars.githubusercontent.com/u/5750?s=400&u=95c71e43d35f4b2f7ea95474f5058bb51986f556&v=4" alt="Andy Leverenz" />
            <div className="px-6 py-5">
                <p className="text-2xl text-gray-700 font-semibold leading-relaxed">Andy Leverenz</p>
                <p className="text-gray-500">andy@leverenz.com</p>
            </div>
        </div>
        <div className="px-4">
            <SubMenu menuEntries={
                [
                    {
                        title: 'Settings',
                        href: '/settings/#'
                    } as SubMenuEntry,
                    {
                        title: 'Usage',
                        href: '/settings/#usage'
                    } as SubMenuEntry,
                    {
                        title: 'Subscriptions',
                        href: '/settings/#subscriptions'
                    } as SubMenuEntry,
                    {
                        title: 'Teams',
                        href: '/settings/#teams'
                    } as SubMenuEntry,
                ]
            } />
        </div>
    </div>;
}