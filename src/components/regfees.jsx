import Link from 'next/link'
function FeesComp({ type,fees }) {
    return (
        <>

            <div className={`col-span-2 border-b border-gray-300 flex flex-col text-base md:text-base justify-start pl-2 py-2`}>{type}</div>
            <div className="col-span-1 flex border-b border-gray-300 flex-col justify-center text-sm md:text-base pl-4 py-2">{fees}</div>
        </>
    )
}
export default function RegFees() {
    return (
        <div id="regfees" className="flex flex-col mx-4 border-2 rounded-lg bg-slate-100 my-8 sm:mx-6 lg:mx-20 lg:mt-12 p-8">
            <h1 className='text-2xl font-semibold mx-auto lg:text-5xl'>Registration Fees</h1>
        <div>
        <p className='mt-14 text-xl border border-black pl-2 font-bold'>
            International Delegates:
        </p>
        <div className="grid grid-cols-3 mt-8">
            <div className="col-span-2 flex flex-col justify-center font-semibold text-lg  pl-4 py-2">Registration Fees (including GST)</div>
            <div className="col-span-1 flex flex-col justify-center font-semibold pl-4 py-2"></div>
            <FeesComp
            type={'1. International Delegate:'}
            fees={'USD 250'}
            />
            <FeesComp
            type={'2. International Student'}
            fees={'USD 100'}
            />
            <FeesComp
            type={'3. SAARC & Developing Countries Delegate'}
            fees={'USD 150'}
            />
            <FeesComp
            type={'4. SAARC & Developing Countries Student'}
            fees={'USD 50'}
            />
        </div>
        <p className='mt-14 pl-2 text-xl border border-black font-bold'>
            National Delegates:
        </p>
        <div className="grid grid-cols-3 mt-8">
            <div className="col-span-2 flex flex-col justify-center text-lg  font-semibold pl-4 pb-2">Registration Fees (including GST)</div>
            <div className="col-span-1 flex flex-col justify-center font-semibold pl-4 pb-2"></div>
            <FeesComp
            type={'1. Academician/ Professional/Industry:'}
            fees={'INR 7500'}
            />
            <FeesComp
            type={'2. Research Scholar'}
            fees={'INR 3000'}
            />
            <FeesComp
            type={'3. PG Student'}
            fees={'INR 2000'}
            />
            <FeesComp
            type={'4. UG Student'}
            fees={'INR 1500'}
            />
        </div>
        <p className='mt-14 pl-2 text-xl border border-black font-bold'>
            Guest Delegates:
        </p>
        <div className="grid grid-cols-3 mt-8">
            <div className="col-span-2 flex flex-col justify-center text-lg  font-semibold pl-4 pb-2">Registration Fees (including GST)</div>
            <div className="col-span-1 flex flex-col justify-center font-semibold pl-4 pb-2"></div>
            <FeesComp
            type={'1. Guest Registration With Kit'}
            fees={'INR 3000'}
            />
            <FeesComp
            type={'2. Guest Registration Without Kit'}
            fees={'INR 1500'}
            />
            <FeesComp
            type={'3. Guest Registration without Kit '}
            fees={'USD 50'}
            />
        </div>
        <p className='mt-14 pl-2 text-xl border border-black font-bold'>
            Account details for the payment:
        </p>
        <div className='grid grid-cols-3 mt-8 mb-3'>
            <FeesComp
            type={"Account No: "}
            fees={"50433562364"}
            />
            <FeesComp
            type={"Beneficiary: "}
            fees={"NIT Patna CF Accounts"}
            />
            <FeesComp
            type={"Bank Name:"}
            fees={"Indian Bank"}
            />
            <FeesComp
            type={"Branch: "}
            fees={"NIT Patna"}
            />
            <FeesComp
            type={"IFSC: "}
            fees={"IDIB000B810"}
            />
        </div>
        <p className='pt-4 pb-2 font-medium'>
            For International Payment only
        </p>
        <div className='grid grid-cols-3'>
            <FeesComp
            type={"SWIFT Code: "}
            fees={"IDIBINBBXXX"}
            />
        </div>
    </div>
        </div>
    )
}