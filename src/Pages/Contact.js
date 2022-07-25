// Import Components
import PageHeader from '../Components/PageHeader'

function Contact() {

    return (
        <div className='centered maxWidth'>
            <PageHeader title="Contact" />
            <p className='blurb'>Use this form to contact me for any reason. The form authentication is handled by <a href='https://formspree.io/' target="_blank" rel="noreferrer" className='link'>FormSpree</a> to prevent spam emails.</p>

            <form name="contactForm" action="https://formspree.io/mbjanbvz" id="contactForm" className="centered maxWidth" method="POST">
                <input type="text" id="nameField" name="name" placeholder="Name" className="formInput" maxLength="25" required/>
                <input type="email" id="emailField" name="email" placeholder="Email" className="formInput" maxLength="30" required/>
                <textarea id="messageField" className="formInput textarea" name="message" placeholder="Message (300 Characters Max)" maxLength="300" required></textarea>
                <input type="submit" id="submitButton" value="Submit" className='button download large' />
            </form>
        </div>
    )
}

export default Contact