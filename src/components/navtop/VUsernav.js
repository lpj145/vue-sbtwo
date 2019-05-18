import VSearch from './VSearch'
import VAlert from './details/VAlert'
import VMessage from './details/VMessage'
import VUser from './details/VUser'

export default {
    name: 'v-usernav',
    props: {
        username: {
            type: String,
            default: 'John Doe'
        }
    },
    render(h) {
        return (
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow d-sm-none">
                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-search fa-fw"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <VSearch></VSearch>
                    </div>
                </li>
                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bell fa-fw"></i>
                        <span class="badge badge-danger badge-counter">3+</span>
                    </a>                    
                    <VAlert></VAlert>
                </li>
                <li class="nav-item dropdown no-arrow mx-1 show">
                    <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i class="fas fa-envelope fa-fw"></i>
                        <span class="badge badge-danger badge-counter">7</span>
                    </a>
                    <VMessage></VMessage>
                </li>
                <div class="topbar-divider d-none d-sm-block"></div>
                <li class="nav-item dropdown no-arrow show">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{this.username}</span>
                        <img class="img-profile rounded-circle" src="https://source.unsplash.com/9bYTpXfiKNM/60x60" />
                    </a>
                    <VUser></VUser>
                </li>
            </ul>
        )
    },
}
