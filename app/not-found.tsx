import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <div>
                <h1>Paginanão encontrada 404</h1>

                <Link href="../">Voltar</Link>
            </div>
        </div>
    )
}