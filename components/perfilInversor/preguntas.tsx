import { PreguntasProps } from "preguntas"

export default function Preguntas({
    pregunta,
    opcion1,
    opcion2,
    opcion3,

}: PreguntasProps) {

    return (
        <>
            <div className="flex items-center justify-center">
                <h2>{pregunta}</h2>
            </div>
            <div className="flex items-center justify-center">
                <ul>
                    <li>
                        {opcion1}
                    </li>

                    <li>
                        {opcion2}
                    </li>

                    <li>
                        {opcion3}
                    </li>
                </ul>
            </div>
        </>
    )
}