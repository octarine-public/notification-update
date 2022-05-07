import { Events, NotificationsSDK } from "wrapper/Imports"
import { UNData } from "../data"
import { State } from "../menu"
import { ScriptsUpdated } from "../Notification/ScriptsUpdated"

Events.on("ScriptsUpdated", () => {
	if (!State.value)
		return
	NotificationsSDK.Push(new ScriptsUpdated(UNData.PathIcons))
	console.info("Scripts Updated...")
})
