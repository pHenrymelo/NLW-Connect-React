import { BadgeCheck, Medal, MousePointerClickIcon } from "lucide-react"

export const Stats = () => {
    return(
            <div className=" grid gap-3 md:grid-cols-3 ">
                        <div className=" bg-gray-700 items-center justify-center rounded-xl px-4 py-7 flex flex-col gap-1 border border-gray-600 relative">
                            <MousePointerClickIcon className=" text-purple size-5 absolute top-3 left-3"/>
                            <span className="font-semibold font-heading text-2xl text-gray-200 leading-none">413</span>
                            <span className=" text-gray-300 text-sm leading-none text-center">Acessos ao link</span>
                        </div>
                        <div className=" bg-gray-700 items-center justify-center rounded-xl px-4 py-7 flex flex-col gap-1 border border-gray-600 relative">
                            <BadgeCheck className=" text-purple size-5 absolute top-3 left-3"/>
                            <span className="font-semibold font-heading text-xl text-gray-200 leading-none">413</span>
                            <span className=" text-gray-300 text-sm leading-none text-center">Inscrições feitas</span>
                        </div>
                        <div className=" bg-gray-700 items-center justify-center rounded-xl px-4 py-7 flex flex-col gap-1 border border-gray-600 relative">
                            <Medal className=" text-purple size-5 absolute top-3 left-3"/>    
                            <span className="font-semibold font-heading text-xl text-gray-200 leading-none">413</span>
                            <span className=" text-gray-300 text-sm leading-none text-center">Posição no ranking</span>
                        </div>
                    </div>
    )
}