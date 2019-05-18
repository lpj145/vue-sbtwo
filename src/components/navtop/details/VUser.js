export default {
    name: 'v-user',
    functional: true,
    props: {
        show: Boolean,
        noShadow: Boolean
    },
    render(h, ctx) {
        const {props} = ctx;

        const classes = {
            'dropdown-menu dropdown-menu-right shadow animated--grow-in': true,
            'shadow': !props.noShadow,
            'show': props.show
        }

        return (
            <div {...{class:classes}} aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>
            </div>
        )
    },
}