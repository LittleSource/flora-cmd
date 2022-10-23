import { ref } from "vue";

const logInfoText = ref("");

export function useLogInfo() {
	function add(text: string) {
		logInfoText.value = text;
	}
	function reset() {
		logInfoText.value = "";
	}
	return {
		logInfoText,
		add,
		reset,
	};
}
