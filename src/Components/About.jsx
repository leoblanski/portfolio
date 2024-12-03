import profile from '../images/profile.jpg';

export default function About() {
    return (
        <>
            {/* Create 2 columns */}
            < div className="grid grid-cols-2 gap-4" >
                <div>
                    <h1 className="text-4xl font-bold">Leonardo Blanski</h1>
                    <p className="text-lg text-gray-500 my-4">
                        I'm a Senior Full-Stack Developer focused on backend development with expertise in PHP, Laravel, React, SQL, and AWS.
                        I specialize in building scalable systems and currently develop innovative solutions in the travel industry.
                    </p>
                    {['PHP', 'Laravel', 'React', 'SQL', 'AWS', 'Flutter', 'Docker', 'Tailwind', 'Queue Management', 'Webservices'].map(skill => (
                        <span key={skill} className={`mr-2 mt-2 inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100`}>
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center">
                    <img src={profile} alt="Leonardo Blanski" className="rounded-full w-80 h-80 object-cover" />
                </div>
            </div >
        </>
    );
}
