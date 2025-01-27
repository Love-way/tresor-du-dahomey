import { FeedWrapper } from "@/components/feed-wrapper";
import { StickerWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickerWrapper>
                <UserProgress
                    activeLevel={{ title: "Etape 1", imageSrc: "file.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickerWrapper>
            <FeedWrapper>
                <Header title="Etape 1 : LE QUIZ"/>
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;