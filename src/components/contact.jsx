export default function Contact() {
  return (
    <div id="contact" className="flex flex-col mx-4 border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 md:p-6 sm:p-2 pt-6">
      <h1 className='text-2xl font-semibold mx-auto lg:text-4xl'>Contact Us</h1>
      <p className='font-normal text-sm text-justify p-2 text-slate-600 lg:text-lg md:mt-8'>
      Department of Architecture and Planning,
      National Institute of Technology Patna,
      Ashok Rajpath, Patna 800005, Bihar, India
      <br/>
      email: <a className='text-blue-500' href="mailto:ursa2025@nitp.ac.in">ursa2025@nitp.ac.in</a>
      </p>
    </div>
  );
}