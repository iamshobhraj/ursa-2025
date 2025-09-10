import Link from 'next/link'
const List=({items})=>{
    return(
        <ul>
        {items.map((points,i)=>{
            return(
                <li key={i} className="list-disc text-gray-600
                pb-2 text-base lg:text-lg">
                   {points}
                </li>
            )
        })}
        </ul>
    )
}
export default function Call() {
    return (
        <div id="call" className="flex flex-col mx-4 border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 md:p-6 sm:p-2 pt-6">
            <h1 className='text-2xl font-semibold mx-auto lg:text-4xl'>Call for Papers</h1>
        <div className='p-8'>
        <p className='py-3'>
           <span className='font-semibold'>Abstract may be submitted through following Google form: </span>
           <Link href="https://forms.gle/1gsA87fH2HJ6FZHe6" target="_blank" className='text-blue-500'>Link</Link>
        </p>
        <p className='pb-3'>
            <span className='font-semibold'>Template for Abstract </span><Link href="https://docs.google.com/document/d/1-pcZivK41ABcMK0IOtcRjLLAd4BVypGO/edit?usp=sharing&ouid=103562460999404586283&rtpof=true&sd=true" target="_blank" className='text-blue-500'>Link</Link>
        </p>
        <p className='pb-6'>
            <span className='font-semibold'>Template for Paper </span><Link href="#" target="_blank" className='text-blue-500'>Link</Link>
        </p>
        <p className='py-2 text-2xl'>
        The theme of the conference:
        </p>

        <List items={['Environmental Sustainability',
            	'Circular Economic Systems',
            	'Biodiversity Support',
            	'Climate Adaptation and Climate Justice',
            	'Thermal Regulation',
            	'Environmental, social and economic sustainability perspectives',
            	'Urban Resilience and Smart Cities',
            	'Social and Cultural Aspects of Urban Resilience',
            	'Participatory Planning',
            	'Development of Networks',
            	'Digitization of Cities',
            	'Digitization of Cities',
            	'Noise Reduction',
            	'Strategies to moderate the urban heat island effect',
            	'Innovative zoning and development promotions for resilient cities',
            	'Circular Economy for Net Zero Cities',
                'Sustainable materials and construction techniques',
                'Climate resilience and urban planning',
                'Renewable energy integration in architecture',
                'Green infrastructure and biodiversity in cities',
                'Social equity and sustainability',
                'Water management and sustainable landscapes',
                'Applications of circular economy models in architecture and planning',
                'Adaptive reuse strategies for buildings and urban infrastructure',
                'Waste reduction, recycling technologies, and material efficiency in construction',
                'Policies and governance models fostering sustainable development',
                'Technological Innovations Supporting Circular Urbanism',
                'Community involvement and its impact on sustainable urban practices',

        ]}/>
        <p className='py-6 font-semibold'>
            Note: The themes are not limited to the listed ones.
        </p>

    </div>

        </div>
    )
}
