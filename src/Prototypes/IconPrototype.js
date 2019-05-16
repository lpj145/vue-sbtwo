export default {
    methods: {
        renderIcon (h, type) {
            return h('i', {
                attrs: {
                    class: type
                }
            })
        }
    },
}
