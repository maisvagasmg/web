import Company from "../components/Company/Company";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default function Empresa() {
    return (
        <>
            <PageTitle excludePrefix>Empresas - Mais Vagas ES</PageTitle>
            <Company />
        </>
    );
}