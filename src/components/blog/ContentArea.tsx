import PostCard from "./PostCard";

const items = [
    1,2,3,4,5,6,7,8,9,1,2,3,4
];

export default function ContentArea() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[50%]">
                {items.map((_, index) => <PostCard key={index.toString()} />)}
            </div>
        </div>
    )
}