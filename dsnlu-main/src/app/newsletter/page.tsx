import { NewsletterGravity } from "@/components/NewsletterGravity";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Newsletter() {
    const articles = [
        {
            title: "DSNLU Wins Best Mediation Plan Award at ICC Paris",
            date: "February 8, 2025",
            author: "ADR Society",
            excerpt: "The team comprising Animesh Jha, Prateek Bhat, Vinayak Buckshee, and Vineela Kottapalli won the prestigious award at the 20th ICC International Commercial Mediation Competition.",
        },
        {
            title: "NIRF 2025: Median Salary Rises to ₹7.5 Lakhs",
            date: "January 2025",
            author: "Placement Cell",
            excerpt: "The NIRF 2025 report highlights a significant rise in placements, with the median salary increasing from ₹6 lakhs to ₹7.5 lakhs.",
        },
        {
            title: "Vis Pre Moot Competition 2026 Announced",
            date: "December 2025",
            author: "CADR",
            excerpt: "The Centre for Advanced Legal Research announces the second edition of its flagship Vis Pre Moot Competition. Registration opens October 15.",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Student Newsletter</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {articles.map((article, i) => (
                        <Card key={i} className="hover:border-dsnlu-azure transition-colors">
                            <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                                <span>{article.date}</span>
                                <span className="text-dsnlu-azure font-medium">{article.author}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">{article.excerpt}</p>
                            <Button variant="outline" size="sm">Read More</Button>
                        </Card>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Interactive Highlights</h3>
                        <NewsletterGravity />
                        <div className="mt-6 p-4 bg-dsnlu-lime/10 rounded-lg border border-dsnlu-lime/20">
                            <h4 className="font-bold text-dsnlu-slate mb-2">Submit an Article</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Have a legal insight or campus news to share? Submit your write-up for the next edition.
                            </p>
                            <Button variant="secondary" className="w-full">Submit Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
