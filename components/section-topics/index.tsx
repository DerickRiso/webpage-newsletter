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
        <section className="w-screen">
            {topics.map((t) => (
                <Topic 
                    key={t.id}
                    id={t.id}
                    title={t.title}
                    description={t.description}
                />
            ))}
        </section>
    )
}