const btns = document.querySelectorAll('.button')
const body = document.querySelector('body')

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
})









//     btn.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
//         if (e.target.id === 'grey'){
//             body.style.background = 'grey';
//         if (e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue'){
//             body.style.background = 'blue';
//         }
//         if (e.target.id === 'yellow'){
//             body.style.backgroundColor = 'yellow';
//         }
//     })})
