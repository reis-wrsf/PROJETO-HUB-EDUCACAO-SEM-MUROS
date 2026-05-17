function showSection(id){
    //Esconder seções
    document.querySelectorAll('.content-section').forEach(section => {section.classList.add ('hidden');});
    //Mostrar Seções
    document.getElementById(id).classList.remove('hidden');
}