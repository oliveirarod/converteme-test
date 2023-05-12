// Hooks
import { useAdditionalOptionsContext } from "../../context/AdditionalOptions";

// Styles
import { Container } from "./ChargesOptionsStyle";

// Components
import Option from "./Option";

interface Option {
  name: string;
  title: string;
  desc: string;
}
const options: Option[] = [
  {
    name: "documents",
    title: "Inserir documentos e arquivos",
    desc: "Deseja adicionar documentos para o seu cliente visualizar e baixar quando receber esta cobrança",
  },
  {
    name: "invoice",
    title: "Emitir nota fiscal de serviço",
    desc: "Você deseja emitir uma nota fiscal de serviço vinculado a esta cobrança?",
  },
];

const ChargesOptions = () => {
  const { setDocuments, setInvoice } = useAdditionalOptionsContext();

  return (
    <Container>
      <div className="card-title">Opções adicionais</div>

      <div className="card-content">
        {options.map(({ title, desc, name }, index) => {
          return (
            <Option
              title={title}
              desc={desc}
              contextAttr={name === "documents" ? setDocuments : setInvoice}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ChargesOptions;
