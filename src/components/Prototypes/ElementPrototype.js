export function renderDiv (h, className, slot = []) {
    return h('div', {attrs:{class: className}}, slot)
}

export function renderIcon (h, className) {
    return h('i', {attrs:{
        class: className
    }})
}
