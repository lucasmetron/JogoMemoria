function vira(){
    let carta = document.getElementsByClassName("card")[0]
    let status = document.getElementsByName("status")
    console.log(carta.children[0])
    console.log(status)
    carta.setAttribute("class", "card flip")
}