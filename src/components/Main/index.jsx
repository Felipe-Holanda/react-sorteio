import './Main.css'
import { useState } from 'react';

export default function Main() {

    let [count, setCount] = useState(0);
    function prizeDraw() {
        setCount(Math.floor(Math.random() * 100) + 1);
    }

    let names = ['Nenhum'];
    function addNames() {
        const addedNames = document.querySelector('textarea').value;
        names = addedNames.split(',');
        document.querySelector('textarea').value = '';
        alert(`Adicionado ${names.length} nomes a lista de nomes`);
    }

    function drawWinner() {
        const winner = names[Math.floor(Math.random() * names.length)];
        alert('O ganhador é: ' + winner);
    }

    function clearNames() {
        names = ['Nenhum'];
        alert('Lista de nomes limpa com sucesso!');
    }


    return (
        <main>
            <div className='randomNumber'>
                <h1>Sortear Número</h1>
                <span>O número sorteado é: {count}</span>
                <button onClick={prizeDraw}>Sortear</button>
            </div>
            <div className='randomName'>
                <h1>Registrar nomes</h1>
                <hr />
                <div id='nameRegister'>
                    <textarea placeholder='Insira os nomes separados por uma VIRGULA ( , )'></textarea>
                    <nav>
                        <button onClick={addNames} className='add'>Registrar nomes</button>
                        <button onClick={clearNames} className='clear'>Limpar nomes</button>
                        <button onClick={drawWinner}>Sortear {'>>'}</button>
                    </nav>
                </div>
                <hr />

            </div>
        </main>
    )
}