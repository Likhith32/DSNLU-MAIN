"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";

export default function StudentCodeOfConductPage() {
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
                        STUDENT CODE OF CONDUCT
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-md">
                    <CardContent className="p-8 text-slate-700 leading-relaxed space-y-6">

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">PREAMBLE</h2>
                            <p>
                                All members of the family of Damodaram Sanjivayya National Law University (DSNLU) play a pivotal role in keeping the commitments of the university by demonstrating integrity and respect in their daily activities and in their performance of their responsibilities. The student code of conduct (hereinafter referred to as the “Code”) is established to foster and protect the core missions of the DSNLU and to promote the scholarly and civic development of the university’s students in a safe and secure learning environment and to protect the people, properties, and processes that support its missions. However, the establishment and maintenance of a community where there is freedom to teach and to learn is dependent on maintaining an appropriate sense of order that allows for the pursuit of these objectives in an environment that is both safe and free of invidious disruption.
                            </p>
                            <p className="mt-4">
                                All officers of the university, faculty, staff, students, and affiliates are responsible for sustaining the highest ethical standards of the university and the general public in which all of us function. The DSNLU values integrity, honesty and fairness and strives to integrate these values to its teaching, research, and any practices in connection to the University. The students shall have commitment to upholding the ethical, professional, and legal standards as the basis for the daily and long-term decisions and actions. We must be cognizant of and comply with the relevant policies, standards, laws, and regulations that guide our work. We are individually accountable for our own actions and, as members of the University, are collectively accountable for upholding these standards of behaviour and for compliance with all applicable laws and policies. All the members of the university pledge to strive at all times to maintain the highest standards of quality and integrity.
                            </p>
                            <p className="mt-4">
                                DSNLU is committed to the principle of treating each member of the university and the general public fairly and with respect and encourages such behaviour. DSNLU prohibits discrimination and harassment and provides equal opportunities for all members and applicants regardless of their age, race, sex, colour, religion, national origin, physical or mental disability, medical condition, sexual orientation, gender identity, or any other characteristic protected by law. DSNLU shall take prompt action to cease the offending conduct, prevent its recurrence and hold responsible members involved in such violation.
                            </p>
                            <p className="mt-4">
                                The Code applies to individual all students, which includes all persons taking programmes of the University, either fulltime or part-time, pursuing undergraduate, Post graduate, professional studies, to persons who withdraw after allegedly violating the Code, who are not officially enrolled for a particular semester or term, but have a continuing relationship with the University, or who have been notified of their acceptance for admission are considered as ‘students’ and extends to any University owned or controlled property, or University- sponsored Programmes/events. In some circumstances, Code jurisdiction also extends to off-campus behaviour. Students may be separately liable for their behaviour in criminal or civil proceedings regardless of whether their behaviour violates the student conduct code. The Code applies to all locations of the university.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">APPLICABILITY</h2>
                            <p>The Code applies to the on-campus conduct of all students at the main campus of the university and all the locations. This is applicable to the off campus conduct of students in direct connection with:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Academic course requirements or any credit-bearing experiences, such as internships, field/study trips, student exchange programmes, etc.</li>
                                <li>Any activity supporting the pursuit of a degree, such as research at another institution or a professional practise assignment, including Moot Court and allied activities, Court Visits/Legal Aid Programmes.</li>
                                <li>Any activity sponsored, conducted, or authorized by the university or by registered student societies, committees, or organizations.</li>
                                <li>Any activity that causes substantial destruction of property belonging to the university or members of the university or causes serious harm to the health or safety of members of the university.</li>
                                <li>Any activity in which a police report has been filed, a summons or indictment has been issued, or an arrest has occurred for any act or omission.</li>
                            </ul>
                            <p className="mt-4">
                                Students continue to be subject to the laws of the land while at university, and violations of those laws may also constitute violations of the code. In such instances, the university may proceed with university disciplinary action under the code independently of any criminal proceeding involving the same conduct and may impose sanctions for violation of the code even if the criminal proceeding is not yet resolved.
                            </p>
                            <p className="mt-2">This Code shall apply to conduct and incidents which has occurred after 6th July 2015.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">RESPONSIBILITIES OF STUDENTS</h2>
                            <p>
                                Students are members of the university community and citizens of the state. As citizens, students are responsible for the community of which they are a part, and, as students, they are responsible for the academic community of the university. Admission to the university carries with it the presumption that students will conduct themselves as responsible members of the academic community. As a condition of enrolment, all students assume responsibility to observe standards of conduct that will contribute to the pursuit of academic goals and to the welfare of the academic community. They are expected to practise high standards of academic and professional honesty and integrity and also to respect the rights, privileges, and property of other members of the academic community and society. They should refrain from any conduct that would interfere with university functions or endanger the health, welfare, or safety of other people. Any violation of the Code about which the student(s) has personal knowledge must be reported. As a citizen of the state, a student should not discriminate on the basis of race, colour, creed, caste, age, religion, gender, national or ethnic origin, marital status, sexual preference, physical disability, or any other legally protected status. They should always conduct themselves in a manner which is not prejudicial to any law of the land. Their conduct should aim to achieve the meaning, mandate and manifestation as enshrined in the Constitution of India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">DEFINITIONS</h2>
                            <div className="space-y-4">
                                <p><strong>A ‘member of staff’</strong> should be understood as including but not limited to any individual who is working within the University under a formal contract of employment or as a casual paid worker or a graduate student working as teaching assistants to whom the University offers any of the privileges or facilities normally available to its employees.</p>
                                <p><strong>“Accused Student”</strong> means any student accused of violating the Student Code of Conduct.</p>
                                <p><strong>“Academic Misconduct”</strong> means the violation of university policies involving academic integrity and include:</p>
                                <ul className="list-[lower-alpha] pl-6 space-y-1">
                                    <li>Intentional tampering with grades, resubmitting assignments for more than one class without the permission of the faculty members.</li>
                                    <li>Intentionally taking part in obtaining or distributing any part of a test that has not been administered.</li>
                                    <li>Cheating.</li>
                                    <li>Plagiarism.</li>
                                    <li>Knowing furnishing false information to a University Official.</li>
                                    <li>Fabrication.</li>
                                    <li>Forgery, alteration or unauthorized use of University documents, records, keys student identification, key cards or services.</li>
                                    <li>Creation or distribution of false identification and</li>
                                    <li>Failure to comply with the terms of any sanction imposed in accordance with the Student Code of Conduct.</li>
                                </ul>

                                <p><strong>“Cheating”</strong> means any act of deception by which a student misrepresents or misleadingly demonstrates that he or she has mastered information on an academic exercise that he or she has not mastered. Cheating include but are not limited to:</p>
                                <ul className="list-[lower-alpha] pl-6 space-y-1">
                                    <li>Giving or receiving unauthorized help in an academic exercise.</li>
                                    <li>Use of sources or resources beyond those authorized by the Faculty Members in writing papers, preparing reports, solving problems, or carrying out other assignments,</li>
                                    <li>Acquisition, without permission, of tests or other academic material belonging to a member of the University faculty or staff, and</li>
                                    <li>Engaging in any behavior specifically prohibited by a faculty member in the course syllabus or class discussion.</li>
                                </ul>

                                <p><strong>“Complainant”</strong> means any person who submits a complaint alleging that a student violated the Code/Rules/Regulation of the University. The Complainant need not be a person who was the victim of the alleged violation.</p>
                                <p><strong>“Drug”</strong> means a controlled substance or its immediate precursor as defined under section 2 of the Narcotic Drugs and Psychotropic Substances Act, 1985.</p>
                                <p><strong>“Fabrication”</strong> means the intentional use of information that the author has invented when he or she states or implies otherwise, or the falsification of research or other findings with the intent to deceive.</p>

                                <p><strong>“Harassment”</strong> means</p>
                                <ul className="list-[lower-alpha] pl-6 space-y-1">
                                    <li>Intentionally subjecting a person to offensive physical contact.</li>
                                    <li>Unreasonable insults, gestures, or abusive words, in the immediate presence, and directed to, another person that may reasonably cause emotional distress or provoke a violent response (including but not limited to electronic mail, conventional mail and telephone) except to the extent such insults, gestures or abusive words are protected expression or</li>
                                    <li>Other types of prohibited discrimination, discriminatory harassment, and sexual harassment as defined.</li>
                                </ul>

                                <p><strong>“Plagiarism”</strong> means using the ideas or writings of another as one’s own and includes, but is not limited to:</p>
                                <ul className="list-[lower-alpha] pl-6 space-y-1">
                                    <li>The use, by paraphrase or direct quotation, of the published or unpublished work of another person without full and clear acknowledgement and</li>
                                    <li>The unacknowledged use of materials prepared by another person or agency engaged in the selling of term papers or other academic materials.</li>
                                </ul>

                                <p><strong>“Policy”</strong> means the written rules and regulations of the University and includes polices made from time to time</p>
                                <ul className="list-[lower-alpha] pl-6 space-y-1">
                                    <li>The Student Code of Conduct.</li>
                                    <li>Rules of Hostel/Residence.</li>
                                    <li>Information posted by the University on its web pages.</li>
                                    <li>Computer Acceptable Use Policy .</li>
                                    <li>Library Rules</li>
                                    <li>Student Handbook (if any) and</li>
                                    <li>University Administrative Rules.</li>
                                </ul>

                                <p><strong>“Officers of the University”</strong> means a person having assigned University responsibilities who is performing their University assignment including the Vice Chancellor, Registrar, Head, Academic Affairs and Faculty Coordinators of the Societies and Committees established for smooth functioning of the University.</p>
                                <p><strong>“University Premises”</strong> includes all land, buildings or grounds owned, leased, operated, controlled or supervised by the University including adjacent sidewalks and streets.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">RAGGING</h2>
                            <h3 className="text-xl font-semibold text-dsnlu-dark-blue mb-2">PROHIBITION OF RAGGING:</h3>
                            <p>
                                Ragging is strictly prohibited on campus. As per the directions of the Hon’ble Supreme Court in the matter of “University of Kerala v/s. Council, Principals, Colleges and others” and the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 and the Andhra Pradesh Prohibition of Ragging Act, 1997, any conduct by any student or students amounting to ragging is strictly prohibited, attracting penal provisions. Ragging includes display of noisy, disorderly conduct, teasing, rough or rude treatment, indulging in rowdy, undisciplined and obscene activities which cause or are likely to cause annoyance, undue hardship, physical or psychological harm or mental trauma or raise apprehension or fear in a fresher or other students, or forcing a student to do any act which such a student is not willing to do or which cause him/her shame or embarrassment or danger to his/her life or limb, or indulging in eve teasing. University Administration views these actions as serious issues for disciplinary proceedings leading to expulsion from the University. Any case of ragging should be brought to the notice of the authorities. Anyone indulging in ragging is liable to disciplinary action, including rustication from the university, and to criminal prosecution under the relevant laws. For details, read The UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 and The Andhra Pradesh Prohibition of Ragging Act, 1997.
                            </p>

                            <h3 className="text-xl font-semibold text-dsnlu-dark-blue mt-4 mb-2">PUNISHMENT FOR RAGGING:</h3>
                            <p>
                                Whoever directly or indirectly commits, participates in, abets or instigates ragging within or outside any educational institution shall be suspended, expelled or rusticated from the institution and shall also be liable to fine which may extend to Rs.10,000/-. The punishment may also include i) cancellation of admission, ii) suspension from attending classes iii) withholding / withdrawing fellowship / scholarship and other financial benefits, withholding or cancelling the results. The decision to suspend or expel or other punishment shall be taken by the Head of the Institution.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">PREVENTION SEXUAL HARASSMENT</h2>
                            <p>
                                In compliance with the requirements of the Supreme Court of India and the University Grants Commission, Sexual Harassment on Campus is prohibited and will be suitably punished as laid down in the Code. To facilitate enquiry and address the grievances arising from the violation of this Code, the Vice Chancellor shall constitute the Sexual Harassment Redressal Committee consisting of members of the faculty and an outsider experienced in dealing with such matters. Sexual Harassment shall have meaning as defined under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">UNDERTAKING</h2>
                            <p>
                                Every student shall give an undertaking in writing to the Head of the Institution at the time of admission or commencement of the academic session every year to the effect that (s)he shall neither indulge himself/herself or instigate any other student in ragging or create nuisance to the academic atmosphere of the Institution.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">TOBACCO, ALCOHOLS AND DRUGS PROHIBITED</h2>
                            <p>
                                DSNLU campus (Academic Block, Hostels) is strictly non-smoking zone and consumption of any type of Alcohol or other drugs of narcotic nature is strictly prohibited. Possession and consumption of tobacco, liquor, drugs, narcotics etc. is prohibited on campus. Anyone found in possession of or consuming or abetting consumption of tobacco, liquor, drugs and narcotics or any other prohibited drug is liable to punishment including rustication from the University.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">DECORUM</h2>
                            <p>
                                Students are expected to behave in a decorous manner with fellow students in general and with student of the opposite sex in particular, on and outside the campus. In decorous behavior with students, Administrative staff or Faculty will be seriously viewed. Students must wear University Uniform on Tuesdays and when required by the University. Students are expected to dress decently on and outside the campus. Indecorous behavior shall be seriously viewed. Any disorderly conduct of any student/students including creating noise or conduct that results in unreasonable annoyance or engaging in behavior that disrupts University function or Tampering with fire-fighting equipment, turning in a false alarm, or engaging in conduct that constitutes a significant fire hazard any such behavior/misconduct shall be referred to the disciplinary committee of the University. The recommendation of the disciplinary committee shall include rustication of the student/students from the University.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">THEFT, PROPERTY DAMAGE, MISAPPROPRIATION AND VANDALISM</h2>
                            <p>
                                Any damage to the property of the University will be severely dealt with. Anyone damaging any property in the University or the Hostels is liable to punishment which may include fine, suspension from hostel or even from the University. The cost of the damaged property shall be recovered from the resident(s) guilty of the damage to such property. Any student shall not commit any theft or embezzlement of, damage to, destruction of, unauthorized possession of, or wrongful sale or gift of property University including library material or fellow student’s property. Any student shall not misappropriate or fail to account for any funds advanced to the student by the University.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">STUDENT LEAVING STATION/TRAVELLING OUT OF STATION</h2>
                            <p>
                                Students are generally not permitted to take leave during working days. In exceptional cases, on a written request made by the Parent/Guardian addressed to the Head, Academic Affairs / the Faculty Warden and on the approval, may avail leave. Student(s)/Resident(s) shall leave the station only with prior intimation to the Faculty Class Coordinator/Faculty Warden respectively. Faculty Coordinator/Faculty Warden shall inform the Head, Academic Affairs of any such leave of absence. Any student(s) may visit their homes or local guardians after obtaining written permission. Student(s) absence may be reported to the parents immediately. The resident(s) shall apply for leave of absence to the Faculty Warden. However, Student(s) / Resident(s) are not eligible for attendance during their absence unless provided under the Examination Rules.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">HOSTEL</h2>
                            <p>
                                Student(s) shall return to the hostels on or before 9.00 p.m. Male students of the University are not permitted to enter the hostels of Girls and Girl students are not allowed to enter the hostels of Boys. University shall frame separate rules for hostels.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">USE OF MOBILES</h2>
                            <p>
                                The use of cellular/mobile phone(s) by the students is permitted with the view that they can be in touch with their parents. In addition, it also facilitates to have correspondence with the University Administration in case of need. Cellular/Mobile phone(s) shall not be used in the academic block. The student(s) are required to keep their phones in silent/vibrating mode on the campus. Any student(s) using mobile phone during class hours/library precincts shall be liable to a fine of Rs. 500/- for the first instance and double the fine for any subsequent violation. No Officer of the University / Faculty Member / Administrative Staff shall be contacted over mobile phone beyond the working hours of the University unless there exist an emergency.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">TRAVEL CONCESSION</h2>
                            <p>
                                The Student travel concession for Air/Railway/Road transport shall be available only to and from the University to the place of residence for the vacation as notified in the academic calendar. The student(s) representing the University may avail travel concession for any academic/extra-curricular programmes as approved by the respective Air/Railway/Road transport departments.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">WEAPONS</h2>
                            <p>
                                Possession, use, or threatened use of a weapon, ammunition, or any object or substance used as a weapon will entail liability for disciplinary action.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">RECORDING OF AUDIO/VIDEO/IMAGES WITHOUT KNOWLEDGE</h2>
                            <p>
                                Using electronic or other means to make any audio / video or photographic record of any person in a location where there is a reasonable expectation of privacy without the person’s prior knowledge, when such a recording is likely to cause injury, distress, or damage to reputation is prohibited. This includes, but is not limited to, taking video or photographic images in shower/locker rooms, residence hall rooms, and restrooms. The storing, sharing, and/or distributing of such unauthorized records by any means is also prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">CAUSING DISREPUTE TO OTHER STUDENTS/FACULTY MEMBERS/STAFF OF THE UNIVERSITY</h2>
                            <p>
                                Engaging or inciting other students to engage by any means whatsoever and performing or attempting to perform an act, which brings disrepute to other students / Faculty Members / Staff of the University. In addition, student(s) knowingly does or attempts to do or assist seriously and unreasonably to disrupt, interfere with, or attempt to disrupt or interfere with the conduct of classes or any other normal or regular activities of the University shall be treated as a serious violation of the Code.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">FAILURE TO COMPLY WITH DIRECTIVES OF THE OFFICERS OF THE UNIVERSITY/FACULTY MEMBERS</h2>
                            <p>
                                Failure to comply with legitimate directives of authorized officers of the university, law enforcement agency / Faculty Members in the performance of their duties or violation of the terms of a disciplinary sanction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">CONTRACTS</h2>
                            <p>
                                Students are prohibited from entering into verbal or written agreements or contracts that purport to bind, obligate, or create liability of any kind for the University. The University will hold all such students individually liable for any financial or legal consequences or damages that may result from such unauthorized actions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">ABUSE OF ELECTRONIC COMMUNICATION/COMPUTER USE</h2>
                            <p>
                                Violating the University’s Acceptable Use of Computer Resources policy which includes commercial or illegal use of computer resources and violation of copyright law. Using University or personal telecommunications, data communication networks for illegal or improper purposes or in violation of University regulations and policies, or related laws.
                            </p>
                            <p className="mt-2">Unacceptable uses of computing resources include:</p>
                            <ul className="list-[lower-alpha] pl-6 space-y-1">
                                <li>Use of electronic forums to violate this Code.</li>
                                <li>Sharing of accounts or computer lab passes.</li>
                                <li>Violation of electronic privacy.</li>
                                <li>Interference with computer use or operations.</li>
                                <li>Commercial or illegal use of electronic or computer resources.</li>
                                <li>Violation of copyright law or</li>
                                <li>Threats, abuse or Harassment, conduct made or transmitted via electronic forums or electronic mail.</li>
                                <li>Breaking into a system and/or accessing data files and programs without authorization.</li>
                                <li>Releasing a virus or other program that disables system performance or hinders other clients.</li>
                                <li>Exploiting security gaps.</li>
                                <li>Hindering supervisory or accounting functions of the systems.</li>
                                <li>Tapping network lines.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">ENVIRONMENTAL HEALTH & SAFETY, INCLUDING WORKPLACE HEALTH AND SAFETY</h2>
                            <p>
                                All members of the University must be committed to protecting the health and safety of its members by providing safe workplaces. All members must adhere to good health and safety practices and comply with all environmental health and safety laws and regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">MEDIA CONTACT</h2>
                            <p>
                                Students are expressly prohibited from speaking on behalf of, or for, University with any media organization or publication, or from inviting the same to any University-owned or operated property, facility, or events without the express written permission of the Registrar of the University. Any communication shall be through the Faculty Convener of the Society for Image Building and Public Relations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">ORGANIZATION AND EVENT REGISTRATION</h2>
                            <p>
                                A Student or group of Students shall not form any organization, society or organize any event or collect any fund or subscription without the specific written permission of the University.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">PRESENTING FALSE TESTIMONY</h2>
                            <p>
                                Knowingly making false statements regarding a disciplinary matter before, during or after the disciplinary adjudication process is subject to disciplinary action by the university.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">VIOLATION OF UNIVERSITY RULES</h2>
                            <p>
                                Violation of other published university regulations, policies, or rules, or violations of law will be viewed seriously and liable for appropriate disciplinary action. These university regulations, policies, or rules include, but are not limited to, those rules, which regulate dress code, which regulate submission of assignments, which regulate examinations, which prohibit the misuse of library, computing resources, laboratory (if any) and acts which amounts to sexual harassment, this code and any other rules and regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">ROLE OF THE STUDENTS IN FRAMING OF THE STUDENT CODE OF CONDUCT</h2>
                            <p>
                                Students shall have an opportunity to participate in the formulation of policies pertaining to this Code of the University. The Students may make any suggestions for the improvement of this Code. However, inclusion of any suggestions shall be with the concurrence of the Vice Chancellor.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">GRIEVANCE CELL</h2>
                            <p>
                                The University has constituted a Grievance Committee to address any grievance(s) of student(s). The student(s) are hereby informed to follow the list of committee members and the procedure for such grievances. The students shall submit their grievances to the Student Council as constituted from time to time by the University. The Student Council shall further inform the Faculty Class Coordinator who shall refer the matter to the Grievance Committee.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">REPORTING SUSPECTING VIOLATION</h2>
                            <p>
                                Students of DSNLU shall report suspected violations of applicable laws, regulations, or this Code. Violation relating to Academic and Administrative matters shall be reported to the Head, Academic Affairs and the Registrar respectively. If for any reason it is not appropriate to report suspected violations to the above said authorities it may be reported to the Vice Chancellor. The University shall promote whistle blower policy and reports may be made confidentially. However, any anonymous complaints/report shall not be entertained. The University has a right to not take any action against such anonymous complaint/report.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">PROCEDURAL PROTECTION</h2>
                            <p>Student(s) accused of violations of the Code shall have the following procedural protections:</p>
                            <ul className="list-[lower-alpha] pl-6 space-y-1">
                                <li>To be informed of the complaint and alleged misconduct upon which the complaint is based and accorded an opportunity to offer a relevant response.</li>
                                <li>To appear before the Disciplinary Committee.</li>
                                <li>To be assured of confidentiality.</li>
                                <li>Any decision shall be without any “unreasonable” delay.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">DISCIPLINARY RECORDS AND FILES</h2>
                            <p>
                                Cases referred to the Disciplinary Committee shall result in the development of a disciplinary file in the name of the accused student. If the Student is found not responsible for the complaints, the disciplinary file will become void. All disciplinary procedures and proceedings and any records thereof shall be confidential. Review of Disciplinary Action against Student(s): Any punishment may be reviewed by the disciplinary committee and the Head, Academic Affairs and with the approval of the Vice Chancellor considering the following factors:
                            </p>
                            <ul className="list-[lower-roman] pl-6 space-y-1 mt-2">
                                <li>The conduct of the Student subsequent to the nature of the violation and punishment.</li>
                                <li>The severity of any damage, injury, or harm resulting from it and</li>
                                <li>Report by the Disciplinary Committee on the accused student subsequent to the punishment.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">CONSTITUTION OF STUDENT COUNCIL</h2>
                            <p>The nomination of class representative shall be based purely on merit</p>
                            <ul className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                                <li>Students Representative from I Semester: The CLAT rank / + 2 Marks may be taken into consideration for nomination of the Class Representative (CR).</li>
                                <li>Student Representative for Rest of the Semesters: Two students from each section who has secured highest CGPA for the academic year shall be considered for nomination.</li>
                                <li>If the student scoring highest declines to be the CR, then the student next in line/rank and so on shall be nominated.</li>
                                <li>Nominated members shall constitute “The Student Council” (herein after referred as SC). The SC shall be headed by the CR of Student of the fifth year who may be designated as the “Convener” of the Student Council. Only when a student of the fifth year declines to be the Convenor then it would be student of the fourth year who shall be nominated as the Convenor.</li>
                                <li>Any student involved in any disciplinarily action (either pending or decided) stands disqualified to be the CR in the Student Council.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">FUNCTIONS AND PROCEDURE FOR STUDENT COUNCIL</h2>
                            <ul className="list-[lower-alpha] pl-6 space-y-1">
                                <li>The CR is authorized to discuss any grievance(s) with the Faculty Class Coordinator and then to the University Grievance Committee. Any grievance shall be represented in writing only. The Grievance Committee may make any recommendation to the Head, Academic Affairs.</li>
                                <li>The SC should meet under chairmanship of the Convener. The grievance(s) shall be discussed in the meeting in a democratic manner. The proceedings of the meeting shall be in writing, duly signed by all the representatives present and submitted to the concerned authorities.</li>
                                <li>The SC shall have the right to meet the Head Academic Affairs, Registrar and the Vice-chancellor in that order to communicate any grievance(s) and address issues which shall be represented in writing.</li>
                                <li>The university is authorized to call the meeting of the SC to discuss any matter relating to the academic programme or general grievances.</li>
                                <li>Students Council must abide by the rules framed by the university from time to time.</li>
                                <li>Any violation of any sort pertinent to the existing laws or any conduct that interfere with the operations of the University, such conduct to include but not limited to disruptions or obstructions of teaching, research, administration, or other activities of university shall be treated as misconduct. The SC shall discuss the grievances relating to any disruptions taking place in the university with their fellow colleagues and then represent in writing to the Head, Academic Affairs for further action. The SC shall be responsible to regulate and maintain that, any disorderly conduct including verbal abuse, inappropriate behavior by fellow students or any other misbehavior shall not be encouraged. Any decision on such matters shall be referred to the Disciplinary Committee. Any student who instigates any of the above behavior may entail suspension or rustication by the University.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">PUNISHMENT AND PENALTIES</h2>
                            <p>
                                One or more of the following punishments / penalties may be imposed when student(s) has been found to have violated this code or any other regulations from time to time by the university.
                            </p>
                            <ul className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                                <li><strong>Warning:</strong> A written letter of reprimand including marking absence for class/classes.</li>
                                <li><strong>Suspension:</strong> Terminating the student’s enrolment at the university for a specified period of time.</li>
                                <li><strong>Monetary Fines:</strong> Requiring deposit of the amount as penalty or forfeiting or adjusting the refundable amount, resulting from misconduct.</li>
                                <li><strong>Restitution:</strong> To compensate for replacement for any loss or damage to any property of the University.</li>
                                <li><strong>Confiscation:</strong> Confiscation of goods used or possessed in violation of this Code and the Regulations.</li>
                                <li><strong>Restriction of Privileges:</strong> Restriction of privileges means the denial or restriction of specified privileges, including, but not limited to, access to a student facilities, participation in any events including moot court and allied activities, Legal Aid Programmes, cultural/sports events or internship/placement programmes.</li>
                                <li><strong>Rustication/Dismissal:</strong> Sanction permanently separating student(s) from the university without opportunity to re-enrol in the future.</li>
                                <li><strong>Other sanctions:</strong> Other appropriate sanctions as may be imposed by the Competent Authority of the University singularly or in combination with any of the above-listed sanctions.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">INTERPRETATION OR APPLICABILITY OF POLICY/QUESTIONS</h2>
                            <p>
                                When question arise pertaining to interpretation or applicability of policy, any student(s) shall refer all unresolved questions and/or interpretation of laws and regulations to the office of the Head, Academic Affairs. The Head, Academic Affairs shall take any decision in consultation and concurrence of the Vice Chancellor. Any decision of the Vice Chancellor shall be final on interpretation of this code or any other Regulations of the university.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">REVISION OF THE CODE</h2>
                            <p>
                                The Code shall be continuously reviewed from time to time to make sure it is consistent with best practices.
                            </p>
                        </section>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
