export default {
    name: 'v-search',
    functional: true,
    render(h, ctx) {
        return (
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input class="form-control bg-light border-0 small" type="text" aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-appended">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    },
}
