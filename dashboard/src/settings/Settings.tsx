import { Route, Switch } from "react-router-dom";
import { ThirdMenu } from "../components/ThirdMenu";
import { AccountSettings } from "./AccountSettings";
import { DefaultIDESettings } from "./DefaultIDE";
import { EnvVarsSettings } from "./EnvVarsSettings";
import { NotificationsSettings } from "./NotificationSettings";
import { SettingsHeader } from "./SettingsHeader";


const settingsSubMenu = [
    {
        title: 'Account',
        link: '/settings'
    },
    {
        title: 'Notifications',
        link: '/settings/notifications'
    },
    {
        title: 'Environment Variables',
        link: '/settings/env-vars'
    },
    {
        title: 'Default IDE',
        link: '/settings/default-ide'
    },
];

export function Settings() {
    return <div>
        <SettingsHeader />
        <div className="lg:px-28 px-10 flex pt-10">
            <ThirdMenu entries={settingsSubMenu} />
            <div className="ml-5 px-5 py-3 bg-gray-100 rounded-lg w-full">
                <Switch>
                    <Route path="/settings" exact component={AccountSettings} />
                    <Route path="/settings/notifications" exact component={NotificationsSettings} />
                    <Route path="/settings/env-vars" exact component={EnvVarsSettings} />
                    <Route path="/settings/default-ide" exact component={DefaultIDESettings} />
                </Switch>
            </div>
        </div>
    </div>;
}

