const review = [
    {
        id: 0,
        clientName: 'Mark Dennis',
        clientLocation: 'Kenya',
        clientSource: 'Recomendation',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 1,
        clientName: 'Gerlard Miriam',
        clientLocation: 'Meru ke',
        clientSource: 'Recomendation',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 2,
        clientName: 'George',
        clientLocation: 'Nairobi, ke',
        clientSource: 'Recomendation',
        clientReview: "Dennis is extremely knowledgeable and helpful. He knows in and out of webapplication testing  . His understanding of different technologies and methodologies is so amaizing."
    },
    
]
export default function handler(req, res) {
    res.status(200).json(review)
}
