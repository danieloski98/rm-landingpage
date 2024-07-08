/* eslint-disable react/no-unescaped-entities */
export default function PostCard() {
    return (
        <div className="w-full h-[210px] flex items-center mb-10">
            <div className="w-[30%] h-[200px] bg-gray-500 rounded-lg"></div>
            <div className="flex flex-col ml-4">
                <p className=" text-red-500 text-[14px] font-bold">Article</p>
                <h3 className="font-semibold text-[18px] text-white w-[60%]">Introduction to Bible Study: Unlocking the Power of God's Word</h3>
                <p className=" font-normal text-[16px] text-[whitesmoke] mt-2 w-[60%]">In this foundational post, we'll explore the significance of Bible study, its transformative potential, and why it's ...</p>

                <div className="flex items-center mt-2">
                    <div className="w-14 h-14 rounded-full bg-gray-500"></div>
                    <div className="ml-3">
                        <p className="font-semibold text-[16px] text-[whitesmoke]">Phoniex Baker</p>
                        <p className="font-normal text-[16px] text-[whitesmoke]">19 Jan 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}