import { Topic } from "../topic";

export function SectionTopics() {
    const topics = [
        {
            id: "use",
            title: "Facilidade de uso",
            description:
                "A newsletter chega direto ao seu e-mail, sem passos extras. Você abre, lê e pratica inglês de forma simples e rápida, todos os dias.",
        },
        {
            id: "aprendizado",
            title: "Aprendizado contínuo",
            description:
                "O contato diário com inglês mantém o cérebro ativo. Pequenas doses de leitura constantes criam progresso real sem esforço pesado.",
        },
        {
            id: "imersao",
            title: "Imersão no idioma",
            description:
                "Ler notícias em inglês coloca você em contato com vocabulário real usado no dia a dia. É uma imersão prática, rápida e natural.",
        },
        {
            id: "confianca",
            title: "Informação de confiança",
            description:
                "As notícias vêm do The New York Times, uma das fontes mais respeitadas do mundo. Você pratica inglês lendo conteúdo confiável e atualizado.",
        },
        {
            id: "repertorio",
            title: "Construção de repertório",
            description:
                "Com diferentes temas e estilos de texto, você amplia seu vocabulário e seu conhecimento geral ao mesmo tempo, criando repertório para conversas, estudos e trabalho.",
        },
    ];

    // Organizar rotas
    return (
        <section className="w-screen flex gap-10 flex-col pl-18 pt-10 pb-10">
            <Topic 
                key={topics[0].id}
                title={topics[0].title}
                id={topics[0].id}
                description={topics[0].description}
            />
            <Topic 
                key={topics[1].id}
                title={topics[1].title}
                id={topics[1].id}
                description={topics[1].description}
            />
            <Topic 
                key={topics[2].id}
                title={topics[2].title}
                id={topics[2].id}
                description={topics[2].description}
            />
            <Topic 
                key={topics[3].id}
                title={topics[3].title}
                id={topics[3].id}
                description={topics[3].description}
            />
            <Topic 
                key={topics[4].id}
                title={topics[4].title}
                id={topics[4].id}
                description={topics[4].description}
            />
        </section>
    )
}