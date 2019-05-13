import IconPrototype from './Prototypes/IconPrototype';

export default {
    mixins: [IconPrototype],
    props: {
        icon: String
    },
    render(h) {
        return this.renderIcon(h, this.icon)
    },
}