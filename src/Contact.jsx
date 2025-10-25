import { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ loading: false, msg: null, ok: null });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: null, ok: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Email service is not configured. Make sure environment variables are set (service, template, public key).",
      });
      return;
    }

    sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus({
          loading: false,
          ok: true,
          msg: "Message sent — thank you!",
        });
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus({
          loading: false,
          ok: false,
          msg: "Failed to send message. Try again or contact me directly.",
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">
          Let’s <span>Connect</span>
        </h1>
        <p className="contact-desc">
          I’m open to new projects and opportunities. Send a quick message below
          and I’ll get back to you.
        </p>

        <form
          ref={form}
          onSubmit={onSubmit}
          className="contact-form"
          aria-label="Contact form"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
          <input type="text" name="subject" placeholder="Subject (optional)" />
          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            required
          />
          <button
            type="submit"
            className="contact-btn"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status.msg && (
          <p className={`contact-status ${status.ok ? "ok" : "error"}`}>
            {status.msg}
          </p>
        )}

        <div className="contact-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="adisaiyanuakorede@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
