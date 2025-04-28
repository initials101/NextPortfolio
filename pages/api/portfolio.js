const portfolio = [
    {
        id: 0,
        projectName: "MEDREF",
        url: "https://medref-fy.vercel.app/",
        image: "projects/medref.png",
        projectDetail: "To streamline the medical referral process by allowing doctors to refer patients to appropriate hospitals based on medical needs, availability, and location. The system enables patients to book and track their referral appointments efficiently.",
        technologiesUsed: [
            { tech: "ReactJS" },          // Frontend UI
            { tech: "Node.js" },          // Backend runtime
            { tech: "Express.js" },       // Web framework for Node
            { tech: "MongoDB" },          // NoSQL database
            { tech: "TailwindCSS" },      // Utility-first CSS framework
            { tech: "Framer Motion" }     // Animations and UI transitions
        ],
    
       
    },
    {
        id: 0,
        projectName: "PICKNEST",
        url: "https://picknest.com/",
        image: "projects/picknest.png",
        projectDetail: "PickNest is a modern online eCommerce platform designed to provide a seamless shopping experience. It allows users to browse, search, and purchase a wide range of products with ease. The system features user authentication, dynamic product listings, cart and checkout functionalities, and an intuitive user interface optimized for performance and usability.",
        technologiesUsed: [
            { tech: "ReactJS" },          // Frontend development
            { tech: "Node.js" },          // Backend runtime
            { tech: "Express.js" },       // Backend framework
            { tech: "MongoDB" },          // NoSQL database
            { tech: "Redux" },            // State management
            { tech: "TailwindCSS" },      // Styling
            { tech: "Vite" }              // Frontend build tool
        ],
    },
    {
        id: 0,
        projectName: "VMS",
        url: "https://volunteers-management-system-frontend.vercel.app//",
        image: "projects/vms.png",
        projectDetail: "PickNest is a modern online eCommerce platform designed to provide a seamless shopping experience. It allows users to browse, search, and purchase a wide range of products with ease. The system features user authentication, dynamic product listings, cart and checkout functionalities, and an intuitive user interface optimized for performance and usability.",
        technologiesUsed: [
            { tech: "ReactJS" },          // Frontend development
            { tech: "Flask" },       // Backend framework
            { tech: "SQL" },          // NoSQL database
            { tech: "REST APIs" },            // State management
            { tech: "TailwindCSS" },      // Styling
        ],
    },
    {
        id: 4,
        projectName: "LipaNa MpesaAPI",
        url: "https://github.com/initials101/mpesaAPI",
        image: "projects/api.png",
        projectDetail: "This project is a robust Node.js backend designed to seamlessly integrate with the M-Pesa API, enabling secure and efficient mobile money transactions. It supports full payment automation and real-time transaction tracking, tailored for businesses that need fast, reliable financial operations.",
        technologiesUsed: [
            { tech:  "Nodejs" },
            { tech: "mongoDB" },
            { tech: "experssjs" },
        ],
    },

]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
