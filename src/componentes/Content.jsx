import react from 'react';
import './Content.css';

function Content(){
    return(
        <>
        <section>
            <h2>O que é um processador Majorana?</h2>
            <br />
            <p>
            Um processador Majorana é um tipo de processador quântico que usa partículas chamadas férmions de Majorana para funcionar. 
            Essas partículas são especiais porque são suas próprias antipartículas, 
            o que significa que têm uma estrutura única que pode ajudar a tornar os cálculos quânticos mais estáveis.
            <br />
            <br />
            <h2>Por que isso é importante?</h2>
            <br />
             Isso é importante porque, na computação quântica, um dos maiores desafios é controlar os erros causados por interferências externas. Os férmions de Majorana podem ajudar a criar qubits mais resistentes, 
             o que torna esse tipo de processador uma promessa para o futuro da tecnologia quântica.
            </p>
            <iframe src="https://www.youtube.com/embed/108KixM8PkI?si=Uv_jwYK6wWq-zyg5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        </>
    );
};
export default Content;