import { FeedWrapper } from "@/components/feed-wrapper";
import { StickerWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickerWrapper>
                My sticky sidebar
            </StickerWrapper>
            <FeedWrapper>
                <Header title=""/>
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;