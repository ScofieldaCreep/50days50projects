const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0
// 这样操控 html 中的数值变量
let int = setInterval(blurring, 30)
function blurring() {
	load++
	if (load > 99) {
		clearInterval(int)
	}
	loadText.innerText = `${load}%`
	// 可以这样操控 元素的 css 样式
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, inMin, inMax, outMin, outMax) => {
	return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
