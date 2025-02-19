import firstMedal from '@/assets/medal-gold.svg'
import secondMedal from '@/assets/medal-silver.svg'
import thirdtMedal from '@/assets/medal-cooper.svg'
import Image from 'next/image'


export const Ranking = () => {
    return(
    <div className=" w-full max-w-[440px] space-y-5 ">
                <h2 className=" font-heading font-semibold text-xl">Ranking de inscrições</h2>
                
                <div className=" space-y-4">

                    <div className=" flex flex-col justify-center gap-3 bg-gray-700 border border-gray-600 rounded-xl p-6 relative">
                        <span className=" text-gray-300 text-sm leading-none ">
                            <span className="font-semibold">1°</span> | Cesar Cohen
                        </span>
                        <span className="font-semibold font-heading text-2xl text-gray-200 leading-none felx ">3.041 </span>
                        {/* <span className=" bg-gray-500 rounded-md text-sm px-3 py-1 text-gray-300">Você</span> */}

                        <Image src={firstMedal} alt="devstage" width={56} height={85} className="absolute top-0 right-8"/>
                    </div>
                    <div className=" flex flex-col justify-center gap-3 bg-gray-700 border border-gray-600 rounded-xl p-6 relative">

                            <span className=" text-gray-300 text-sm leading-none ">
                                <span className="font-semibold">2°</span> | Joui Jouki
                            </span>
                            <span className="font-semibold font-heading text-2xl text-gray-200 leading-none">2110</span>

                        <Image src={secondMedal} alt="devstage" width={56} height={85} className="absolute top-0 right-8"/>
                    </div>
                    <div className=" flex flex-col justify-center gap-3 bg-gray-700 border border-gray-600 rounded-xl p-6 relative">

                            <span className=" text-gray-300 text-sm leading-none ">
                                <span className="font-semibold">3°</span> | Arthur Cervero
                            </span>
                            <span className="font-semibold font-heading text-2xl text-gray-200 leading-none">413</span>
                        <Image src={thirdtMedal} alt="devstage" width={56} height={85} className="absolute top-0 right-8"/>
                    </div>
                </div>
            </div>
)}