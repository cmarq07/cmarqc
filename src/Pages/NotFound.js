// Import Libraries
import { Link } from 'react-router-dom'

// Import Components
import PageHeader from '../Components/PageHeader'

function NotFound() {
    return (
        <div className='centered maxWidth'>
            <PageHeader title="Not Found" />
            <h2 style={{ fontStyle: "italic" }}>This is not the page you're looking for...</h2>

            <div className='contentBox fit'>
                <p>Something may have went wrong on your end with an invalid link. Check the URL to make sure you're on the correct page.</p>
                <div className='button'>
                    <Link to="/" className='text'>
                        Go to Home Page
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default NotFound