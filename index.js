const btns = document.querySelectorAll(".button")
const body = document.querySelector("body")

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        // console.log(e)
        // console.log(e.target) // returns which element invoked the event
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id
                break;
            default:
                body.style.backgroundColor = "black"            
        }
    }) // Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
})