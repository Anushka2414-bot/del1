function toggleDiagram(section) {
    const diagramId = section + 'Diagram';
    const diagram = document.getElementById(diagramId);
    if (diagram.style.display === 'none' || diagram.style.display === '') {
        diagram.style.display = 'block';
    } else {
        diagram.style.display = 'none';
    }
}
