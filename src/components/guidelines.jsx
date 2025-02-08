export default function Guidelines() {
  return (
    <div id="guidelines" className="flex flex-col gap-2 mx-4 h-full border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 md:p-6 sm:p-4 p-2">
      <h1 className='text-xl font-semibold mx-auto md:text-2xl lg:text-3xl mt-2'>Submission Guidelines</h1>
      <div className="flex flex-col text-wrap gap-2 mt-9">
        <h1 className="sm:text-2xl text-xl font-bold border border-black pl-2">Abstraction Submission</h1>
        <ul className="sm:text-lg list-disc p-5">
          <li>Submit an original work for consideration.</li>
          <li>The abstract should clearly describe the original work being presented.</li>
          <li>The abstract should be written in Einglish, one paragraph with a word limit of 200-250 words with keywords.</li>
          <li>Include a brief biography of the presenting author.</li>
          <li>Submit the abstract in MS Word (.doc or .docx) format.</li>
          <li>The title, author’s name, and affiliations should be centered, with the presenting author’s name underlined.</li>
        </ul>
      </div>
      <div className="flex flex-col text-wrap gap-2">
        <h1 className="sm:text-2xl text-xl font-bold border border-black pl-2">Full Submission</h1>
        <ul className="sm:text-lg list-disc p-5">
          <li>The total number of pages must be 6-8 in double-column format.</li>
          <li>The manuscript must be written in English and checked for grammar and language errors.</li>
          <li>Tables, figures, and images should be captioned and of high quality.</li>
          <li>Keywords should be written in lowercase letters (except for names/scientific names) and separated with commas.</li>
          <li>Include names of affiliations, including the country.</li>
          <li>The paper should include abstract, introduction, literature review, methods or methodology, study area, results & discussions, conclusions and acknowledgments (if any). </li>
          <li>Submit the full paper after preparing it according to the guidelines.</li>
        </ul>
      </div>
    </div>
  )
}