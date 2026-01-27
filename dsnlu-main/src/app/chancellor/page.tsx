"use client";

import { Card } from "@/components/ui/Card";

export default function ChancellorPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-[88px] pb-12">
            {/* Hero / Header Section */}
            <div className="bg-dsnlu-azure/10 py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-dsnlu-dark-slate mb-2">Chancellor</h1>
                    <div className="h-1 w-24 bg-dsnlu-lime mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Profile Section */}
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                    {/* Image Column */}
                    <div className="md:col-span-4">
                        <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="https://dsnlu.ac.in/storage/2023/07/Sri-Justice-Dhiraj-Singh-Thakur-2-2.jpg"
                                alt="Sri Justice Dhiraj Singh Thakur"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Bio Column */}
                    <div className="md:col-span-8">
                        <Card className="h-full p-8 bg-white border-none shadow-lg">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-dsnlu-dark-slate mb-2">
                                    Sri Justice Dhiraj Singh Thakur
                                </h2>
                                <p className="text-xl text-dsnlu-azure font-medium">
                                    The Hon'ble The Chief Justice
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Born on 25th April 1964.</p>
                                <p>
                                    Enrolled as an Advocate on 18th October 1989 with the Bar Council of Delhi, and subsequently with the Bar Council of Jammu and Kashmir. Designated as Senior Advocate in 2011.
                                </p>
                                <p>
                                    Appointed as Permanent Judge of High Court of Jammu and Kashmir on 8th March 2013.
                                </p>
                                <p>
                                    Transferred as a Judge, High Court of Judicature at Bombay on 10th June 2022.
                                </p>
                                <p>
                                    His Lordship was appointed as the Chief Justice of High Court of Andhra Pradesh on 24th July 2023 and sworn in as the Chief Justice of High Court of Andhra Pradesh on 28th July 2023.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Tables Section */}
                <div className="space-y-12 max-w-4xl mx-auto">

                    {/* Founder Chancellor Table */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="bg-dsnlu-dark-slate p-4 text-center">
                            <h3 className="text-xl font-bold text-white">FOUNDER CHANCELLOR</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">From</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">To</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Prof. A. Lakshminath</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">05.11.2008</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">04.11.2014</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Chancellor List Table */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="bg-dsnlu-dark-slate p-4 text-center">
                            <h3 className="text-xl font-bold text-white">CHANCELLOR</h3>
                            <p className="text-dsnlu-lime text-sm font-medium">CHIEF JUSTICE- HIGH COURT OF ANDHRA PRADESH, AMARAVATHI</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">From</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">To</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        { name: "Hon’ble Mr. Justice Dilip Babasaheb Bhosale", from: "12.05.2016", to: "30.07.2016" },
                                        { name: "Hon’ble Mr. Justice Ramesh Ranganathan", from: "31.07.2016", to: "06.07.2018" },
                                        { name: "Hon’ble Mr. Justice T. B. Radha Krishnan", from: "07.07.2018", to: "31.12.2018" },
                                        { name: "Hon’ble Mr. Justice C. Praveen Kumar", from: "01.01.2019", to: "06.10.2019" },
                                        { name: "Hon’ble Mr. Justice J. K. Maheshwari", from: "07.10.2019", to: "04.01.2021" },
                                        { name: "Hon’ble Mr. Justice Arup Kumar Goswami", from: "06.01.2021", to: "10.10.2021" },
                                        { name: "Hon’ble Mr. Justice Prashant Kumar Mishra", from: "13.10.2021", to: "18.05.2023" },
                                        { name: "Hon’ble Mr. Justice A.V. Sesha Sai", from: "19.05.2023", to: "27.07.2023" },
                                        { name: "Hon’ble Mr. Justice Dhiraj Singh Thakur", from: "28.07.2023", to: "Present" },
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{row.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.from}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.to}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
