import React from "react";

const Portfolio = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-600 text-white py-6">
                <div className="container mx-auto flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Leonardo Blanski</h1>
                    <p className="text-xl mt-2">Software Engineer</p>
                    <a
                        href="https://github.com/leoblanski"
                        className="mt-4 bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100"
                    >
                        View GitHub
                    </a>
                </div>
            </header>

            {/* Skills Section */}
            <section className="container mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "PHP",
                        "Laravel",
                        "React",
                        "Vue",
                        "AWS",
                        "Flutter",
                        "SQL",
                        "Tailwind CSS",
                    ].map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full shadow"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="bg-gray-200 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">Work Experience</h2>
                <div className="container mx-auto space-y-6">
                    {[
                        {
                            company: "Regal Wings",
                            role: "Senior Software Engineer",
                            duration: "Nov 2023 - Present",
                            details:
                                "Leading the development of a SaaS platform for the travel industry using Laravel, React, Tailwind CSS, and AWS.",
                        },
                        {
                            company: "Tray",
                            role: "Software Developer PHP | Scrum Master",
                            duration: "Sep 2022 - Nov 2023",
                            details:
                                "Worked on diverse projects including Theme Store, TikTok ADS integration, and infrastructure restructuring.",
                        },
                        {
                            company: "Giver",
                            role: "PHP Developer",
                            duration: "Mar 2021 - Sep 2022",
                            details:
                                "Developed the Giver CRM app using Flutter and Laravel, released on the App Store and Play Store.",
                        },
                    ].map((job, index) => (
                        <div
                            key={index}
                            className="bg-white shadow rounded-lg p-6 border-l-4 border-blue-600"
                        >
                            <h3 className="text-xl font-bold">{job.company}</h3>
                            <p className="text-blue-600 font-semibold">{job.role}</p>
                            <p className="text-gray-600">{job.duration}</p>
                            <p className="mt-2 text-gray-700">{job.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>© 2024 Leonardo Blanski</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
