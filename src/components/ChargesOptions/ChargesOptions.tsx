// Styles
import { Container } from "./ChargesOptionsStyle";

// Components
import Option from "./Option";

interface Option {
  title: string;
  desc: string;
}

const ChargesOptions = () => {
  const options: Option[] = [
    {
      title: "Inserir documentos e arquivos",
      desc: "Deseja adicionar documentos para o seu cliente visualizar e baixar quando receber esta cobrança",
    },
    {
      title: "Emitir nota fiscal de serviço",
      desc: "Você deseja emitir uma nota fiscal de serviço vinculado a esta cobrança?",
    },
  ];

  return (
    <Container>
      <div className="card-title">Opções adicionais</div>

      <div className="card-content">
        {options.map(({ title, desc }, index) => {
          return <Option title={title} desc={desc} key={index} />;
        })}
      </div>
    </Container>
  );
};

export default ChargesOptions;
