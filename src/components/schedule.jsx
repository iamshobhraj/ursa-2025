'use client';
import { useState } from 'react';

export default function Schedule() {
    const [activeDay, setActiveDay] = useState(1);

    // Helper to render the list of papers with names
    const PaperList = ({ papers }) => (
        <div className="flex flex-col gap-2">
            {papers.map((paper, idx) => (
                <span key={idx} className="text-sm text-slate-800 block border-b border-slate-100 pb-1 last:border-0">
                    {paper}
                </span>
            ))}
        </div>
    );

    return (
        <div id="schedule" className="flex flex-col mx-4 border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 md:p-6 sm:p-2 px-4 pt-6">
            <h1 className='text-2xl font-semibold mx-auto lg:text-4xl mb-6'>Schedule of Events</h1>

            {/* Day Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setActiveDay(1)}
                    className={`px-6 py-2 rounded-full font-bold transition-colors ${activeDay === 1 ? 'bg-slate-800 text-white' : 'bg-white border border-slate-800 text-slate-800'}`}
                >
                    Day 1 (15 Nov)
                </button>
                <button
                    onClick={() => setActiveDay(2)}
                    className={`px-6 py-2 rounded-full font-bold transition-colors ${activeDay === 2 ? 'bg-slate-800 text-white' : 'bg-white border border-slate-800 text-slate-800'}`}
                >
                    Day 2 (16 Nov)
                </button>
            </div>

            {/* ================= DAY 1 TABLE ================= */}
            {activeDay === 1 && (
                // Removed overflow-x-auto as the table will now wrap
                <div className="border border-slate-400 rounded-md bg-white shadow-sm">
                    {/* Removed min-w-[1000px] to allow table to be responsive */}
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-200 text-slate-800">
                                <th className="border border-slate-400 p-3 w-32 text-center">Time</th>
                                <th className="border border-slate-400 p-3 text-center">Event / Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Regular Rows */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">10:00 - 10:30</td>
                                <td className="border border-slate-400 p-3 text-center">Registration</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">10:30 - 11:20</td>
                                <td className="border border-slate-400 p-3 text-center font-bold text-lg text-indigo-900">Inaugural Ceremony</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">11:20 - 11:35</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Tea Break</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">11:35 - 12:15</td>
                                <td className="border border-slate-400 p-3 text-center">
                                    <div className="font-bold text-slate-900">Keynote Speaker (Chief Guest)</div>
                                    <div className="text-slate-700">Prof. Iyer Vijayalaxmi Kasinath, SPA Vijayawada</div>
                                </td>
                            </tr>

                            {/* Parallel Session 1 - Day 1 */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50 align-top">12:15 - 13:30</td>
                                <td className="p-0 border border-slate-400">
                                    <table className="w-full h-full">
                                        {/* Hide table header on mobile, show on medium and up */}
                                        <thead className="hidden md:table-header-group">
                                            <tr className="bg-slate-100 text-sm">
                                                <th className="border-r border-b border-slate-300 p-2 w-[40%] bg-orange-50 text-slate-900">Offline Session (Visvesvaraya Hall)</th>
                                                <th className="border-r border-b border-slate-300 p-2 w-[20%] bg-blue-50 text-slate-700">Track A (Online)</th>
                                                <th className="border-r border-b border-slate-300 p-2 w-[20%] bg-blue-50 text-slate-700">Track B (Online)</th>
                                                <th className="border-b border-slate-300 p-2 w-[20%] bg-blue-50 text-slate-700">Track C (Online)</th>
                                            </tr>
                                        </thead>
                                        {/* Use flex-col on mobile to stack items, revert to table-row-group on medium up */}
                                        <tbody className="flex flex-col md:table-row-group">
                                            {/* Use flex-col on mobile to stack items, revert to table-row on medium up */}
                                            <tr className="flex flex-col md:table-row">
                                                {/* Make each cell full width on mobile, and stack. Revert to original % width on medium up. */}
                                                {/* Add mobile-only header to not lose data. */}
                                                <td className="p-3 align-top bg-orange-50/20 w-full md:w-[40%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-900">Offline Session (Visvesvaraya Hall)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-187: Monika Garg',
                                                        'URSA-197: Priya Priyadarshni',
                                                        'URSA-221: Neha Jaiswal',
                                                        'URSA-225: Urbi Jana',
                                                        'URSA-229: Shivam Pravin Pandit',
                                                        'URSA-230: Aadrika Prabhashakar'
                                                    ]} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[20%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track A (Online)</h3>
                                                    </div>
                                                    <PaperList papers={['URSA-105', 'URSA-107', 'URSA-109', 'URSA-110', 'URSA-111', 'URSA-112']} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[20%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track B (Online)</h3>
                                                    </div>
                                                    <PaperList papers={['URSA-206', 'URSA-207', 'URSA-209', 'URSA-210', 'URSA-213', 'URSA-218']} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[20%]">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track C (Online)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-260', 'URSA-261', 'URSA-262', 'URSA-263', 'URSA-264', 'URSA-265'
                                                    ]} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            {/* Breaks & Keynote */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">13:30 - 13:45</td>
                                <td className="border border-slate-400 p-3 text-center">Sponsor's Presentation</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">13:45 - 15:00</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Lunch</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">15:00 - 15:45</td>
                                <td className="border border-slate-400 p-3 text-center">
                                    <div className="font-bold text-slate-900">Online Keynote Speaker</div>
                                    <div className="text-slate-700">Prof. Vilas Nitivattananon, Asian Institute of Technology, Thailand</div>
                                </td>
                            </tr>

                            {/* Parallel Session 2 - Day 1 */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50 align-top">15:45 - 17:00</td>
                                <td className="p-0 border border-slate-400">
                                    <table className="w-full h-full">
                                        <thead className="hidden md:table-header-group">
                                            <tr className="bg-slate-100 text-sm">
                                                <th className="border-r border-b border-slate-300 p-2 w-[40%] bg-orange-50 text-slate-900">Offline Session (Visvesvaraya Hall)</th>
                                                <th className="border-r border-b border-slate-300 p-2 w-[20%] bg-blue-50 text-slate-700">Track A (Online)</th>
                                                <th className="border-r border-b border-slate-300 p-2 w-[20%] bg-blue-50 text-slate-700">Track B (Online)</th>
                                                <th className="border-b border-slate-300 p-2 w-[20%] bg-blue-50 text-slate-700">Track C (Online)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="flex flex-col md:table-row-group">
                                            <tr className="flex flex-col md:table-row">
                                                <td className="p-3 align-top bg-orange-50/20 w-full md:w-[40%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-900">Offline Session (Visvesvaraya Hall)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-236: Sriya Mitra',
                                                        'URSA-238: Srija Sarkar',
                                                        'URSA-256: Vishnu Prasad',
                                                        'URSA-270: Rizwan Kazmi',
                                                        'URSA-272: MD Farhan'
                                                    ]} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[20%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track A (Online)</h3>
                                                    </div>
                                                    <PaperList papers={['URSA-116', 'URSA-117', 'URSA-119', 'URSA-121', 'URSA-124']} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[20%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track B (Online)</h3>
                                                    </div>
                                                    <PaperList papers={['URSA-219', 'URSA-220', 'URSA-251', 'URSA-224', 'URSA-231']} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[20%]">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track C (Online)</h3>
                                                    </div>
                                                    <PaperList papers={['URSA-266', 'URSA-267', 'URSA-268', 'URSA-269']} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            {/* Evening */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">17:00 - 17:15</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Tea Break</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">17:15 - 18:30</td>
                                <td className="border border-slate-400 p-3 text-center font-bold text-lg text-purple-900">Cultural Program</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">19:30 - 21:00</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Dinner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* ================= DAY 2 TABLE ================= */}
            {activeDay === 2 && (
                // Removed overflow-x-auto
                <div className="border border-slate-400 rounded-md bg-white shadow-sm">
                    {/* Removed min-w-[1000px] */}
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-200 text-slate-800">
                                <th className="border border-slate-400 p-3 w-32 text-center">Time</th>
                                <th className="border border-slate-400 p-3 text-center">Event / Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">10:30 - 11:10</td>
                                <td className="border border-slate-400 p-3 text-center">
                                    <div className="font-bold text-slate-900">Keynote Speaker</div>
                                    <div className="text-slate-700">Prof. Sejal Patel, CEPT University, Ahmedabad</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">11:10 - 11:30</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Tea Break</td>
                            </tr>

                            {/* Parallel Session 1 - Day 2 */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50 align-top">11:30 - 13:30</td>
                                <td className="p-0 border border-slate-400">
                                    <table className="w-full h-full">
                                        <thead className="hidden md:table-header-group">
                                            <tr className="bg-slate-100 text-sm">
                                                <th className="border-r border-b border-slate-300 p-2 w-[40%] bg-orange-50 text-slate-900">Offline Session (Visvesvaraya Hall)</th>
                                                <th className="border-r border-b border-slate-300 p-2 w-[30%] bg-blue-50 text-slate-700">Track A (Online)</th>
                                                <th className="border-b border-slate-300 p-2 w-[30%] bg-blue-50 text-slate-700">Track B (Online)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="flex flex-col md:table-row-group">
                                            <tr className="flex flex-col md:table-row">
                                                <td className="p-3 align-top bg-orange-50/20 w-full md:w-[40%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-900">Offline Session (Visvesvaraya Hall)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-201: Shubhraj Sharma',
                                                        'URSA-106: Rashika',
                                                        'URSA-176: Deepak Kumar',
                                                        'URSA-193: Archi Kumari',
                                                        'URSA-194: Lipika Pandey',
                                                        'URSA-276: Shubham Meena',
                                                    ]} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[30%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track A (Online)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-138',
                                                        'URSA-173',
                                                        'URSA-177',
                                                        'URSA-178',
                                                        'URSA-186',
                                                        'URSA-189'
                                                    ]} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[30%]">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track B (Online)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-232',
                                                        'URSA-233',
                                                        'URSA-241',
                                                        'URSA-242',
                                                        'URSA-243',
                                                        'URSA-245',
                                                    ]} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            {/* Breaks & Keynote */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">13:30 - 13:45</td>
                                <td className="border border-slate-400 p-3 text-center">Sponsor's Presentation</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">13:45 - 15:00</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Lunch</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">15:00 - 15:45</td>
                                <td className="border border-slate-400 p-3 text-center">
                                    <div className="font-bold text-slate-900">Online Keynote Speaker</div>
                                    <div className="text-slate-700">Prof. Mahua Mukherjee, IIT Roorkee</div>
                                </td>
                            </tr>

                            {/* Parallel Session 2 - Day 2 */}
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50 align-top">15:45 - 17:00</td>
                                <td className="p-0 border border-slate-400">
                                    <table className="w-full h-full">
                                        <thead className="hidden md:table-header-group">
                                            <tr className="bg-slate-100 text-sm">
                                                <th className="border-r border-b border-slate-300 p-2 w-[40%] bg-orange-50 text-slate-900">Offline Session (Visvesvaraya Hall)</th>
                                                <th className="border-r border-b border-slate-300 p-2 w-[30%] bg-blue-50 text-slate-700">Track A (Online)</th>
                                                <th className="border-b border-slate-300 p-2 w-[30%] bg-blue-50 text-slate-700">Track B (Online)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="flex flex-col md:table-row-group">
                                            <tr className="flex flex-col md:table-row">
                                                <td className="p-3 align-top bg-orange-50/20 w-full md:w-[40%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-900">Offline Session (Visvesvaraya Hall)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-205: Kundan Kunal',
                                                        'URSA-214: Neeraj Patel',
                                                        'URSA-222: Lipika Pandey',
                                                        'URSA-239: Stuti',
                                                        'URSA-259: Ravikesh Kumar Sinha',
                                                        'URSA-195: Deepak Kumar',
                                                        'URSA-275: Anushri Barman'
                                                    ]} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[30%] md:border-r border-b border-slate-300 md:border-b-0">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track A (Online)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-190',
                                                        'URSA-191',
                                                        'URSA-192',
                                                        'URSA-196',
                                                        'URSA-199',
                                                        'URSA-202',
                                                        'URSA-204',
                                                    ]} />
                                                </td>
                                                <td className="p-3 align-top w-full md:w-[30%]">
                                                    <div className="md:hidden pb-2 mb-2 border-b border-slate-300">
                                                        <h3 className="font-semibold text-slate-700">Track B (Online)</h3>
                                                    </div>
                                                    <PaperList papers={[
                                                        'URSA-246',
                                                        'URSA-247',
                                                        'URSA-248',
                                                        'URSA-252',
                                                        'URSA-253',
                                                        'URSA-254',
                                                        'URSA-258',
                                                    ]} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">17:00 - 17:30</td>
                                <td className="border border-slate-400 p-3 text-center font-bold text-lg">Valedictory Session</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400 p-3 font-bold text-center bg-slate-50">19:30 - 21:00</td>
                                <td className="border border-slate-400 p-3 text-center bg-yellow-50 font-medium">Dinner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}