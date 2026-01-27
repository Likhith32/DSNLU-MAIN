export interface MenuItem {
    label: string;
    href?: string;
    children?: MenuItem[];
    target?: string;
}

export const menuData: MenuItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "ABOUT DSNLU",
        children: [
            {
                label: "About",
                children: [
                    { label: "Logo-and-motto", href: "/logo-and-motto" },
                    { label: "DSNLU Act", href: "/dsnlu-act" },
                    { label: "DSNLU Service Regulations", href: "/dsnlu-service-regulations" },
                    { label: "Overview", href: "/about-dsnlu" },
                    { label: "Vision", href: "/vision-mission" },
                    { label: "Objectives", href: "/objectives" },
                ],
            },
            { label: "Visitor", href: "/visitor" },
            { label: "Chancellor", href: "/chancellor" },
            { label: "Vice Chancellor", href: "/vice-chancellor" },
            { label: "Registrar", href: "/registrar" },
            {
                label: "Authorities",
                children: [
                    { label: "General Council", href: "/general-council" },
                    { label: "Executive Council", href: "/executive-council" },
                    { label: "Academic Council", href: "/academic-council" },
                    { label: "Planning And Monitoring Board", href: "/planning-and-monitoring-board" },
                    { label: "Finance Committee", href: "/finance-committee" },
                    { label: "Infrastructure Monitoring And Development Committee", href: "/infrastructure-monitoring-and-development-committee" },
                ],
            },
            { label: "BCI Affiliation", href: "https://dsnlu.ac.in/storage/2022/12/BCI-Affiliation-Approval.pdf", target: "_blank" },
            { label: "IQAC", href: "/iqac" },
            { label: "RTI ACT", href: "/rti-act" },
            { label: "DSNLU in News", href: "/dsnlu-in-news", target: "_blank" },
            { label: "Archives", href: "/archives-notifications" },
        ],
    },
    {
        label: "ACADEMICS",
        children: [
            { label: "Professor Emeritus", href: "/academics/professor-emeritus" },
            { label: "Visiting Faculty", href: "/academics/visiting-faculty" },
            { label: "Faculty", href: "/academics/faculty" },
            {
                label: "Courses",
                children: [
                    { label: "03 Year LL.B", href: "/academics/3-year-llb" },
                    { label: "B.A., LL.B. (Hons.)", href: "/academics/ba-llb-hons" },
                    { label: "LL.M.", href: "/academics/llm" },
                    {
                        label: "Ph.D",
                        children: [
                            { label: "Ph.D. Regulations", href: "https://dsnlu.ac.in/storage/2023/12/Ph.D-Regulations_.pdf", target: "_blank" },
                        ],
                    },
                    {
                        label: "LL.D",
                        children: [
                            { label: "LL.D.-Regulations", href: "https://dsnlu.ac.in/storage/2023/12/LL.D.-Regulations_.pdf", target: "_blank" },
                        ],
                    },
                ],
            },
            {
                label: "Academic Calendar",
                children: [
                    { label: "5 Year B.A., LL.B.(Hons.) Academic Calendar 2025-26", href: "https://dsnlu.ac.in/storage/2025/06/Academic-Calendar-5Year-BA-LLB-Hons-2025-26.pdf", target: "_blank" },
                    { label: "3 Year LL.B. Academic Calendar for the AY- 2025-26", href: "https://dsnlu.ac.in/storage/2025/07/3-LL.B.-Academic-Calendar-2025-26.pdf" },
                    { label: "One Year LL.M. Academic Calendar 2025-26", href: "https://dsnlu.ac.in/storage/2025/07/One-Year-LL.M.-Academic-Calendar-2025-26.pdf", target: "_blank" },
                ],
            },
            {
                label: "Examinations",
                children: [
                    { label: "Examination-Regulations", href: "https://dsnlu.ac.in/storage/2022/12/EXAMINATION-regulations-Final-1.pdf", target: "_blank" },
                    { label: "Examination Rules", href: "https://dsnlu.ac.in/storage/2023/01/2.EXAM-RULES-DSNLU-2018.pdf", target: "_blank" },
                    { label: "Examination Results", href: "/results" },
                    { label: "Certificate verification", href: "/certificate-verification" },
                ],
            },
            { label: "Membership", href: "/membership" },
        ],
    },
    {
        label: "STUDENTS",
        children: [
            { label: "Placement and Internship", href: "/placement-and-internship" },
            { label: "Student Code of Conduct", href: "/student-code-of-conduct" },
            { label: "Student Welfare Cell", href: "/student-welfare-cell" },
            {
                label: "SC/ST Cell",
                children: [
                    { label: "About Cell", href: "/sc-st-cell" },
                    { label: "Committee", href: "/sc-st-cell/committee" },
                    { label: "Activities", href: "/sc-st-cell/activities-of-the-sc-st-cell" },
                    { label: "Safeguards", href: "/sc-st-cell/constitutional-safeguards-and-legislation-for-scs-sts" },
                    { label: "Grievance Redressal", href: "/sc-st-cell/grievance-redressal" },
                    { label: "Contact", href: "/sc-st-cell/contact" },
                ],
            },
            {
                label: "Hostel Rules",
                children: [
                    { label: "Rules and Regulations", href: "https://dsnlu.ac.in/storage/2023/11/Hostel-Rules.pdf", target: "_blank" },
                    { label: "Girls Hostel Manual", href: "https://dsnlu.ac.in/storage/2022/12/DSNLU-Hall-of-Residence-for-Girls-Manual.pdf", target: "_blank" },
                ],
            },
            {
                label: "Statutory Committees",
                children: [
                    { label: "DSNLU Centres & Committees", href: "https://dsnlu.ac.in/storage/2024/12/Centres-Committees-01.12.24-Revised-latest.pdf" },
                    { label: "Anti-Ragging", href: "/anti-ragging-cell" },
                    {
                        label: "Internal Complaints Committee",
                        children: [
                            { label: "Committee Members", href: "/internal-complaints-committee-members" },
                            { label: "Rules", href: "https://dsnlu.ac.in/storage/2022/12/DSNLU-ICC-Rules_1-1.pdf", target: "_blank" },
                        ],
                    },
                ],
            },
            {
                label: "Committees and Societies",
                children: [
                    {
                        label: "Legal Services Committee",
                        children: [
                            { label: "About Legal Services Committee (LSC)", href: "/about-legal-services-committee-lsc" },
                            { label: "Legal Services Committee", href: "/legal-services-committee" },
                        ],
                    },
                    { label: "Sports Committee", href: "/sports-committee" },
                    {
                        label: "Cultural",
                        children: [
                            { label: "Cultural Gallery", href: "https://dsnlu.ac.in/storage/2023/01/Culturelas.pdf", target: "_blank" },
                        ],
                    },
                    {
                        label: "Moot",
                        children: [
                            { label: "Moot and Advocacy Society (MAS)", href: "/moot-and-advocacy-society-mas" },
                            { label: "Moot Achievements", href: "/moot-achievements" },
                        ],
                    },
                ],
            },
            {
                label: "ALUMNI",
                children: [
                    { label: "Alumni Relations Committee", href: "/alumni-relations-committee" },
                    { label: "DSNLU Alumni", href: "/dsnlu-alumni-association" },
                ],
            },
            {
                label: "Student Activities",
                children: [
                    { label: "Student Newsletter", href: "/student-newsletter" },
                    { label: "SNL-DSNLU", href: "/about-the-newsletter" },
                    { label: "Drishtikon", href: "/drishtikon" },
                    {
                        label: "Society for Paper Publications",
                        children: [
                            { label: "SFPP Blog", href: "/sfpp-blog" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: "LIBRARY",
        children: [
            { label: "About-Library", href: "/about-library" },
            {
                label: "Resources",
                children: [
                    { label: "Print Resources", href: "/print-resources" },
                    {
                        label: "Digital Resources",
                        children: [
                            { label: "E-journals", href: "/e-journals" },
                            { label: "E-Books", href: "/e-books" },
                            { label: "E Database", href: "/e-database" },
                        ],
                    },
                ],
            },
            { label: "Library Regulations", href: "/library-regulations" },
            { label: "Anti-Plagiarism Software", href: "https://www.turnitin.com/login_page.asp?lang=en_us", target: "_blank" },
            { label: "Knimbus (Remote Access)", href: "https://dsnlu.knimbus.com/", target: "_blank" },
            { label: "Library OPAC", href: "http://14.139.208.19", target: "_blank" },
        ],
    },
    {
        label: "PROGRAMS",
        children: [
            { label: "Guest lectures", href: "/guest-lectures" },
            { label: "Seminars & Conferences", href: "/seminars-conferences" },
            { label: "Events Gallery", href: "/events-gallery-new" },
        ],
    },
    {
        label: "CENTERS",
        children: [
            {
                label: "Centre for ADR",
                children: [
                    { label: "About Center", href: "/centre-for-alternative-dispute-resolution" },
                    { label: "Blog", href: "https://adrcell.wixsite.com/cadrdsnlu" },
                ],
            },
            {
                label: "Centre For Women & Child Law",
                children: [
                    { label: "About", href: "/centre-for-women-and-child-law" },
                    { label: "CWCL Events", href: "/centre-for-women-child-law-events" },
                ],
            },
            {
                label: "Corporate Legal Research (CLR)",
                children: [
                    { label: "About CLR", href: "/corporate-legal-research-clr" },
                    { label: "Research Activities", href: "/research-activities" },
                ],
            },
            {
                label: "LEGAL INCUBATION CENTRE (LIC)",
                children: [
                    { label: "About", href: "/legal-incubation-centre-lic" },
                    { label: "EVENTS", href: "/legal-incubation-centre-lic-events" },
                ],
            },
            {
                label: "Centre for Intellectual Property Rights & Technology",
                children: [
                    { label: "ABOUT CIPR&T", href: "/about-ciprt" },
                    { label: "Journal & Publications", href: "/journal-publications" },
                    { label: "IPR Editorial & Advisory Board", href: "/editorial-board" },
                ],
            },
            {
                label: "Ambedkar Centre",
                children: [
                    { label: "About Centre", href: "/ambedkar-centre" },
                ],
            },
            {
                label: "Criminal Justice and Administration",
                children: [
                    { label: "About Center", href: "/criminal-justice-and-administration" },
                ],
            },
            {
                label: "C-MAN",
                children: [
                    { label: "About Centre", href: "/centre-for-maritime-admiralty-and-navigation-laws-c-man" },
                ],
            },
            {
                label: "Environmental Law and Climate Justice",
                children: [
                    { label: "About Center", href: "/environmental-law-and-climate-justice" },
                ],
            },
            {
                label: "Law and Public Policy",
                children: [
                    { label: "About Center", href: "https://dsnlu.ac.in/storage/2025/01/center_law_policy_brochure.pdf" },
                ],
            },
            {
                label: "Law and Literature",
                children: [
                    { label: "About Center", href: "/law-and-literature" },
                ],
            },
            {
                label: "Human Rights & Duties",
                children: [
                    { label: "About Center", href: "/human-rights-duties" },
                ],
            },
            {
                label: "Centre for International Law and Allied Disciplines (CILAD)",
                children: [
                    { label: "About Centre", href: "/centre-for-international-law-and-allied-disciplines-cilad" },
                ],
            },
            {
                label: "Fashion, Media and Entertainment Laws",
                children: [
                    { label: "About Center", href: "/fashion-media-and-entertainment-laws" },
                ],
            },
            {
                label: "Banking and Finance Law & Policy",
                children: [
                    { label: "About Center", href: "/banking-and-finance-law-policy" },
                ],
            },
            {
                label: "Sports Law & Policy Centre",
                children: [
                    { label: "About Center", href: "/sports-law-policy-centre" },
                ],
            },
            {
                label: "Training, Research and Innovation in Advocacy & Litigation (C-TRIAL)",
                children: [
                    { label: "About Center", href: "/training-research-and-innovation-in-advocacy-litigation-c-trial" },
                ],
            },
            {
                label: "Centre for Aviation and Space Laws (CAS-L)",
                children: [
                    { label: "About Center", href: "/centre-for-aviation-and-space-laws-cas-l" },
                ],
            },
            {
                label: "INTERNATIONAL CENTRE FOR MSMEs (ICMSME)",
                children: [
                    { label: "About Center", href: "/international-centre-for-msmes-icmsme" },
                ],
            },
        ],
    },
    {
        label: "PUBLICATIONS",
        children: [
            { label: "Publications", href: "/dsnlu-publications" },
            {
                label: "Journals",
                children: [
                    { label: "DSNLU Journal of Science, Technology and Law", href: "/dsnlu-journal-of-science-technology-and-law-about" },
                    { label: "We the People DSNLU Journal of Social Sciences", href: "/about-the-journal" },
                    { label: "DAMODARAM SANJIVAYYA NATIONAL LAW Journal (DSNLJ)", href: "/about-damodaram-sanjivayya-national-law-journal-dsnlj" },
                    { label: "JALAF- CADR", href: "/jalaf-cadr" },
                ],
            },
            { label: "WAVES News-Letter", href: "/waves-news-letter" },
        ],
    },
    {
        label: "INFRASTRUCTURE",
        children: [
            { label: "Infrastructure", href: "/infrastructure" },
            { label: "Guest House", href: "/guest-house" },
        ],
    },
    {
        label: "COMPLAINTS",
        children: [
            { label: "Complaints", href: "/complaints" },
            { label: "UGC-Grievance Redressal", href: "/ugc-redressal-grievance" },
            { label: "Anti Ragging Contact Details", href: "/anti-ragging-contact-details" },
        ],
    },
];
