const cbs = document.querySelectorAll('input[type="checkbox"]');

let lc = false;

function checkClicked(e){

    let btwn = false;
    if(e.shiftKey && this.checked){
        cbs.forEach(checkbox => {
            if(checkbox == this || checkbox == lc){
                btwn = !btwn;
            }

            if(btwn){
                checkbox.checked = true;
            }
        });
    }
    lc = this;
}
cbs.forEach(checkbox => checkbox.addEventListener('click', checkClicked));