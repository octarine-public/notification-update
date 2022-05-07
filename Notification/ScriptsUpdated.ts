import { Color, GUIInfo, Menu, Notification, Rectangle, RendererSDK, Vector2 } from "wrapper/Imports"
import { MessageNotify, ReloadOnClickState } from "../menu"

declare global {
	const reload: () => void
}

export class ScriptsUpdated extends Notification {
	constructor(public PathIcon: string) {
		super({
			timeToShow: 6 * 1000,
		})
	}

	public OnClick(): boolean {
		if (!ReloadOnClickState.value)
			return false
		reload()
		return true
	}

	public Draw(position: Rectangle): void {
		const opacity = this.Opacity
		const opacityWhite = Color.White.SetA(opacity)

		RendererSDK.Image(
			`${this.PathIcon}/menu/background_inactive.svg`,
			position.pos1,
			-1,
			position.Size,
			opacityWhite,
		)

		const width = position.Width,
			height = position.Height

		const infoPadding = Math.ceil(width * 0.05),
			infoSize = Math.ceil(position.Height / 2)
		const Position = position.pos1
			.Clone()
			.AddScalarX(infoPadding)
			.AddScalarY((height - infoSize) / 2)
		RendererSDK.Image(
			`${this.PathIcon}/menu/icons/info.svg`,
			Position,
			-1,
			new Vector2(infoSize, infoSize),
			new Color(104, 4, 255, opacity),
		)

		let Text: string
		switch (Menu.Localization.SelectedUnitName) {
			case "russian":
				Text = MessageNotify.RU
				break
			case "chinese":
				Text = MessageNotify.ZH
				break
			default:
				Text = MessageNotify.EN
				break
		}

		const textPadding = Math.ceil(infoPadding / 2),
			textFontSize = GUIInfo.ScaleHeight(12)
		const textSize = RendererSDK.GetTextSize(
			Text,
			RendererSDK.DefaultFontName,
			textFontSize,
		)
		Position.AddScalarX(infoSize + textPadding)
		Position.AddScalarY((infoSize - textSize.y - textSize.z) / 2)
		RendererSDK.Text(
			Text,
			Position,
			opacityWhite,
			RendererSDK.DefaultFontName,
			textFontSize,
		)
	}
}
