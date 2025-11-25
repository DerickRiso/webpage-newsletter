type TopicProps = {
    id: string;
    title: string,
    description: string
}

export function Topic(props: TopicProps) {

    return (
        <div id={props.id} className="flex flex-col gap-5 border border-sky-600 pb-20 pt-20  w-[30%] rounded-2xl ease-in-out transition hover:scale-115 hover:bg-sky-950 cursor-pointer">
            <h2 className="pl-8 pr-10 text-2xl">{props.title}</h2>
            <p className="pl-8 pr-10">{props.description}</p>
        </div>
    )
}