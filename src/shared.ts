export const NAME = "Tailwind Twin IntelliSense"
export const SECTION_ID = "tailwindcss"
export const DIAGNOSTICS_ID = "twin"

export interface Settings {
	enabled: boolean
	colorDecorators: "inherit" | "on" | "off"
	references: boolean
	preferVariantWithParentheses: boolean
	fallbackDefaultConfig: boolean
	diagnostics: {
		enabled: boolean
		emptyChecking: boolean
	}
	jsxPropImportChecking: boolean
	rootFontSize: number
	logLevel: "none" | "error" | "warning" | "info" | "debug" | "trace"
	documentColors: boolean
	hoverColorHint: "none" | "hex" | "rgb" | "hsl"
	otherLanguages: string[]
}

export interface ColorDecoration {
	color?: string
	backgroundColor?: string
	borderColor?: string
}
