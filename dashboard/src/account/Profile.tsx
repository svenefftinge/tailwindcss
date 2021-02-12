import { SettingsPage } from "../components/SettingsPage";
import accountMenu from "./account-menu";

export default function Profile() {
    return <div>
        <SettingsPage title='Account' subtitle='Profile details' menuEntries={accountMenu}>
            <div className="lg:px-28 px-10 flex pt-10">
                Profile
            </div>
        </SettingsPage>
    </div>;
}
