import Companies from "../components/Companies/Companies";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default function Empresas() {
    return (
        <>
            <PageTitle excludePrefix>Empresas - Mais Vagas MG</PageTitle>
            <Companies />
        </>
    );
}