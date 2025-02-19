import firstMedal from '@/assets/medal-gold.svg'
import secondMedal from '@/assets/medal-silver.svg'
import thirdtMedal from '@/assets/medal-cooper.svg'
import Image from 'next/image'
import { getRanking } from '@/http/api'

interface RankingProps {
    subscriberId: string
}

export const Ranking = async ({subscriberId}: RankingProps) => {

    const { ranking } = await getRanking()

    return(
        <div className=" w-full max-w-[440px] space-y-5 ">
                <h2 className=" font-heading font-semibold text-xl">Ranking de inscrições</h2>
                
                <div className=" space-y-4">

                    {ranking.map((item, index) => {
                        const rankingPosition = index + 1

                        return(
                            <div key={item.id} className=" flex flex-col justify-center gap-3 bg-gray-700 border border-gray-600 rounded-xl p-6 relative">
                                <span className=" text-gray-300 text-sm leading-none relative">
                                    <span className="font-semibold">{rankingPosition}°</span> | {item.name}
                                    { subscriberId === item.id && <span className=" absolute -top-1.5 py-1 font-semibold bg-gray-500 rounded-md text-sm ml-3 px-3 text-gray-300">Você</span> }
                                    
                                </span>
                                <span className="font-semibold font-heading text-2xl text-gray-200 leading-none felx "> {item.score} </span>
                                

                                {
                                    rankingPosition === 1 && <Image src={firstMedal} alt="medal" className="absolute top-0 right-8"/>
                                }

                                {
                                    rankingPosition === 2 && <Image src={secondMedal} alt="medal"  className="absolute top-0 right-8"/>
                                }

                                {
                                    rankingPosition === 3 && <Image src={thirdtMedal} alt="medal"  className="absolute top-0 right-8"/>
                                }

                               
                            </div>
                        )
                    })}
                    
                    {/* <div className=" flex flex-col justify-center gap-3 bg-gray-700 border border-gray-600 rounded-xl p-6 relative">

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
                    </div> */}
                </div>
            </div>
)}