document.addEventListener('DOMContentLoaded',()=>{
    const space=document.querySelector('.btns-container');
    let streak=parseInt(localStorage.getItem('streak'))||3;
    const rows={};
    for(let i=1;i<=18;i++){
        const row=document.createElement('div');
        row.id=`row-${i}`;
        row.className='row';
        row.style.marginBottom='10px';
        rows[i]=row;
        space.appendChild(row);
    }
    let row_value=1;
    for(let i=1;i<=180;i++){
        const btn=document.createElement('button');
        btn.id=`Day-${i}`;
        btn.innerText=i;
        btn.style.margin = '10px';
        if(i<=streak){
            btn.innerText=i;
            btn.style.backgroundColor='green';
            btn.disabled=true;
            btn.classList.add('done')
            btn.title='Done';
        }else if(i==streak+1){
            btn.classList.add('today');
            btn.title="Let's Do it for Today.";
            btn.addEventListener('click',()=>{
                streak+=1;
                localStorage.setItem('streak',streak);
                btn.style.backgroundColor='green';
                btn.classList.add('done')
                btn.title='Good Job.';
                btn.disabled;
            });
        }else{btn.classList.add('notdone');
            btn.title='Be Consistent..!';
            btn.disabled=true;
        }
        rows[row_value].appendChild(btn);
        if(i%18===0){
            row_value+=1;
        }
    }
})

// document.addEventListener('DOMContentLoaded', () => {
//     const space = document.querySelector('.btns-container');
//     let streak = parseInt(localStorage.getItem('streak')) || 3;

//     // Create 30 rows (180 / 6 buttons per row)
//     const rows = {};
//     for (let i = 1; i <= 30; i++) {
//         const row = document.createElement('div');
//         row.id = `row-${i}`;
//         row.style.marginBottom = '10px';
//         rows[i] = row;
//         space.appendChild(row);
//     }

//     let rowValue = 1;
//     for (let i = 1; i <= 180; i++) {
//         const btn = document.createElement('button');
//         btn.innerText = i;
//         btn.style.margin = '4px';
//         btn.id = `day-${i}`;

//         if (i <= streak) {
//             btn.style.backgroundColor = 'green';
//             btn.disabled = true;
//         } else if (i === streak + 1) {
//             btn.addEventListener('click', () => {
//                 btn.style.backgroundColor = 'green';
//                 btn.disabled = true;
//                 streak += 1;
//                 localStorage.setItem('streak', streak);
//                 // Optionally reload or re-render buttons
//             });
//         } else {
//             btn.disabled = true;
//         }

//         rows[rowValue].appendChild(btn);

//         if (i % 6 === 0) rowValue++;
//     }
// });