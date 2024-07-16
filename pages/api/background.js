const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Kanyakine High School',
                degree: 'KCSE',
                detail: "Completed Kenya certificate of secondary education.",
                year: '2017-2020'
            },
            {
                id: 1,
                title: 'ALX Africa',
                degree: 'Full Stack Software Engineering',
                detail: "Backend Engineer.",
                year: '2023-2025'
            },
           
            {
                id: 2,
                title: 'Karatina niversity',
                degree: 'Bachelor of science in information Technology',
                detail: "Doing Bachelors Degree",
                year: '2021-2025'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Onix-market',
                role: 'Red Teamer',
                url: 'https://onix-market.com/',
                desc: 'Web application penetration testing.',
                year: '02/2023 - Present',
                location: 'Nyeri, Kenya'
            },
            {
                id: 2,
                title: 'KEY libraries',
                role: 'Web Developer',
                url: 'no website',
                desc: 'As web , I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2024 - Present',
                location: 'Nairobi, Kenya'
            },
            {
                id: 3,
                title: 'Attachee',
                role: 'Developer',
                url: 'no website',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP",
                year: '05/2020 - 07/2024',
                location: 'Nakuru, Kenya'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
