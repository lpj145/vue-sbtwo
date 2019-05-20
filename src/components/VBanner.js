import ThemePrototype from '../Prototypes/ThemePrototype'

export default {
    name: 'v-banner',
    mixins: [ThemePrototype],
    props: {
        noShadow: Boolean,
        border: Boolean,
        label: {
            type: String,
            default: 'Label'
        },
        icon: {
            default: false
        }
    },
    render(h) {
        const borderColor = `border-left-${this.getTheme}`
        const classes = {
            'card': true,
            [borderColor]: this.border,
            'shadow': !this.noShadow,
            'h-100': true,
            'py-2': true
        };
        const labelClasses = {
            [`text-${this.getTheme}`]: true,
            'text-xs': true,
            'text-uppercase': true,
            'mb-1': true,
            'font-weight-bold': true,
        };
        const iconClasses = {
            'fa-2x': true,
            'text-gray-300': true,
            [this.icon]: true
        };

        return (
            <div {...{class:classes}}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div {...{class: labelClasses}}>{this.label}</div>
                            <div class="row no-gutters align-items-center">
                                {this.$slots.default}
                            </div>
                        </div>
                        { this.icon !== false ? <div class="col-auto">
                            <i {...{class:iconClasses}}></i>
                        </div> : ''}
                    </div>
                </div>
            </div>
        )
    },
}