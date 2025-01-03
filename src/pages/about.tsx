import "swiper/css/bundle";
import { HardSkills } from "../components/hardSkills";
export function About() {
  return (
    <div className="screen flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50">
      <div className="flex h-full max-h-[20%] w-full">
        <h1 className="flex w-full items-center justify-center pb-10 text-center text-8xl font-extrabold text-zinc-950 underline decoration-yellow-500 decoration-4 underline-offset-8">
          ABOUT ME
        </h1>
      </div>
      <div className="flex max-w-[1320px] flex-col items-center justify-center">
        <h1 className="pb-5 text-lg">
          Olá, me chamo <strong>Vithor Mitsuyoshi Saito</strong>, sou de
          Curitiba, PR, e atualmente atuo como desenvolvedor back-end,
          especializado na construção de aplicações web e integração de
          <strong> APIs</strong>. Tenho como foco a utilização de boas práticas
          de desenvolvimento, como os princípios <strong>SOLID</strong> e
          <strong> Clean Architecture</strong>, para criar aplicações robustas e
          escaláveis.
        </h1>
        <p className="pb-5 text-sm">
          Com aproximadamente um ano de experiência como desenvolvedor, tive a
          oportunidade de explorar diversas tecnologias para aprimorar o
          desenvolvimento de aplicações. Durante esse período, adquiri
          conhecimento em ferramentas como gerenciadores de banco de dados(
          DBeaver e HeidiSQL), API clients(Postman), plataformas de design
          gráfico(Figma) e plataformas para trabalho colaborativo(Github e
          GitLab), entre outras. Além de utilizar ferramentas que auxiliam no
          desenvolvimento, aprofundei meu conhecimento em linguagens de
          programação, o que me permitiu evoluir ainda mais em
          frameworks(Express, Fastify e React), testes(Vitest e Jest) e
          programação orientada a objetos (POO).
        </p>
        <div className="flex h-full w-full max-w-[1320px]">
          <HardSkills />
        </div>
        <div className="flex w-full">
          <div className="w-full max-w-[40%] pt-5">
            <h2 className="pb-5 text-xl">Soft Skill's </h2>
            <h3 className="text-md font-semibold">Trabalho em Equipe</h3>
            <p className="pb-2 text-sm">
              Aprimorado ao longo de varios anos de trabalho com diversas
              pessoas e aperfeiçoado para a área da tecnologia.
            </p>
            <h3 className="text-md font-semibold">Resolução de problemas</h3>
            <p className="pb-2 text-sm">
              Na analise de cenários complexos e na busca de otimização de
              processos.
            </p>
            <h3 className="text-md font-semibold">Atenção aos detalhes</h3>
            <p className="pb-2 text-sm">
              Com a busca minuciosa na melhores praticas para o desenvolvimento
              de aplicações.
            </p>
            <h3 className="text-md font-semibold">Facilidade em comunicação</h3>
            <p className="pb-2 text-sm">
              Aprimorado diariamente em trocas de ideias e alinhamento entre a
              equipe.
            </p>
          </div>
          <div className="flex w-full flex-col ps-5 pt-5">
            <h2 className="pb-5 text-xl">Formação Academica</h2>
            <div className="flex h-full flex-col items-start justify-center gap-3">
              <div className="flex items-start gap-5">
                <img src="../../assents/pucpr.png" className="w-24" alt="" />
                <p>
                  <strong>Analise em Desenvolvimento de Sistemas</strong> - ADS.
                  Atualmente cursando o ultimo periodo conheci diversos temas
                  como: POO, Desenvolvimento Mobile, Arquitetura de Software,
                  Métodologias Ageis e etc..
                </p>
              </div>
              <div className="flex items-start gap-5">
                <img src="../../assents/alura.png" className="w-24" alt="" />
                <p>
                  <strong> Alura </strong>- Com um ano de curso tive meus
                  aprendizados aprofundado com as linguagens de programação
                  <strong> Javascript</strong> e <strong>Typescript</strong>.
                </p>
              </div>
              <div className="flex items-start gap-5">
                <img src="../../assents/rockseat.png" className="w-24" alt="" />
                <p>
                  <strong>Rockseat</strong> - Realizei projetos reais com enfase
                  em boas praticas de desenvolvimento e ferramentas modernas
                  usadas no cotidiano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
