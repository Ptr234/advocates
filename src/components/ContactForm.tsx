"use client";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "xpzvkyal");

  if (state.succeeded) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-serif font-medium text-cream mb-4">Message Received</h3>
        <p className="text-cream/60 font-sans font-light">We will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.14em] font-medium text-cream/40 mb-3">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full bg-transparent border-b-[0.5px] border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors rounded-none font-sans font-light"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.14em] font-medium text-cream/40 mb-3">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-transparent border-b-[0.5px] border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors rounded-none font-sans font-light"
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gold text-[10px] mt-2" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.14em] font-medium text-cream/40 mb-3">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full bg-transparent border-b-[0.5px] border-cream/20 py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none rounded-none font-sans font-light"
          placeholder="How can we assist you?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-gold text-[10px] mt-2" />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="group w-full bg-gold hover:bg-gold-light text-ink py-5 font-medium uppercase tracking-[0.14em] text-[10px] flex items-center justify-center transition-all disabled:opacity-50 rounded-none"
      >
        {state.submitting ? "Sending..." : "Submit Inquiry"}
        <svg className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
