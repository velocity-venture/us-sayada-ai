"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2, AlertCircle } from "lucide-react";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("Enterprise AI Platform Access");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          subject: "New Contact Request — Sayada.ai US",
          "Full Name": fullName,
          "Work Email": email,
          "Organization": company,
          Interest: interest,
          Message: message || "(no message)",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFullName("");
        setEmail("");
        setCompany("");
        setInterest("Enterprise AI Platform Access");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <main className="bg-sayada-cloud min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-display font-bold text-sayada-graphite mb-4">
            Get Intelligence at the Speed of Business.
          </h1>
          <p className="text-xl text-gray-600">
            Connect with our Strategic Advisory team to discuss Enterprise Access or Partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="md:col-span-1 p-8 bg-sayada-blue rounded-xl text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <div className="space-y-6">
              <ContactInfo icon={<Mail size={20} />} title="Sales Inquiries" content="sales@us.sayada.ai" />
              <ContactInfo icon={<Phone size={20} />} title="Operational Support" content="sales@us.sayada.ai" />
              <ContactInfo icon={<MapPin size={20} />} title="Corporate Office" content="A Velocity Venture Holdings Company, US Base" />
            </div>
          </div>

          <div className="md:col-span-2 p-10 bg-white rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-sayada-graphite mb-8">Request Access or Partnership</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-sayada-graphite mb-2">Request Submitted</h3>
                <p className="text-gray-600 mb-6">
                  Our Strategic Advisory team will review your inquiry and respond within 1 business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sayada-blue hover:underline font-medium"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput label="Full Name" name="fullName" type="text" placeholder="John Doe" value={fullName} onChange={setFullName} />
                <FormInput label="Work Email" name="email" type="email" placeholder="work@enterprise.com" required value={email} onChange={setEmail} />
                <FormInput label="Organization / Company Name" name="company" type="text" placeholder="Global Dynamics Inc." required value={company} onChange={setCompany} />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am interested in...</label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-sayada-slate focus:border-sayada-slate"
                  >
                    <option>Enterprise AI Platform Access</option>
                    <option>Consultant/Partner Program</option>
                    <option>Government/Public Sector Solution</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-sayada-slate focus:border-sayada-slate"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 px-4 bg-sayada-slate text-white font-semibold rounded-md hover:bg-sayada-blue transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-sayada-mist flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-blue-100">{content}</p>
    </div>
  </div>
);

const FormInput = ({ label, name, type, placeholder, required = false, value, onChange }: FormInputProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-sayada-slate focus:border-sayada-slate"
    />
  </div>
);
