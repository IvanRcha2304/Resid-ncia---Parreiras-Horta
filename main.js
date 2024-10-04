function acenderLampada() {
    let homeDiv = document.querySelector('.Home');
    let title = document.querySelector('.title');
    let lampada = document.querySelector('.lampada-apagada');
        
    if (homeDiv.style.backgroundColor === 'rgb(77, 76, 76)') {
            homeDiv.style.backgroundColor = 'white';
            title.style.color = 'yellow';
            lampada.src = 'lampada.png'; 
         } 
         
     else {
            homeDiv.style.backgroundColor = 'rgb(77, 76, 76)';
            title.style.color = 'black';
            lampada.src = 'lampada (1).png'; 
        }
}
    
