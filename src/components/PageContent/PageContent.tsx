import { ReactNode } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Styles
import { PageContainer } from "./PageContentStyle";

interface PageContentProps {
  children: ReactNode;
  pageName: string;
}

const PageContent = ({ children, pageName }: PageContentProps) => {
  return (
    <PageContainer>
      <div className="return-button">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>VOLTAR</span>
      </div>

      <div className="page-name">
        <span>{pageName.toUpperCase()}</span>
      </div>

      <div className="page-content-bg">{children}</div>
    </PageContainer>
  );
};

export default PageContent;
