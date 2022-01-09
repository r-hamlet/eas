function makeGrid(gridSize) {

    for (i = 0; i < gridSize; i++) {
        for (n = 0; n < gridSize; n++) {
            var newDiv = document.createElement('div');
            newDiv.id = i + '-' + n;
            newDiv.className = 'gridBox';
            box.appendChild(newDiv);
        }
    }



    const buttons = document.querySelectorAll('.gridBox');

    buttons.forEach((btn) => {
        btn.style.width = ((1 / gridSize) * 100) + '%';
        btn.style.height = ((1 / gridSize) * 100) + '%';
        btn.addEventListener('mouseover', () => {
            btn.className = 'gridBoxHover';
        })
    })


}