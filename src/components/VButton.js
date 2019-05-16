import ThemePrototype from '../Prototypes/ThemePrototype'
import {renderIcon} from '../Prototypes/ElementPrototype'

export default {
    name: 'v-button',
    mixins: [ThemePrototype],
    props: {
        isLink: {
            type: Boolean,
            default: false
        },
        activeClass: {
            type: String,
            default: 'active'
        },
        lg: Boolean,
        sm: Boolean,
        blocked: Boolean,
        actived: Boolean,
        disabled: Boolean,
        splited: Boolean,
        circle: Boolean,
        outline: Boolean,
        splitIcon: {
            type: String,
            default: ''
        }
    },

    computed: {
        classes () {
            return {
                'btn': true,
                [this.getBtnColor]: true,
                'btn-sm': this.sm,
                'btn-lg': this.lg,
                'btn-block': this.blocked,
                [this.activeClass]: this.actived,
                'disabled': this.disabled,
                'btn-icon-split': this.splited,
                'btn-circle': this.circle,
                // [this.getBtnOutlineColor]: this.outline
            }
        }
    },

    render(h) {
        const tag = this.isLink ? 'a' : 'button';
        let subContent = this.$slots.default;
        
        if (this.splited) {
            const iconElement = renderIcon(h, this.splitIcon)
            subContent = [
                h('span', {attrs:{class:'icon'}}, [iconElement]),
                h('span', {attrs:{class:'text'}}, [...subContent])
            ]
        }
        
        return h(tag, {class: this.classes}, subContent);
    },
}
