import './welcome.css'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <main class="welcome">
            <div class="wrapper">
                <h1 class="welcome-text">Welcome to Doggydaycare</h1>
                <Link to="/dog-list">
                    <button>All dogs</button>
                </Link>
            </div>
        </main>
        
        
    )
}

export default Welcome;