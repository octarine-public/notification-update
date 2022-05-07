import { Menu as MenuSDK } from "wrapper/Imports"

export const MessageNotify = {
	ZH: "脚本更新已准备就绪",
	EN: "Scripts update is ready",
	RU: "Обновление скриптов готово",
}

const Menu = MenuSDK.AddEntryDeep(["Main", "Updates notifications"])
export const State = Menu.AddToggle("State", true, "Notifications if scripts updated")
export const ReloadOnClickState = Menu.AddToggle("Reload on click", true, "Reload scripts on click on notification")

MenuSDK.Localization.AddLocalizationUnit("russian", new Map([
	["Updates notifications", "Оповещения об обновлениях"],
	["Notifications if scripts updated", "Уведомления при обновлении скриптов"],
	["Reload on click", "Обновить по нажатию"],
	["Reload scripts on click on notification", "Обновить скрипты по нажатию на уведомление"],
]))
