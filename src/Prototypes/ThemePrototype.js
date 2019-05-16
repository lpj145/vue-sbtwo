export default {
    props: {
        theme: String
    },

    computed: {
        getTheme () {
            return this.theme
        },

        getBtnColor () {
            return `btn-${this.theme}`
        }
    },
}
