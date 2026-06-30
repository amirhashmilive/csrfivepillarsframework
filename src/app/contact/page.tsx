"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    orgType: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a form service (Formspree, Netlify Forms, etc.)
    // For the static demo, we'll just show success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-foreground bg-card p-12 text-center">
            <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-foreground" />
            <h1 className="font-serif text-3xl font-bold">Thank you for reaching out</h1>
            <p className="mt-4 text-muted-foreground">
              We've received your message. A member of our team will be in touch within 24 hours.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              In the meantime, feel free to try the{" "}
              <a href="/demo/" className="underline">interactive demo</a>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Let's talk about your Legitimacy Migration
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you're ready for an assessment, have questions about the platform, or want
            to explore partnership — we'd like to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={form.organization}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Role / Title</label>
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Organization Type</label>
                  <select
                    name="orgType"
                    value={form.orgType}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  >
                    <option value="">Select...</option>
                    <option value="corporate">Corporate</option>
                    <option value="government">Government</option>
                    <option value="ngo">NGO</option>
                    <option value="foundation">Foundation</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="auditor">Auditor / Verifier</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Interest</label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  >
                    <option value="">Select...</option>
                    <option value="assessment">Institutional Assessment</option>
                    <option value="advisory">Advisory & Consulting</option>
                    <option value="education">Executive Education</option>
                    <option value="certification">Certification</option>
                    <option value="speaking">Speaking / Media</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your institution and what you're looking for..."
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
