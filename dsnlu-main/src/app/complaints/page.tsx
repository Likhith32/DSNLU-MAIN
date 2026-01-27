"use client";

import { Banner } from "@/components/ui/banner";
import { Mail, Phone, User } from "lucide-react";

export default function ComplaintsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Banner
                title=""
                backgroundImage="https://dsnlu.ac.in/storage/2023/11/banners.png"
            />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Contact Info & Committee */}
                    <div className="lg:col-span-7 space-y-8">
                        <h1 className="text-3xl font-bold text-dsnlu-dark-slate border-b-4 border-dsnlu-azure inline-block pb-2 mb-6">
                            COMPLAINTS
                        </h1>

                        {/* Registrar Info */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-dsnlu-azure">
                            <h3 className="text-lg font-bold text-dsnlu-dark-slate mb-4">
                                FOR LODGING COMPLAINTS OF CASTE BASED DISCRIMINATION BY SC / ST /
                                OBC STUDENTS / TEACHERS / NON-TEACHING STAFF
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="font-bold text-xl">Dr. Viswachandra Nath M</p>
                                <p className="uppercase text-sm font-semibold text-gray-500">
                                    Registrar – In Charge
                                </p>
                                <p>Damodaram Sanjivayya National Law University,</p>
                                <p>Nyayaprastha, Sabbavaram, Visakhapatnam – 531 035.</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <Phone size={18} className="text-dsnlu-azure" />
                                    <a href="tel:08924248212" className="hover:text-dsnlu-azure transition-colors">
                                        08924 248212
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={18} className="text-dsnlu-azure" />
                                    <a href="mailto:registrar@dsnlu.ac.in" className="hover:text-dsnlu-azure transition-colors">
                                        registrar@dsnlu.ac.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Committee Table */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-dsnlu-dark-slate mb-6 flex items-center gap-2">
                                <User size={24} className="text-dsnlu-azure" />
                                COMPLAINTS REDRESSAL CELL
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-dsnlu-azure text-white">
                                            <th className="p-3 text-left border border-dsnlu-azure">Committee Members</th>
                                            <th className="p-3 text-left border border-dsnlu-azure">Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="even:bg-gray-50">
                                            <td className="p-3 border border-gray-200">Dr. A. Nageswara Rao</td>
                                            <td className="p-3 border border-gray-200 font-semibold text-dsnlu-azure">Convener</td>
                                        </tr>
                                        <tr className="even:bg-gray-50">
                                            <td className="p-3 border border-gray-200">Dr. K. Sudha</td>
                                            <td className="p-3 border border-gray-200">Member</td>
                                        </tr>
                                        <tr className="even:bg-gray-50">
                                            <td className="p-3 border border-gray-200">Dr. N. Bhagya Lakshmi</td>
                                            <td className="p-3 border border-gray-200">Member</td>
                                        </tr>
                                        <tr className="even:bg-gray-50">
                                            <td className="p-3 border border-gray-200">Dr. I. Durga Prasad</td>
                                            <td className="p-3 border border-gray-200">Member</td>
                                        </tr>
                                        <tr className="even:bg-gray-50">
                                            <td className="p-3 border border-gray-200">Dr. R. Deepthi</td>
                                            <td className="p-3 border border-gray-200">Member</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Complaint Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-white p-8 rounded-lg shadow-lg sticky top-24 border-t-4 border-dsnlu-lime">
                            <h2 className="text-2xl font-bold text-dsnlu-dark-slate mb-6">
                                Complaint Box
                            </h2>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Name (Required)"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Phone"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="reason" className="sr-only">Reason For Contact</label>
                                        <select
                                            id="reason"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:border-transparent transition-all bg-white"
                                        >
                                            <option value="">Reason For Contact</option>
                                            <option value="Verbal abuse">Verbal abuse</option>
                                            <option value="Physical abuse">Physical abuse</option>
                                            <option value="Sexual Harassment">Sexual Harassment</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="department" className="sr-only">Select Department</label>
                                    <select
                                        id="department"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:border-transparent transition-all bg-white"
                                    >
                                        <option value="">Select Department</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Library">Library</option>
                                        <option value="ACADEMICS">ACADEMICS</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Say Something..."
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-dsnlu-azure text-white font-bold py-3 px-6 rounded-md hover:bg-dsnlu-dark-slate transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
