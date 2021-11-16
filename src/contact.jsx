import Header from './header.jsx';
import './contact.css';

export default function Contact() {
    
    return (
        <>
        <Header />
        <div className="contactBackground">
            <section className="contact">
                <div className="form-submit">
                    <h1 className="sayHi">Say Hi!</h1>
                    {/* <!-- Form --> */}
                    <form  target="_blank" action="https://formsubmit.co/el/jiyisi" method="POST">
                        {/* <!-- <input type="hidden" name="_next" value="https://karstenjep.github.io/thankyou.html"> --> */}
                        <form action="https://formsubmit.co/your-random-string" method="POST" />
                        <div className="form-row">
                            <input name="name" className="form-control" placeholder="Full Name" required />
                            <input name="email" className="form-control" placeholder="Email" required />
                        </div>
                        <textarea placeholder="Your Message" name="message" rows="10" required></textarea>
                        <button type="submit">Submit Message</button>
                    </form>
                </div>
            </section>
        </div>
        </>
    )
}
