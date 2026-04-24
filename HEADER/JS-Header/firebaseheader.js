import { db } from "../../JS-Firebase/firebase-init.js";
import {
  collection,
  getDocs, doc, getDoc
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";


async function cargarHeader() {
    try {
        const refTextos = doc(db, "header", "textos");
        const snapTextos = await getDoc(refTextos);

        if (!snapTextos.exists()) {
            console.error("No existe header/textos");
            return;
        }

        const data = snapTextos.data();

        // CATEGORIAS
        document.getElementById("HeaderContacto").textContent = data.HeaderContacto;
        document.getElementById("HeaderInicio").textContent = data.HeaderInicio;
        document.getElementById("HeaderProductos").textContent = data.HeaderProductos;
        document.getElementById("HeaderProductosLatinos").textContent = data.HeaderProductosLatinos;

        // TITULOS
        document.getElementById("TituloHeader").textContent = data.TituloHeader;
        document.getElementById("SubtituloHeader").textContent = data.SubtituloHeader;
        
        
        //EMOJIS
        document.getElementById("Headeremoji_trofeo").textContent = data.Headeremoji_trofeo;
        document.getElementById("emoji_cesta").textContent = data.emoji_cesta;

     

        console.log("Textos cargados correctamente");

    } catch (error) {
        console.error("Error cargando textos:", error);
    }
}
cargarHeader();