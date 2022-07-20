// Import Components
import PageHeader from '../Components/PageHeader'

function About() {
    return (
        <div>
            <PageHeader title="About" />
            <div id="overview">
                <h2>Overview</h2>
                <div className="contentBox">
                    <p>
                        I'm an alumni from the University of Washington. My passion has always been in tech, as I've worked with computers from a young age.
                    </p>
                    <p>
                        I've taken on many projects, including this website, Android apps, and other small-scale Java projects. I also enjoy doing many other things, from gaming to photography to artwork to sports!
                    </p>
                    <p>
                        Eventually, I want to be able to travel the world establish my own business, non-profit, and just generally be a benefit to the world. That's just a little bit about me!
                    </p>
                </div>
            </div>

            <div id="overview">
                <h2>Interests</h2>
                <div className="contentBox list">
                    <ul>
                        <li>Gaming</li>
                        <li>Programming</li>
                        <li>Sports</li>
                        <ul>
                            <li>Basketball</li>
                            <li>Football</li>
                            <li>{"(Ultimate) Frisbee"}</li>
                            <li>Tennis</li>
                        </ul>
                        <li>Hiking</li>
                        <li>Photography</li>
                        <li>Digital/Traditional Art {"&"} Media</li>
                        <li>Streaming</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About