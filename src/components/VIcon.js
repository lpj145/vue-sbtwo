import {renderIcon} from '../Prototypes/ElementPrototype';
export default {
    name: 'v-icon',
    functional: true,
    props: {
        icon: String
    },
    render(h) {
        return renderIcon(h, this.icon)
    },
}