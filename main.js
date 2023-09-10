    // Toast function
    function toast({
        tilte = '',
        message = '',
        type = 'info',
        duration = 3000,
    } 
){ 
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')

        toast.classList.add('toast');
        toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="toast-body">
            <h3 class="toast-title"> ${tilte}</h3>
            <p class="toast-msg"> ${message} </p>
        </div>
        <div class="toast-close">
            <i class="fas fa-times"></i>
        </div>
        `;
        main.appendChild(toast);
    } 

}
    toast({
        tilte:'success',
        message: 'Computer Connected',
        type:'success',
        duration: 3000,

    });                

console.log(123)
