interface FormInputProps {
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
}
interface ContactInfoProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-sayada-cloud min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Call to Action */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-display font-bold text-sayada-graphite mb-4">
            Get Intelligence at the Speed of Business.
          </h1>
          <p className="text-xl text-gray-600">
            Connect with our Strategic Advisory team to discuss Enterprise Access or Partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Contact Information Sidebar */}
            <div className="md:col-span-1 p-8 bg-sayada-blue rounded-xl text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                <div className="space-y-6">
                    <ContactInfo icon={<Mail size={20} />} title="Sales Inquiries" content="sales@us.sayada.ai" />
                    <ContactInfo icon={<Phone size={20} />} title="Operational Support" content="+1 (555) Sayada" />
                    <ContactInfo icon={<MapPin size={20} />} title="Corporate Office" content="A Velocity Venture Holdings Company, US Base" />
                </div>
            </div>

            {/* Lead Capture Form (Placeholder) */}
            <div className="md:col-span-2 p-10 bg-white rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-sayada-graphite mb-8">Request Access or Partnership</h2>
                
                {/* NOTE TO DEVELOPER: This is a static HTML form structure. 
                   It must be integrated with a backend service (e.g., HubSpot, Salesforce, Next.js API) 
                   for actual lead capture and routing. */}
                
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
		<input type="hidden" name="access_key" value="9bf4be73-10f1-48da-b1aa-1623e7053316" />
                    <FormInput label="Full Name" type="text" placeholder="John Doe" />
                    <FormInput label="Work Email" type="email" placeholder="work@enterprise.com" required />
                    <FormInput label="Organization / Company Name" type="text" placeholder="Global Dynamics Inc." required />
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">I am interested in...</label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-sayada-slate focus:border-sayada-slate">
                            <option>Enterprise AI Platform Access</option>
                            <option>Consultant/Partner Program</option>
                            <option>Government/Public Sector Solution</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                        <textarea name="Message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-sayada-slate focus:border-sayada-slate"></textarea>
                    </div>

                    <button type="submit" className="w-full py-3 px-4 bg-sayada-slate text-white font-semibold rounded-md hover:bg-sayada-blue transition-colors shadow-md">
                        Submit Request
                    </button>
                </form>
            </div>
            
        </div>
      </div>
    </main>
  );
}

// Reusable component for displaying contact details
const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 text-sayada-mist flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-sm text-blue-100">{content}</p>
        </div>
    </div>
);

// Reusable component for form inputs
// Reusable component for form inputs (REPLACED)
const FormInput = ({ label, type, placeholder, required = false }: FormInputProps) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input 
            type={type} 
            // This line passes the label as the field name for Web3Forms/server
            name={label} 
            placeholder={placeholder}
            required={required}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-sayada-slate focus:border-sayada-slate" 
        />
    </div>
);