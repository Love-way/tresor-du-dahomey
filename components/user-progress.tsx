import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
    activeLevel: { imageSrc: string; title: string }; //replace with DB types
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({ activeLevel, points, hearts, hasActiveSubscription }: Props) => {
    return (
        <div className="flex item-center justify-between gap-x-2 w-full">
            <Link href="/etapes">
            <Button>
                <Image 
                    src={activeLevel.imageSrc}
                    alt={activeLevel.title}                   
                    className="rounded-md border"
                    width={32}
                    height={32}
                />
            </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/flash.svg" height={28} width={28} alt="points" className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/heart.svg" height={22} width={22} alt="hearts" className="mr-2"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 stroke-[3]"/>: hearts }
                </Button> 
            </Link>
        </div>
    )
}