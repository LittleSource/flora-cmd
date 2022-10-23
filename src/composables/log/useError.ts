import { ref } from "vue";

const errorText = ref(" ");

export function useError() {
    function addError(text: string) {
        errorText.value = text;
    }
    function resetError() {
        errorText.value = "";
    }
    return {
        errorText,
        addError,
        resetError,
    };
}