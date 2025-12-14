import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_INFO } from "@/constants/contact";
import { contactAPI } from "@/services/api";
import { MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "showroom",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Submit form data to backend API
      await contactAPI.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.department,
        subject: formData.subject,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "showroom",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (err: any) {
      setIsSubmitting(false);
      setError(
        err.response?.data?.message ||
          "Failed to send message. Please try again."
      );

      // Clear error after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />

      {/* Spacer for fixed header */}
      <div className="pt-28"></div>

      {/* Main Content: Form + Info */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Thank you for contacting us. We'll respond shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Error Message */}
                      {error && (
                        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-red-600">{error}</p>
                        </div>
                      )}

                      {/* Name, Email & Phone in one row */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+966 XX XXX XXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-11"
                          />
                        </div>
                      </div>

                      {/* Department & Subject in one row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="department"
                            className="block text-sm font-semibold mb-2"
                          >
                            Department *
                          </label>
                          <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            className="w-full h-11 px-3 rounded-md border border-input bg-background"
                          >
                            <option value="showroom">Showroom</option>
                            <option value="trading">Trading</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-semibold mb-2"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="How can we help you?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="h-11"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your inquiry..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="flex flex-col gap-4 h-full">
              {/* Office Location */}
              <Card className="shadow-xl border-border/50 flex-shrink-0">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1.5">
                        Office Location
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Al Madina Al Munawara Branch Road
                        <br />
                        Al Aziziyah Dist, Jiddah
                        <br />
                        Kingdom Of Saudi Arabia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Numbers */}
              <Card className="shadow-xl border-border/50 flex-shrink-0">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base mb-2">Call Us</h3>
                      <div className="space-y-1.5">
                        <a
                          href={`tel:${CONTACT_INFO.whatsapp.showroom.number}`}
                          className="block text-xs hover:text-primary transition-colors"
                        >
                          <span className="font-semibold">Showroom:</span>
                          <br />
                          {CONTACT_INFO.whatsapp.showroom.number}
                        </a>
                        <a
                          href={`tel:${CONTACT_INFO.whatsapp.trading.number}`}
                          className="block text-xs hover:text-primary transition-colors"
                        >
                          <span className="font-semibold">Trading:</span>
                          <br />
                          {CONTACT_INFO.whatsapp.trading.number}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map - Takes remaining space */}
              <Card className="shadow-xl border-border/50 overflow-hidden flex-1 relative z-0">
                <div className="w-full h-full min-h-[200px]">
                  <MapContainer
                    center={[21.5433, 39.1728]} // Jeddah, Saudi Arabia coordinates
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%", zIndex: 0 }}
                    zoomControl={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[21.5433, 39.1728]}>
                      <Popup>
                        <div className="text-sm">
                          <strong>Volt Axis Company</strong>
                          <br />
                          Al Madina Al Munawara Branch Road
                          <br />
                          Al Aziziyah Dist, Jiddah
                          <br />
                          Kingdom Of Saudi Arabia
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
