import { useState } from "react";
import { useTheme } from "./ThemeMode";
import Nav_desktop from "./Nav(desktop)";
import Theme from "./Theme";
import Nav_mobile from "./Nav(mobile)";
import axios from "axios";

const Contact = () => {
  const { theme } = useTheme();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [msgDelivered, setMsgDelivered] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true); 
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        setMsgDelivered('Message sent successfully!!!');
        setTimeout(() => {
          setMsgDelivered('');
        }, 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <Nav_desktop />
      <main style={{ backgroundColor: theme.mainBackgroundColor }} id="about-me-main">
        <header className="flex">
          <div className="header-div">
            <h1>Contact</h1>
            <hr id="hr-1" />
            <hr id="hr-2" />
          </div>
          <Theme />
        </header>

        <section>
          <div className="center">
            <h3 style={{ color: theme.h3BackgroundColor }}>Have you any question?</h3>
            <p>I am at your service</p>
          </div>

          <div className="flex call-me">
            <div className="flex flex-contact">
              <i style={{ color: theme.h3BackgroundColor }} className="fa fa-phone fa-5x" aria-hidden="true"></i>
              <div className="flex flex-contact">
                <h3 style={{ color: theme.h3BackgroundColor }}>Call me on</h3>
                <p>+2348168085157, +2347049509803</p>
              </div>
            </div>
            <div className="flex flex-contact">
              <i style={{ color: theme.h3BackgroundColor }} className="fa fa-map-marker fa-5x" aria-hidden="true"></i>
              <div className="flex flex-contact">
                <h3 style={{ color: theme.h3BackgroundColor }}>Address</h3>
                <p>Ibadan, Nigeria</p>
              </div>
            </div>
            <div className="flex flex-contact address">
              <i style={{ color: theme.h3BackgroundColor }} className="fa fa-envelope fa-5x" aria-hidden="true"></i>
              <div className="flex flex-contact">
                <h3 style={{ color: theme.h3BackgroundColor }}>Email Me</h3>
                <p>oyesolaibrahim14@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="center">
              <h3 style={{ color: theme.h3BackgroundColor }}>Send me an Email</h3>
              <p>I am very responsive to messages</p>
            </div>
            <div>
              <form id="form" onSubmit={handleSubmit}>
                <div className="flex first-child">
                  <div className="label">
                    <label htmlFor="name"></label>
                    <input
                      style={{ backgroundColor: theme.labelsBackgroundColor }}
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                      id="input1"
                      placeholder="Name"
                      disabled={sending}
                    />
                  </div>
                  <div className="label">
                    <label htmlFor="email"></label>
                    <input
                      style={{ backgroundColor: theme.labelsBackgroundColor }}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      id="input2"
                      placeholder="Email"
                      disabled={sending}
                    />
                  </div>
                </div>
                <div className="label">
                  <label htmlFor="subject"></label>
                  <input
                    style={{ backgroundColor: theme.labelsBackgroundColor }}
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    name="subject"
                    placeholder="Subject"
                    disabled={sending}
                  />
                </div>
                <div className="label">
                  <label htmlFor="message"></label>
                  <input
                    style={{ backgroundColor: theme.labelsBackgroundColor }}
                    type="text"
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    id="message"
                    placeholder="Message"
                    disabled={sending}
                  />
                </div>
                <button
                  style={{ backgroundColor: theme.h3BackgroundColor }}
                  className="send"
                  id="submit"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </form>
              <span id="msgDelivered" className="center">
                {msgDelivered}
              </span>
            </div>
          </div>
        </section>
      </main>
      <Nav_mobile />
    </div>
  );
};

export default Contact;
