'use client';
import { useState } from 'react';

export default function Schedule() {
    const [activeDay, setActiveDay] = useState(1);

    // Reusable Row Component for consistent layout
    const ScheduleRow = ({ time, children, isBreak = false }) => (
        <div className={`flex flex-col md:flex-row border-b border-slate-300 ${isBreak ? 'bg-yellow-50' : 'bg-white'}`}>
            {/* Time Column */}
            <div className="p-3 md:w-32 md:shrink-0 bg-slate-100 md:bg-transparent font-bold border-b md:border-b-0 md:border-r border-slate-300 flex items-center justify-center md:justify-start text-sm md:text-base text-slate-700">
                {time}
            </div>
            {/* Content Column */}
            <div className="p-3 flex-1 flex flex-col justify-center text-center md:text-left text-sm md:text-base">
                {children}
            </div>
        </div>
    );

    // Parallel Session Grid Component
    const SessionGrid = ({ children }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left w-full">
            {children}
        </div>
    );

    const SessionCell = ({ title, items }) => (
        <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-md overflow-hidden h-full">
            <div className="font-bold bg-slate-200 p-2 border-b border-slate-300 text-center text-xs md:text-sm text-slate-800">
                {title}
            </div>
            <div className="p-2 text-xs sm:text-sm flex flex-wrap gap-2 justify-center md:justify-start md:flex-col md:gap-1 text-slate-600">
                {items.map((item, idx) => (
                    <span key={idx} className="bg-white px-1 rounded border border-slate-100 md:border-none md:bg-transparent md:p-0">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <div id="schedule" className="flex flex-col mx-4 border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 md:p-6 sm:p-4 px-2 pt-6">
            <h1 className='text-2xl font-semibold mx-auto lg:text-4xl mb-6 text-center'>Schedule of Events</h1>

            {/* Day Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setActiveDay(1)}
                    className={`px-6 py-2 rounded-full font-bold text-sm md:text-base transition-colors ${activeDay === 1 ? 'bg-slate-800 text-white' : 'bg-white border border-slate-800 text-slate-800'}`}
                >
                    Day 1 (15 Nov)
                </button>
                <button
                    onClick={() => setActiveDay(2)}
                    className={`px-6 py-2 rounded-full font-bold text-sm md:text-base transition-colors ${activeDay === 2 ? 'bg-slate-800 text-white' : 'bg-white border border-slate-800 text-slate-800'}`}
                >
                    Day 2 (16 Nov)
                </button>
            </div>

            {/* Schedule Container */}
            <div className="flex flex-col border border-slate-400 rounded-md overflow-hidden">
                
                {/* Header (Visible on Desktop only) */}
                <div className="hidden md:flex bg-slate-300 font-bold border-b border-slate-400">
                    <div className="p-3 w-32 border-r border-slate-400">Time (IST)</div>
                    <div className="p-3 flex-1">Event / Tracks</div>
                </div>

                {/* DAY 1 CONTENT */}
                {activeDay === 1 && (
                    <>
                        <ScheduleRow time="10:00 - 10:30">Registration</ScheduleRow>
                        <ScheduleRow time="10:30 - 11:20">
                            <span className="font-bold text-lg">Inaugural Ceremony</span>
                        </ScheduleRow>
                        <ScheduleRow time="11:20 - 11:35" isBreak={true}>Tea Break</ScheduleRow>
                        <ScheduleRow time="11:35 - 12:15">
                            <span className="font-bold text-slate-900 block mb-1">Keynote Speaker (Chief Guest)</span>
                            <span className="text-slate-700">Prof. Iyer Vijayalaxmi Kasinath, SPA Vijayawada</span>
                        </ScheduleRow>

                        <ScheduleRow time="12:15 - 13:30">
                            <SessionGrid>
                                <SessionCell title="Online Track A" items={['URSA-187', 'URSA-197', 'URSA-221', 'URSA-225', 'URSA-229', 'URSA-230']} />
                                <SessionCell title="Online Track B" items={['URSA-105', 'URSA-107', 'URSA-109', 'URSA-110', 'URSA-111', 'URSA-112']} />
                                <SessionCell title="Online Track C" items={['URSA-206', 'URSA-207', 'URSA-209', 'URSA-210', 'URSA-213', 'URSA-218']} />
                                <SessionCell title="Offline (Visvesvaraya)" items={['URSA-260', 'URSA-261', 'URSA-262', 'URSA-263', 'URSA-264', 'URSA-265']} />
                            </SessionGrid>
                        </ScheduleRow>

                        <ScheduleRow time="13:30 - 13:45">Sponsor's Presentation</ScheduleRow>
                        <ScheduleRow time="13:45 - 15:00" isBreak={true}>Lunch</ScheduleRow>
                        
                        <ScheduleRow time="15:00 - 15:45">
                            <span className="font-bold text-slate-900 block mb-1">Online Keynote Speaker</span>
                            <span className="text-slate-700">Prof. Vilas Nitivattananon, Asian Institute of Technology, Thailand</span>
                        </ScheduleRow>

                        <ScheduleRow time="15:45 - 17:00">
                            <SessionGrid>
                                <SessionCell title="Online Track A" items={['URSA-236', 'URSA-238', 'URSA-270', 'URSA-272']} />
                                <SessionCell title="Online Track B" items={['URSA-116', 'URSA-117', 'URSA-119', 'URSA-121', 'URSA-124']} />
                                <SessionCell title="Online Track C" items={['URSA-219', 'URSA-220', 'URSA-251', 'URSA-224', 'URSA-231']} />
                                <SessionCell title="Offline (Visvesvaraya)" items={['URSA-266', 'URSA-267', 'URSA-268', 'URSA-269']} />
                            </SessionGrid>
                        </ScheduleRow>

                        <ScheduleRow time="17:00 - 17:15" isBreak={true}>Tea Break</ScheduleRow>
                        <ScheduleRow time="17:15 - 18:30"><span className="font-bold text-lg text-indigo-900">Cultural Program</span></ScheduleRow>
                        <ScheduleRow time="19:30 - 21:00" isBreak={true}>Dinner</ScheduleRow>
                    </>
                )}

                {/* DAY 2 CONTENT */}
                {activeDay === 2 && (
                    <>
                        <ScheduleRow time="10:30 - 11:10">
                            <span className="font-bold text-slate-900 block mb-1">Keynote Speaker</span>
                            <span className="text-slate-700">Prof. Sejal Patel, CEPT University, Ahmedabad</span>
                        </ScheduleRow>
                        <ScheduleRow time="11:10 - 11:30" isBreak={true}>Tea Break</ScheduleRow>

                        <ScheduleRow time="11:30 - 13:30">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left w-full">
                                <SessionCell title="Online Track A" items={['URSA-138', 'URSA-176', 'URSA-193', 'URSA-194', 'URSA-276']} />
                                <SessionCell title="Online Track B" items={['URSA-106', 'URSA-177', 'URSA-178', 'URSA-243', 'URSA-189']} />
                                <SessionCell title="Offline (Visvesvaraya)" items={['URSA-201', 'URSA-173', 'URSA-232', 'URSA-233', 'URSA-241', 'URSA-242', 'URSA-186', 'URSA-245']} />
                            </div>
                        </ScheduleRow>

                        <ScheduleRow time="13:30 - 13:45">Sponsor's Presentation</ScheduleRow>
                        <ScheduleRow time="13:45 - 15:00" isBreak={true}>Lunch</ScheduleRow>

                        <ScheduleRow time="15:00 - 15:45">
                            <span className="font-bold text-slate-900 block mb-1">Online Keynote Speaker</span>
                            <span className="text-slate-700">Prof. Mahua Mukherjee, IIT Roorkee</span>
                        </ScheduleRow>

                        <ScheduleRow time="15:45 - 17:00">
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left w-full">
                                <SessionCell title="Online Track A" items={['URSA-205', 'URSA-214', 'URSA-222', 'URSA-196', 'URSA-259', 'URSA-254', 'URSA-204']} />
                                <SessionCell title="Online Track B" items={['URSA-190', 'URSA-191', 'URSA-192', 'URSA-239', 'URSA-253', 'URSA-202', 'URSA-275']} />
                                <SessionCell title="Offline (Visvesvaraya)" items={['URSA-246', 'URSA-247', 'URSA-248', 'URSA-252', 'URSA-199', 'URSA-195', 'URSA-258']} />
                            </div>
                        </ScheduleRow>

                        <ScheduleRow time="17:00 - 17:30"><span className="font-bold text-lg">Valedictory Session</span></ScheduleRow>
                        <ScheduleRow time="19:30 - 21:00" isBreak={true}>Dinner</ScheduleRow>
                    </>
                )}
            </div>
        </div>
    );
}