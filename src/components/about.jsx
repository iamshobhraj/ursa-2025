import Link from 'next/link';
export default function About() {
  return (
    <div id="about" className="flex flex-col mx-4 border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 p-4 lg:px-8">
      <h1 className='text-2xl font-semibold mx-auto md:text-3xl lg:text-4xl'>About Conference</h1>
      <p className='font-normal text-base text-justify mt-2 lg:mt-12 text-slate-600 md:text-lg'>
      The International Conference on “Urban Resilience and Sustainable Architecture” aims to convene distinguished academicians, scientists, professionals, researchers and students to communicate and disseminate their research findings and experiences regarding aspects of Urban Resilience and Sustainable Architecture. It also offers a prominent interdisciplinary forum to present and discuss the most recent innovations, trends, concerns, practical challenges encountered and solutions adopted in Urban Resilience and Sustainable Architecture.
      </p>
      <h1 className='font-semibold text-xl mt-4 md:text-2xl '>
      Call for Contributions
      </h1>
      <p className='text-base text-slate-600 mt-2 text-justify md:text-lg font-normal'>
      The conference invites abstracts and papers that discuss the conference's themes. Authors are urged to contribute to the conference by submitting their research abstracts and papers. We accept research presentations that describe novel and unpublished results of conceptual, creative, empirical, experimental or theoretical work in Urban Resilience and Sustainable Architecture.
      </p>
      <h1 className='font-semibold text-xl mt-4 md:text-2xl'>
      Guidelines for Authors
      </h1>
      <p className='text-base text-slate-600 mt-2 text-justify md:text-lg font-normal'>
      Please ensure the submission meets the conference guidelines for accepting scholarly papers. Please refer to the paper submission guideline, abstract submission guideline and author information before submitting your paper.
      Downloadable versions of the checklist are  <Link href="https://shorturl.at/JX4ju" target="_blank" className='text-blue-500'>Full-Text papers</Link> and <Link href="https://shorturl.at/ZKBgm" target="_blank" className='text-blue-500'>Abstract Papers</Link>.
      </p>
      <h1 className='font-semibold text-xl mt-4 md:text-2xl'>
      Conference Proceedings
      </h1>
      <p className='text-base text-slate-600 mt-2 text-justify md:text-lg font-normal'>
      All submitted conference papers will be peer-reviewed. The peer-reviewed book of abstracts and book chapters will be published with ISBN number.
      </p>
      <h1 className='font-semibold text-xl mt-4 md:text-2xl'>
      Conference Sponsor and Exhibitor Opportunities
      </h1>
      <p className='text-base text-slate-600 mt-2 text-justify md:text-lg font-normal'>
      The conference offers the opportunity to become a conference sponsor or exhibitor. To participate as a sponsor or exhibitor, please download and complete the Conference Sponsorship Request Form.
      </p>
      <p className='text-base mt-8 text-justify md:text-lg font-semibold underline lg:mt-12'>
      The Exhibition Venue is the National Institute of Technology Patna, Ashok Rajpath, Patna-800005, Bihar, India.
      </p>
    </div>
  );
}