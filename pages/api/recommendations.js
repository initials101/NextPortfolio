// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Titus Kariuki',
    image: "images/kariuki.jpg",
    designation: 'PHP | Laravel | Flutter | Dart',
    view: "Hey everyone! I wanted to take a moment to recommend Dennis for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Dennis is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/titus-kariuki-b69a79218/"
  },
  {
    id: 1,
    name: 'Japheth Kiprono',
    image: "images/japheth.jpg",
    designation: 'Web Developper | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Dennis on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Dennis's professionalism and attention to detail shone brightly. I wholeheartedly endorse Dennis for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/kiprono-japhet/"
  },
  
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
