"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { useAdmin } from "@/contexts/AdminContext";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollableList } from "@/components/ui/ScrollableList";
import { VideoSection } from "@/components/ui/VideoSection";
import { FeatureCards } from "@/components/ui/FeatureCards";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Gavel, FileText, Calendar, MapPin, Download } from "lucide-react";

export default function Home() {
  // ✅ Get admin mode status
  const { isAdminMode } = useAdmin();

  const carouselImages = [
    "https://dsnlu.ac.in/storage/2025/09/1.png",
    "https://dsnlu.ac.in/storage/2025/09/2.png",
    "https://dsnlu.ac.in/storage/2025/09/3.png",
    "https://dsnlu.ac.in/storage/2025/09/4-1.png",
    "https://dsnlu.ac.in/storage/2025/09/6.png",
    "https://dsnlu.ac.in/storage/2025/09/6-1.png",
    "https://dsnlu.ac.in/storage/2025/09/7.png",
    "https://dsnlu.ac.in/storage/2025/09/00.png",
    "https://dsnlu.ac.in/storage/2025/09/01.png",
    "https://dsnlu.ac.in/storage/2025/09/02.png",
    "https://dsnlu.ac.in/storage/2025/09/03.png",
    "https://dsnlu.ac.in/storage/2025/09/04.png",
    "https://dsnlu.ac.in/storage/2025/09/05.png",
    "https://dsnlu.ac.in/storage/2025/02/13-25-3.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-5.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-4.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-6.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-7.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-8.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-9.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-1.webp",
    "https://dsnlu.ac.in/storage/2025/02/13-25-2.webp",
    "https://dsnlu.ac.in/storage/2025/04/dnslu-home-page-slider-1.png",
    "https://dsnlu.ac.in/storage/2025/02/13-25-10.webp",
    "https://dsnlu.ac.in/storage/2023/01/banner123.jpg",
    "https://dsnlu.ac.in/storage/2022/12/banner-3-1.jpg",
    "https://dsnlu.ac.in/storage/2022/12/banner-4.jpg",
    "https://dsnlu.ac.in/storage/2024/06/1.png",
    "https://dsnlu.ac.in/storage/2024/06/2.png",
    "https://dsnlu.ac.in/storage/2024/10/dsnlu-b-67.png",
    "https://dsnlu.ac.in/storage/2023/12/banner-images.png",
    "https://dsnlu.ac.in/storage/2023/12/SC-Judge-Visitor-DSNLU-1.png",
    "https://dsnlu.ac.in/storage/2024/04/banner-slider-image.png",
    "https://dsnlu.ac.in/storage/2024/04/c.png",
    "https://dsnlu.ac.in/storage/2024/04/d.png",
    "https://dsnlu.ac.in/storage/2024/04/g.png",
    "https://dsnlu.ac.in/storage/2024/04/h.png",
    "https://dsnlu.ac.in/storage/2025/02/27.webp",
    "https://dsnlu.ac.in/storage/2025/02/25-1.webp",
    "https://dsnlu.ac.in/storage/2025/02/28.webp",
    "https://dsnlu.ac.in/storage/2025/02/31.webp",
    "https://dsnlu.ac.in/storage/2025/02/26.webp",
    "https://dsnlu.ac.in/storage/2025/02/29.webp",
    "https://dsnlu.ac.in/storage/2025/02/30.webp",
  ];

  const marqueeNotifications = [
    "India Today: INDIA'S BEST LAW UNIVERSITIES - 2025",
    "Refund Policy",
    "Vis Pre Moot Competition 2026: Registration Open (Oct 15 - Dec 15, 2025)",
    "CLAT 2026 Registration Extended till November 7, 2025",
    "Combined Convocation (8th-12th Batches) scheduled for September 5, 2025",
  ];

  // ✅ Static data as fallback
  const staticNotifications = [
    { title: "Subject Toppers Certificates Awardees list", link: "https://dsnlu.ac.in/storage/2025/09/Subject-Topper-Certificate-Awardees.pdf", isNew: true },
    { title: "Additional list of names considering the merit list for LL.M Batch of 2024-25", link: "https://dsnlu.ac.in/storage/2025/09/Additional-list-of-names-considering-the-merit-list-for-LL.M-Batch-of-2024-25.pdf", isNew: true },
    { title: "Chittaranjan Singha Gold Medals & DSNLU Medals LL.M of 11th and 12th Convocation.", link: "https://dsnlu.ac.in/storage/2025/09/CHITTA1.pdf", isNew: true },
    { title: "Subject Toppers List of 8th , 9th, 10th, 11th and 12th Convocations of LL.M.", link: "https://dsnlu.ac.in/subject-toppers-list-of-8th-9th-10th-11th-and-12th-convocations-of-ll-m/", isNew: true },
    { title: "Subject Toppers List of 8th , 9th, 10th, 11th and 12th Convocations of B.A.,LL.B. (Hons.)", link: "https://dsnlu.ac.in/subject-toppers-list-of-8th-9th-10th-11th-and-12th-convocations-of-b-a-ll-b-hons/", isNew: true },
    { title: "List of Gold and Silver Medal Awardees for 8th, 9th, 10th, 11th and 12th Convocations", link: "https://dsnlu.ac.in/storage/2025/08/List-of-Gold-Medals-and-Silver-Medals-Awarded-for-the-8th-to-12th-Convocations.pdf", isNew: true },
    { title: "List of Candidates Graduating (UG, PG, Ph.D. and LL.D.) for 8th, 9th, 10th, 11th and 12th Convocations", link: "https://dsnlu.ac.in/list-of-candidates-graduating-ug-pg-ph-d-and-ll-d-for-8th-9th-10th-11th-and-12th-convocations/", isNew: true },
    { title: "Convocation Circular – Additional Information", link: "https://dsnlu.ac.in/storage/2025/08/Convocation-Circular-21.08.2025.pdf", isNew: true },
    { title: "Sponsorship for Gold Medals", link: "https://dsnlu.ac.in/storage/2025/08/Gold-medals-Notice.pdf", isNew: true },
    { title: "Spot Admission Notification", link: "https://dsnlu.ac.in/storage/2025/08/Spot-Admission-Notification-Dt-13.08.2025.pdf" },
    { title: "8th, 9th, 10th, 11th and 12th Convocation Notice", link: "https://dsnlu.ac.in/storage/2025/08/Convocation-Notification.pdf", isNew: true },
    { title: "II Merit List – Vacant Seat Notification", link: "https://dsnlu.ac.in/storage/2025/07/II-Merit-List-Vacant-Seat-Notification-Dt-30.06.2025.pdf" },
    { title: "PG Merit List Vacant Seat Notification", link: "https://dsnlu.ac.in/storage/2025/07/PG-Merit-List-Vacant-Seat-Notification-21.07.2025.pdf" },
    { title: "Refund Policy", link: "https://dsnlu.ac.in/storage/2025/07/REFUND-POLICY.pdf", isNew: true },
    { title: "PG Vacant Seat Notification 2025", link: "https://dsnlu.ac.in/storage/2025/07/PG-DSNLU-Vacant-Seat-Notification-2025.pdf" },
    { title: "DSNLU (DET-2) Merit List for 3 Year LL.B. Admissions 2025-26", link: "https://dsnlu.ac.in/storage/2025/07/DET-2-Merit-List-for-3-Year-LL.B.-Admissions-2025-26.pdf" },
    { title: "Merit List – I for vacant Seats for 05 Year B.A., LL.B. (Hons.) 2025", link: "https://dsnlu.ac.in/storage/2025/07/I-Merit-List-Against-Vacant-Seat-Notification-Dt-30.06.25.pdf" },
    { title: "Foreign Citizens NRI-Resident Indians NRI – Sponsored – Merit List.2025", link: "https://dsnlu.ac.in/storage/2025/07/Foreign-Citizens-NRI-Resident-Indians-NRI-Sponsored-Merit-List.2025.pdf" },
    { title: "03 Year LL.B. Spot Admission", link: "https://dsnlu.ac.in/storage/2025/07/3Y-LL.B.-Spot-Admission-Notification-1.pdf" },
    { title: "DSNLJ CALL FOR PAPERS – BROCHURE", link: "https://dsnlu.ac.in/storage/2025/07/DSNLJ-CALL-FOR-PAPERS-FINAL-EDIT-BROCHURE.pdf", isNew: true },
  ];

  const staticResults = [
    { title: "03 Year LL.B. Odd Semester Repeat Examination Results (Semester-I), August 2025", link: "https://dsnlu.ac.in/storage/2025/10/3-Year-LL.B.-Odd-Semester-Repeat-Examination-Result-Aug-2025.pdf", isNew: true },
    { title: "B.A., LL.B. Even Semester Examination Revaluation Results (Semester-II, IV, VI, and VIII), April 2025", link: "https://dsnlu.ac.in/b-a-ll-b-even-semester-examination-revaluation-results-semester-ii-iv-vi-and-viii-april-2025/", isNew: true },
    { title: "3 Year LL.B. Even Semester Examination Results (Semester-II), July 2025", link: "https://dsnlu.ac.in/storage/2025/09/3YLL.B.-Even-Semester-Examinations-Results-July-2025.pdf", isNew: true },
    { title: "Revaluation Results of II Semester LL. M. July -2025", link: "https://dsnlu.ac.in/storage/2025/08/Revaluation-Results-of-II-Semester-LL.-M.-July-2025.pdf", isNew: true },
    { title: "LL.M. Even Semester Examination Results, July-August 2025.", link: "https://dsnlu.ac.in/storage/2025/08/LL.M.-Even-Semester-Result-July-August-2025.pdf", isNew: true },
    { title: "B.A., LL.B. Odd Semester Repeat Examination Revaluation Results, March 2025", link: "https://dsnlu.ac.in/storage/2025/07/B.A.-LL.B.-Odd-Repeat-Revaluation-Results-March-2025.pdf" },
    { title: "3 Year LL.B. Odd Semester Examination Revaluation Results (Semester-I), February 2025", link: "https://dsnlu.ac.in/storage/2025/07/3YLL.B.-Odd-Semester-Revaluation-Feb-2025.pdf" },
    { title: "LL.M. Odd Semester Examination Revaluation Results (Semester-I), January 2025", link: "https://dsnlu.ac.in/storage/2025/07/LL.M.-Semester-I-Revaluation-Result-Jan-2025.pdf" },
    { title: "B.A., LL.B. Even Semester Examinations Revaluation Results (Semester-X), April 2025", link: "https://dsnlu.ac.in/storage/2025/06/SEM-X-RV-April-2025.pdf" },
    { title: "Repeat Mid and End Semester Examination Results (Odd Semester), March – 2025", link: "https://dsnlu.ac.in/storage/2025/05/Repeat-Mid-and-End-Semester-Results-Odd-Semester-March-2025.pdf" },
    { title: "End Semester Examination Results (Even Semester), April – 2025", link: "https://dsnlu.ac.in/end-semester-examination-results-even-semester-april-2025/" },
    { title: "3 Year LL.B. Odd Semester Examinations Results, February-2025", link: "https://dsnlu.ac.in/storage/2025/03/3YLLB-ODD-Result-Feb-2025.pdf" },
    { title: "LL.M. Odd Semester Examinations Results, January-2025", link: "https://dsnlu.ac.in/storage/2025/03/LL.M.-Odd-Semester-Result-Jan-2025.pdf" },
    { title: "B.A., LL.B. Odd Semester Examinations Revaluation Results, November 2024", link: "https://dsnlu.ac.in/b-a-ll-b-odd-semester-examinations-revaluation-results-november-2024/" },
    { title: "B.A., LL.B. Repeat Even Semester Examinations Revaluation Results, October-2024", link: "https://dsnlu.ac.in/storage/2025/01/Even-Semester-Repeat-Revaluation-Result-Oct-2024.pdf" },
  ];

  const [notifications, setNotifications] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);

  // ✅ CORRECTED LOGIC: Use DB if exists, else fallback to static
  useEffect(() => {
    const fetchData = async () => {
      const dbNotifs = await db.notifications.getAll();
      if (dbNotifs && dbNotifs.length > 0) {
        setNotifications(dbNotifs);
      } else {
        setNotifications(staticNotifications);
      }

      const dbResults = await db.results.getAll();
      if (dbResults && dbResults.length > 0) {
        setResults(dbResults);
      } else {
        setResults(staticResults);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-[72px] md:pt-[88px]">
      <Marquee notifications={marqueeNotifications} speed={30} />

      {/* Hero Section with Carousel */}
      <HeroCarousel images={carouselImages} />

      {/* Main Content Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* VC Message Column */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-white/20 overflow-hidden flex flex-col items-center p-6 text-center">
                <h2 className="text-xl font-bold text-dsnlu-dark-slate mb-4 border-b-2 border-dsnlu-azure pb-2 inline-block">
                  VC MESSAGE
                </h2>
                <Link href="/vice-chancellor" className="group block w-full">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-dsnlu-azure/20 group-hover:border-dsnlu-azure transition-colors">
                    <Image
                      src="https://dsnlu.ac.in/storage/2024/04/vcdsnlu.jpeg"
                      alt="Prof. D. Surya Prakasa Rao"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-dsnlu-dark-slate group-hover:text-dsnlu-azure transition-colors">
                    Prof. D. Surya Prakasa Rao
                  </h4>
                  <h6 className="text-sm text-gray-500 font-medium mb-4">
                    Hon&apos;ble Vice Chancellor DSNLU
                  </h6>
                </Link>
                <div className="w-full space-y-2">
                  <Link
                    href="https://dsnlu.ac.in/vice-chancellors-message/"
                    className="block w-full py-2 px-4 bg-gray-50 hover:bg-dsnlu-azure hover:text-white rounded-lg transition-colors text-sm font-medium border border-gray-100"
                  >
                    Vice Chancellor&rsquo;s Message
                  </Link>
                  <Link
                    href="https://dsnlu.ac.in/storage/2024/07/Prof_-D_S_Prakasa-Rao_CV.pdf"
                    target="_blank"
                    className="block w-full py-2 px-4 bg-gray-50 hover:bg-dsnlu-azure hover:text-white rounded-lg transition-colors text-sm font-medium border border-gray-100"
                  >
                    Vice Chancellor&rsquo;s CV
                  </Link>
                </div>
              </div>
            </div>

            {/* ✅ Notifications Column with FULL CRUD */}
            <ScrollableList
              title="NOTIFICATIONS"
              viewAllLink="/notifications"
              items={notifications}
              editable={isAdminMode}
              onAdd={async (data) => {
                const newItem = await db.notifications.add(data);
                setNotifications(prev => [newItem, ...prev]);
              }}
              onEdit={async (id, data) => {
                await db.notifications.update(id, data);
                setNotifications(prev =>
                  prev.map(item => (item.id === id ? { ...item, ...data } : item))
                );
              }}
              onDelete={async (id) => {
                await db.notifications.delete(id);
                setNotifications(prev => prev.filter(n => n.id !== id));
              }}
            />

            {/* ✅ Results Column with FULL CRUD */}
            <ScrollableList
              title="EXAMINATION RESULTS"
              viewAllLink="/examination"
              items={results}
              editable={isAdminMode}
              onAdd={async (data) => {
                const newItem = await db.results.add(data);
                setResults(prev => [newItem, ...prev]);
              }}
              onEdit={async (id, data) => {
                await db.results.update(id, data);
                setResults(prev =>
                  prev.map(item => (item.id === id ? { ...item, ...data } : item))
                );
              }}
              onDelete={async (id) => {
                await db.results.delete(id);
                setResults(prev => prev.filter(r => r.id !== id));
              }}
            />

          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-dsnlu-dark-slate">
            LATEST / UPCOMING EVENTS
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <Image
                    src="https://dsnlu.ac.in/storage/2025/11/INVITATION-–-Justice-E.Venkatesam-Endowment-Lecture.png"
                    alt="Constitution Day"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-dsnlu-azure font-semibold mb-2">
                    <Calendar size={18} />
                    <span>26th November, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    INVITATION – Constitution Day Celebrations
                  </h3>
                  <a
                    href="https://dsnlu.ac.in/storage/2025/11/Invitation-Constitution-Day-DSNLU.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white bg-dsnlu-azure px-4 py-2 rounded-lg hover:bg-dsnlu-azure/90 transition-colors w-fit"
                  >
                    <Download size={16} /> Download Invitation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Feature Cards Section */}
      <FeatureCards />

    </div>
  );
}