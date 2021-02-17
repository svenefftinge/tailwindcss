import { useContext } from "react";
import { SettingsPage } from "../components/SettingsPage";
import Text from "../components/Text";
import { ServiceContext } from "../service/service";
import accountMenu from "./account-menu";

export default function Profile() {
    const ctx = useContext(ServiceContext);
    return <div>
        <SettingsPage title='Account' subtitle='Profile details' menuEntries={accountMenu}>
            <h3 className="pb-6">Personal Information</h3>
            <div className="flex flex-row">
                <div>
                    <h4>Name</h4>
                    <Text value="John Doe"/>
                    <h4 className="pt-6">Email</h4>
                    <Text value="jsmith@example.com"/>
                </div>
                <div className="pl-14">
                    <h4>Avatar</h4>
                    <img className="rounded-full w-24 h-24 border-2 border-transparent hover:border-indigo-400"
                        src={ctx.getUser().avatarUrl} alt={ctx.getUser().name} />
                </div>
            </div>
            <h3 className="pt-14 pb-2">Delete Account</h3>
            <p className="text-sm text-gray-400 pb-4">This action will remove all the data associated with your account in Gitpod.</p>
            <input type="button" value="Delete Account" className="px-3 py-2 text-white text-xs rounded-md border-2 border-red-900 bg-red-500"/> 
        </SettingsPage>
    </div>;
}
