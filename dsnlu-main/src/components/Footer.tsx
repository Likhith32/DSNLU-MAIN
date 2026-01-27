import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand & Address */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">DSNLU</h3>
                    <p className="text-sm leading-relaxed">
                        Damodaram Sanjivayya National Law University
                        <br />
                        NYAYAPRASTHA, Sabbavaram,
                        <br />
                        Visakhapatnam - 531035
                        <br />
                        Andhra Pradesh, India
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <Link href="#" className="hover:text-dsnlu-azure transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="hover:text-dsnlu-azure transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="hover:text-dsnlu-azure transition-colors"><Linkedin size={20} /></Link>
                        <Link href="#" className="hover:text-dsnlu-azure transition-colors"><Instagram size={20} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-dsnlu-azure">About Us</Link></li>
                        <li><Link href="/academics" className="hover:text-dsnlu-azure">Academics</Link></li>
                        <li><Link href="/admissions" className="hover:text-dsnlu-azure">Admissions</Link></li>
                        <li><Link href="/faculty" className="hover:text-dsnlu-azure">Faculty</Link></li>
                        <li><Link href="/tenders" className="hover:text-dsnlu-azure">Tenders</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/library" className="hover:text-dsnlu-azure">Library</Link></li>
                        <li><Link href="/newsletter" className="hover:text-dsnlu-azure">Student Newsletter</Link></li>
                        <li><Link href="/moot-court" className="hover:text-dsnlu-azure">Moot Court Society</Link></li>
                        <li><Link href="/results" className="hover:text-dsnlu-azure">Exam Results</Link></li>
                        <li><Link href="/careers" className="hover:text-dsnlu-azure">Careers</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="text-dsnlu-azure mt-0.5" />
                            <span>NYAYAPRASTHA, Sabbavaram, Visakhapatnam</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-dsnlu-azure" />
                            <span>+91 8924 248216</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-dsnlu-azure" />
                            <span>registrar@dsnlu.ac.in</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Damodaram Sanjivayya National Law University. All rights reserved.</p>
            </div>
        </footer>
    );
}
