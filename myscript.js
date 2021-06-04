'use strict';

let el = document.getElementById('ora');

setInterval( () => {el.innerText = dayjs().format('DD-MM-YYYY | HH:mm:ss')}, 1000);

window.addEventListener('load', event => {

    /*
    let div = document.getElementById('comments');
    div.appendChild(document.createElement('p'));
    div.children[2].innerText = 'hello';
    */

    //Disabilita default submit dei form presenti nella pagina
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log('submit');
        })
    });

    //Disabilita default dei link (apertura)
    let link = document.querySelectorAll('a');

    link.forEach(f => {
        f.addEventListener('click', event => {
            event.preventDefault();
            console.log('click');
        })
    });

    //Click su riga tabella
    let rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', event => {
            //console.log(event.target);
            let score = row.children[1].innerText;
            console.log(score);

            let comments = document.getElementById('comments');
            comments.insertAdjacentHTML('beforeend', `<p>The score is: ${score}</p>`)

        })
    });

    // Form, eventi input e change
    let f = document.getElementById('f');

    f.addEventListener('input', event => {
        console.log(`Valore inserito: ${f.value}`);
    });

    f.addEventListener('change', event => {
        console.log(`Il valore è cambiato: ${f.value}`);
    });

})
