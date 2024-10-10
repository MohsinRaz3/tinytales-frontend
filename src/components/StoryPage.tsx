import Image from 'next/image'
import React from 'react'
import { IStory } from './utils/Types'

const StoryPage = ({ story }: { story: IStory }) => {
    return (
        <div className="p-10 w-full max-w-[1728px] mx-auto">
            <div className="rounded-xl bg-[#e6e6fa] min-h-screen w-full p-5">
                <h1 className="text-4xl text-center font-extrabold py-16">{story.result.story_title}</h1>
                {/* part 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2  place-items-center  items-start gap-10">
                    <p className="text-lg font-normal ">
                        {story.result.story_des_1}
                    </p>
                    <Image src={story.result.flux_images_url.image_urls[0]} height={300} width={300} className="h-fit max-h-[500px] max-w-[500px] w-full   bg-contain" alt="story image" />
                    {/* part 2 */}
                    <p className="text-lg font-normal ">
                        {story.result.story_des_2}
                    </p>
                    <Image src={story.result.flux_images_url.image_urls[1]} height={300} width={300} className="h-fit max-h-[500px] max-w-[500px] w-full   bg-contain" alt="story image" />
                    {/* part 3 */}
                    <p className="text-lg font-normal ">
                        {story.result.story_des_3}
                    </p>
                    <Image src={story.result.flux_images_url.image_urls[2]} height={300} width={300} className="h-fit max-h-[500px] max-w-[500px] w-full   bg-contain" alt="story image" />

                </div>
            </div>
        </div>
    )
}

export default StoryPage