import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Contact Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="w-full p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input type="email" className="w-full p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea className="w-full p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent h-32" placeholder="How can we help you?" />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </Card>

                {/* Map & Info */}
                <div className="space-y-8">
                    <Card className="bg-slate-900 text-white border-none">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-dsnlu-lime shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Address</h3>
                                    <p className="text-slate-300">Damodaram Sanjivayya National Law University<br />NYAYAPRASTHA, Sabbavaram,<br />Visakhapatnam - 531035, AP</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-dsnlu-lime shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Phone</h3>
                                    <p className="text-slate-300">+91 8924 248216</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="text-dsnlu-lime shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <p className="text-slate-300">registrar@dsnlu.ac.in</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Map Placeholder */}
                    <div className="h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                            Google Maps Embed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
