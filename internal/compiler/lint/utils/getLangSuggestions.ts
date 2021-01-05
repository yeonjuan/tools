import {ISO} from "@internal/compiler/lint/utils/constants";

// We lazily build this suggestions list as it is massive
let suggestions: string[] = [];
const countries = ISO.get("countries");
const languages = ISO.get("languages");

export function getLangSuggestions() {
	if (suggestions.length > 0) {
		return suggestions;
	}

	if (countries && languages) {
		suggestions = Array.from(countries);
	}

	return suggestions;
}
