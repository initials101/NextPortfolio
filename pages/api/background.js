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
                detail: "With Backend Engineering specialization.",
                year: '2023-2025'
            },
           
            {
                id: 2,
                title: 'Karatina University',
                degree: 'Bachelor of science in information Technology',
                detail: "Bachelors Degree, Programming Major",
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
                year: '02/2023 - 2024',
                location: 'Nyeri, Kenya'
            },
            {
                id: 2,
                title: 'KEY libraries',
                role: 'Web Developer',
                url: 'no website',
                desc: 'As web , I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2024 - 2025',
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
            {
                id: 4,
                title: 'Web Developer',
                role: 'fullstack developer',
                url: 'https://medref-fy.vercel.app/',
                desc: 'Developed a fullstack webApp for medicaal referral and appointment system',
                year: '01/2025 - 05/2025',
                location: 'Karatina, Kenya'
            },
            {
                id: 5,
                title: 'Backend Developer',
                role: 'API Development',
                url: 'https://github.com/initials101/mpesaAPI.git',
                desc: 'Creating a Lipa na mpesa stk Push using the daraja API',
                year: '03/2025 - 05/2025',
                location: 'Karatina, Kenya'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
