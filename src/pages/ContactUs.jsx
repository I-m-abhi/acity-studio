import PageTitle from "../components/PageTitle";
import ContactSection from "../sections/ContactSection";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <PageTitle pageTitle="Contact us" />
      <ContactSection />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d396.2324566862945!2d77.428428!3d28.605508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9ade9433c5%3A0x56566aca7c8d145b!2sVastu%20Home%20decor!5e1!3m2!1sen!2sin!4v1746659921214!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
};

export default ContactUs;