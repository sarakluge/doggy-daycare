import './welcome.css'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <main class="welcome-body">
            <h1 class="welcome-text">Välkommen till Doggydaycare</h1>
            <Link to="/dog-list">
                <button>Alla hundar</button>
            </Link>
        </main>
        
        
    )
}

export default Welcome;