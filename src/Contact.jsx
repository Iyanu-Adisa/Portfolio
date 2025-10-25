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
        msg: "Email service is not configured properly.",
      });
      return;
    }

    sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus({
          loading: false,
          ok: true,
          msg: "✅ Message sent successfully!",
        });
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus({
          loading: false,
          ok: false,
          msg: "❌ Failed to send message. Please try again.",
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-overlay"></div>
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="contact-title">
            Let’s <span>Connect</span>
          </h1>
          <p className="contact-desc">
            I’m open to collaborations, freelance work, or full-time roles. Feel
            free to reach out — I’ll reply as soon as possible.
          </p>
        </div>

        <form ref={form} onSubmit={onSubmit} className="contact-form">
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

          {status.msg && (
            <p className={`contact-status ${status.ok ? "ok" : "error"}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
