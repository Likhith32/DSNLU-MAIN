"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function LibraryRegulationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            {/* Banner Section */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative container mx-auto flex h-full flex-col justify-center px-4 text-white">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                        LIBRARY REGULATIONS
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            LIBRARY REGULATIONS
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-8 text-slate-700 leading-relaxed">

                        {/* Admission */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                ADMISSION TO THE LIBRARY
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>Registration is must to be a Library member prior to using the Library resources.</li>
                                <li>Library membership cum- RFID card is to be shown at entrance or counter when required.</li>
                                <li>Every Member/user while entering the library should sign and fill the necessary information in Visitor Register kept at the entrance.</li>
                                <li>Students should keep their personal documents/belongings at property counter provided in the library, Except Laptops, no personal books, bags, etc., are allowed inside the library.</li>
                                <li>The Library is open to only its benefited members of the University, including Students, Researchers, and Staff of the University.</li>
                                <li>The Visitors shall only be allowed to access the Library only after seeking written permission from the competent authority (Vice-Chancellor/Registrar).</li>
                            </ul>
                        </section>

                        {/* General Regulations */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                GENERAL REGULATIONS
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>All users shall observe the Regulations of Library.</li>
                                <li>All users shall maintain silence within Library Premise.</li>
                                <li>No books or material shall be carried / taken out of the library without the knowledge of the Librarian In-Charge / Library staff, which will amount to theft of the university property.</li>
                                <li>Staying in groups, Discussions, Talking, Sleeping etc. is strictly prohibited.</li>
                                <li>Eatables/drinks are not allowed inside the Library.</li>
                                <li>Mobile Phones are not allowed inside the library. Using mobile phones and audio instruments with or without speaker or headphone is strictly prohibited in the library premises. Any violation will entail a fine of Rs. 100/- for the first act & fine will be twice the amount for any subsequent acts.</li>
                                <li>Do not keep money or valuables in bags. The University / Library staff will not be responsible for any loss of valuables.</li>
                                <li>Library staff may request any user to leave the premises if found to be violating any of the Library Regulations.</li>
                                <li>Any Violation of the DSNLU Library Regulations shall lead to forfeiture of the membership of concerned member.</li>
                                <li>The Library documents must be returned to the Library on the last working day during vacations.</li>
                                <li>All readers/users shall leave the library 10 minutes before the closing time.</li>
                            </ul>
                        </section>

                        {/* Circulation / Loan */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                CIRCULATION / LOAN
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>Period of loan is 10 days for students; overdue charges will be levied from the borrowers after the due date.</li>
                                <li>Students should produce their Identity-cum-RFID card for all transactions in the Library documents.</li>
                                <li>The user shall be responsible for loan documents issued on his/her account. The books issued on individual accounts is non-transferable.</li>
                                <li>Identity-cum-Library Cards are non-transferable.</li>
                                <li>No library books shall be issued during vacations.</li>
                                <li>Books on Loan shall be returned on due date from date of issue.</li>
                                <li>Books/Documents from reference collection shall be issued on special permission.</li>
                                <li>Renewal of books will only be done if not reserved by other members / users.</li>
                                <li>Books can be renewed once for three days in case of no reservation.</li>
                                <li>Library document /book on loan could be recalled before due date of return.</li>
                            </ul>
                        </section>

                        {/* Overdue Charges */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                OVERDUE CHARGES
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>The borrower of the Library books would be liable to pay fine as specified below:</li>
                                <li>The overdue charges for first fifteen days are Rs. 2/- per day.</li>
                                <li>Between fifteen to sixty days the overdue charges will be Rs. 3/- per day.</li>
                                <li>Above 60 days the charges will be Rs. 10/- per day</li>
                            </ul>
                        </section>

                        {/* Loss or Damage */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                LOSS OR DAMAGE OF THE LIBRARY BOOKS/DOCUMENTS
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>Borrower and Circulation desk staff shall check the book carefully and if any defect is found it should be brought to the notice of the Librarian In-Charge.</li>
                                <li>Lost/damaged book of the Library must be reported in writing to the University</li>
                                <li>Authorities by the Librarian In-Charge. The borrower has to replace the book at his/her own cost by a new book of the same or latest edition.</li>
                                <li>In case if the lost/damaged book is not available with the vendor/publisher, the borrower shall be liable to pay two times (double the cost) of the books with applicable fine as per regulations.</li>
                                <li>Borrowers shall keep the books in good condition. Making marks with pen/pencil, tearing of taking out pages of book or spoiling the book will amount to causing damages to the book.</li>
                                <li>Duplicate membership/Library cum RFID card will be issued @Rs. 200/- on production of “Lost Information Report” copy to the Librarian In-Charge.</li>
                                <li>In case of failure to return issued books/library documents, the authority may take appropriate action.</li>
                            </ul>
                        </section>

                        {/* No Dues Certificate */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                NO DUES CERTIFICATE
                            </h3>
                            <p>
                                Students/faculty members shall be required to clear their dues from the library at the time of leaving the University. Only after returning of issued library documents /paying any dues by students/faculty members along with Library cum identity card, “No Due” certificate will be issued by the Library.
                            </p>
                        </section>

                        {/* Working Hours */}
                        <section>
                            <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                WORKING HOURS
                            </h3>
                            <p>
                                Library will be open from 8.00AM to 12.00 midnight in the session and 9.00am to 5.00pm on weekend & Holidays. The Library remains closed on public holidays.
                                <br />
                                The Library counter remains open from 09.00 a.m. to 08.00 p.m. from Monday to Friday in addition from 10.00 a.m. to 04.00 p.m. on Saturday & Sunday.
                            </p>
                        </section>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
