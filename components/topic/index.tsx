type TopicProps = {
    id: string;
    title: string,
    description: string
}

export function Topic(props: TopicProps) {

    return (
        <div id={props.id} className="flex flex-col gap-5 border border-sky-600 pb-30 pt-30  w-[40%] rounded-2xl">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}