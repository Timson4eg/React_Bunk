export function useDonat({ data }) {
	const options = {
		size: 250,
		donutWidth: 50,
		gap: 15
	}

	// вычисляет общую сумму значений сегментов.
	function calculateTotalValue() {
		// return data.data.reduce()
		return data.reduce((acc, slice) => acc + slice.value, 0)
	}
	// d="M 6.123233995736766e-15 -100 A 100 100 0 1 1 -47.78162989461195 87.84597796492635"

	// /**
	//  * Convert polar coordinates to Cartesian coordinates.
	//  * @param {number} percentage - The percentage of the circle.
	//  * @param {number} radius - The radius of the circle.
	//  * @returns {number[]} The Cartesian coordinates [x, y].
	//  */
	// // преобразует полярные координаты в декартовы координаты.
	function polarToCartesian(percentage, radius) {
		const angleInDegrees = percentage * 3.6 - 90
		const angleInRadians = (angleInDegrees * Math.PI) / 180
		const x = radius * Math.cos(angleInRadians)
		const y = radius * Math.sin(angleInRadians)
		return [x, y]
	}

	// /**
	//  * Create an SVG element and set its attributes.
	//  * @returns {SVGElement} The created SVG element.
	//  */
	function createSvgElement() {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

		svg.setAttribute('width', options.size)
		svg.setAttribute('height', options.size)
		svg.setAttribute(
			'viewBox',
			`-5 -5 ${options.size + options.gap} ${options.size + options.gap}`
		)
		return svg
	}

	// /**
	//  * Create an SVG group element and set its attributes.
	//  * @returns {SVGElement} The created SVG group element.
	//  */
	function createSvgGroupElement() {
		const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		g.setAttribute(
			'transform',
			`translate(${options.size / 2 + options.gap / 4}, ${
				options.size / 2 + options.gap / 4
			})`
		)
		return g
	}

	function createPathElement(slice, pathData) {
		if (!pathData || pathData.includes('NaN')) return

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		path.setAttribute('d', pathData)
		path.setAttribute('fill', 'none')
		path.setAttribute('stroke', slice.color)
		path.setAttribute('stroke-width', options.donutWidth)
		return path
	}

	// создает элементы пути SVG для каждого сегмента диаграммы.
	function createSvgPathElements(g) {
		const totalValue = calculateTotalValue(),
			scale = 0.8,
			newSize = options.size * scale,
			radius = newSize / 2

		let accumulatedPercentage = 0

		data.forEach(slice => {
			const percentage = (slice.value / totalValue) * 100
			const [startX, startY] = polarToCartesian(accumulatedPercentage, radius)
			accumulatedPercentage += percentage
			const [endX, endY] = polarToCartesian(accumulatedPercentage, radius)
			const largeArcFlag = percentage > 50 ? 1 : 0
			const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`

			const path = createPathElement(slice, pathData)

			path.classList.add('rotate')
			g.appendChild(path)
		})
	}

	/**
	 * Generates an SVG element representing the donut chart.
	 * @returns {SVGElement} The SVG element containing the donut chart.
	 */
	function getSvg() {
		const svg = createSvgElement()
		const g = createSvgGroupElement()
		createSvgPathElements(g)
		svg.appendChild(g)

		return svg
	}

	return { getSvg }
}
