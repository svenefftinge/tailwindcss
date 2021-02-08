import { ThirdMenu } from "../components/ThirdMenu";
import { SettingsHeader } from "./SettingsHeader";

export function Settings() {
    return <div>
        <SettingsHeader/>
        <div className="lg:px-28 px-10 flex pt-10">
            <ThirdMenu entries={[
                {
                    title: 'Account',
                    href: 'account'
                },
                {
                    title: 'Notifications',
                    href: 'notifications'
                },
                {
                    title: 'Environment Variables',
                    href: 'env-vars'
                },
                {
                    title: 'Preferences',
                    href: 'prefs'
                },
                {
                    title: 'Feature Preview',
                    href: 'feature-preview'
                },
                {
                    title: 'Default IDE',
                    href: 'deafault-ide'
                },
            ]}/>
            <div className="mx-5 px-5 py-3 bg-gray-100 rounded-lg w-full">
                content
            </div>
        </div>
    </div>
}