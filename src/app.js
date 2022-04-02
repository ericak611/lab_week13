// const o_children = document.querySelector('.original-container').children;
// const copy_cont = document.querySelector('.copy-container');
// const btn = document.querySelector('button');

// function copy() {
//     for (let i=0; i < o_children.length; i++) {
//         o_children[i].addEventListener('click', function (e) {
//             const div = document.createElement('div');
            
//             const p = document.createElement('p');
//             p.innerHTML = o_children[i].children[0].innerHTML;
    
//             div.appendChild(p);
//             copy_cont.appendChild(div);
//         });
//     }
// };


function clear() {
    btn.addEventListener('click', function (e) {
        copy_cont.replaceChildren();
    });
};

copy()
clear()