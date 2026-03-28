import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";

const projectTypes = [
  "Custom Built-In",
  "Feature Piece",
  "Finish Carpentry",
  "Custom Furniture-Style Build",
  "Repair / Upgrade",
  "General Woodworking",
  "Other",
];

const inputClass =
  "w-full px-5 py-4 border border-light-stone bg-white font-sans text-sm text-charcoal outline-none focus:border-gold transition-colors placeholder:text-light-stone";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", "Papa Woody Jr Services Inc. Inquiry");
    formData.set("_captcha", "false");
    formData.set("_template", "table");

    try {
      setIsSending(true);
      setError("");

      const response = await fetch(
        "https://formsubmit.co/ajax/papawoodyjrservices@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSent(true);
      form.reset();
    } catch {
      setError(
        "Something went wrong sending your request. Please try again or email papawoodyjrservices@gmail.com."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-28 px-6 sm:px-10 md:px-16 bg-cream"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left – text + contact info */}
        <div>
          <div className="section-tag">Contact</div>
          <h2 className="section-title mb-5">
            Let’s talk about your next
            <br />
            <em>custom wood project</em>
          </h2>
          <p className="text-sm leading-[1.85] text-stone font-light max-w-md mb-8 sm:mb-10">
            Tell us what you have in mind and we’ll follow up with the next
            steps. We’re here to help with custom builds, feature work, and
            practical carpentry projects.
          </p>

          <div className="flex flex-col gap-5">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "(289) 687-4147",
                href: "tel:+12896874147",
              },
              {
                icon: Mail,
                label: "Email",
                value: "papawoodyjrservices@gmail.com",
                href: "mailto:papawoodyjrservices@gmail.com",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "Niagara Region",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-[0.7rem] tracking-[0.14em] uppercase text-stone mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-charcoal font-medium text-sm hover:text-gold transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-charcoal font-medium text-sm">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – form */}
        <div>
          {isSent ? (
            <div className="sent-card bg-white p-10 sm:p-12 border-t-2 border-gold text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Check size={26} />
              </div>
              <h3 className="font-display text-2xl font-light text-charcoal mb-3">
                Request Sent
              </h3>
              <p className="text-sm text-stone font-light leading-relaxed max-w-md mx-auto">
                Thanks for reaching out to Papa Woody Jr Services Inc. Leo will
                review your project details and follow up soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  className={inputClass}
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className={inputClass}
              />
              <select
                name="projectType"
                required
                defaultValue=""
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>
                  Project Type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <textarea
                name="details"
                placeholder="Tell us about your project..."
                rows={4}
                className={`${inputClass} resize-none`}
              />
              {error ? <p className="text-sm text-red-700">{error}</p> : null}
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary flex items-center justify-center gap-2.5 border-none cursor-pointer"
                style={{ opacity: isSending ? 0.75 : 1 }}
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={15} /> Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
