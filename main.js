import "./css/main.css"
import classes from "./css/styles.module.css"
import "./sass/main.scss"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import * as bootstrap from "bootstrap"
import { Modal } from "bootstrap"
// import imgUrl from "/images/img.jpg"


// /////////////////////////////////////////////////
document.querySelector('h2').className = classes.green;


// bootsrtap
const modal = new Modal('#exampleModal')

document.getElementById('showModal').addEventListener('click', () => {
  modal.show()
})


///////////////////////////////////////////////////////////////////
const imgUrl = new URL('/images/img.jpg', import.meta.url).href;


document.getElementById('img').src = imgUrl;