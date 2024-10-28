const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', updateBox)

function updateBox() {
	const triggerHeight = (window.innerHeight * 4) / 5
	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top
		if (boxTop < triggerHeight) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
}
