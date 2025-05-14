const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients. On top of this am a ALX Fullstack Software Engineer. with good understanding of collaboration, teamwork,and working with deadlines',
    },
    {
        id: 1,
        title: 'Penetration Testing',
        desc: "As an Ethical hacker, I'm proficient in Web application security methodologies. I use burpsuite, metasploit, wireshark, nmap and many other tools and custom scripts to simplify project management tasks like task assignment, prioritization, and progress tracking.  My expertise ensures high-quality software assesment and settings are delivered promptly.",
    },
    
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 5,
        title: 'Containerization',
        desc: 'As a Backend engineer i am preficient with CI/CD pipelines and containerization with a deep understanding of docker and dockerization also Load Balancing which is essential in todays webApp building.'
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
