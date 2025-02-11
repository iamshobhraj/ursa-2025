export default function Dates() {
    return (
        <div id="dates" className="flex flex-col gap-16 md:gap-14 mx-4 h-[80vh] border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 md:p-6 sm:p-2 px-6 pt-9">
            <h1 className='text-2xl font-semibold mx-auto lg:text-4xl'>Important Dates</h1>
            <ul>
                <li className="bg-slate-300 p-2"><span className="text-lg font-medium">Abstract Submission Deadline: </span><span>August 15, 2025</span></li>
                <li className="p-2"><span className="text-lg font-medium">Notification of Acceptance/Rejection: </span><span>Within 15 days of Abstract/full-text paper</span></li>
                <li className="bg-slate-300 p-2"><span className="text-lg font-medium">Registeration Deadline: </span><span>October 15, 2025</span></li>
                <li className="p-2"><span className="text-lg font-medium">Conference Dates: </span><span>November 15-16, 2025</span></li>
                <li className="bg-slate-300 p-2"><span className="text-lg font-medium">Full Paper Submission for Book Chapter: </span><span>December 15, 2025</span></li>
                <li className="p-2"><span className="text-lg font-medium">Abstract Submission Deadline: </span><span>August 15, 2025</span></li>
            </ul>
        </div>
    )
}