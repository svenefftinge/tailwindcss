import Menu from "../../components/Menu"
import { SubMenu } from "../../components/SubMenu"
import { ThirdMenu } from "../../components/ThirdMenu"
import { settingsMenu, TopMenuEntries } from "../../menu-map";
import { useRouter } from 'next/router';

interface Props {
    children: JSX.Element
}

export default ({ children }: Props) => {
    const currentPath = useRouter().pathname.toLowerCase();
    const currentSettings = settingsMenu.find(s => currentPath === s.link || (s.sub && s.sub.some(e => e.link === currentPath)));
    return <div>
        <Menu entries={TopMenuEntries} />
        <div className="lg:px-28 px-10 pt-6 border-gray-100 border-t-2 border-b-2">
            <div className="flex pb-8">
                <img className="rounded-full w-28 h-28 border-2 border-transparent hover:border-indigo-400"
                    src="https://avatars.githubusercontent.com/u/5750?s=400&u=95c71e43d35f4b2f7ea95474f5058bb51986f556&v=4" alt="Andy Leverenz"/>
                <div className="px-6 py-5">
                    <p className="text-2xl text-gray-700 font-semibold leading-relaxed">Andy Leverenz</p>
                    <p className="text-gray-500">andy@leverenz.com</p>
                </div>
            </div>
            <div>
                <SubMenu menuEntries={settingsMenu} />
            </div>
        </div>
        <div className="lg:px-28 px-10 flex pt-10 space-x-5">
            {currentSettings?.sub ? <ThirdMenu entries={currentSettings?.sub} /> : null}
            <div className="px-5 py-3 bg-gray-100 rounded-lg w-full">
                {children}
            </div>
        </div>
    </div>;
}