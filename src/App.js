import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Products from './components/Products/Products'
import Recommended from './components/Recommended/Recommended'
import Sidebar from './components/Sidebar/Sidebar'
import { Card } from './components/Card'
import data from './db/data'

export const App = () => {
	const [selectedCategory, setSelectedCategory] = useState(null)

	//                     Input Filter
	const [query, setQuery] = useState('')
	const handleInputChange = (event) => {
		setQuery(event.target.value)
	}

	const filteredItems = data.filter(
		(product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
	)
	//                     Radio Filter
	const handleChange = (event) => {
		setSelectedCategory(event.target.value)
	}

	//                     Buttons Filter
	const handleClick = (event) => {
		setSelectedCategory(event.target.value)
	}

	function filteredData(data, selected, query) {
		let filteredProducts = data

		//Filtering Input Items
		if (query) {
			filteredProducts = filteredItems
		}

		//Selected Filter
		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, color, company, newPrice, title }) =>
					category === selected ||
					color === selected ||
					company === selected ||
					newPrice === selected ||
					title === selected
			)
		}
		return filteredProducts.map(
			({ img, title, star, reviews, prevPrice, newPrice }) => (
				<Card
					key={Math.random()}
					img={img}
					title={title}
					star={star}
					reviews={reviews}
					prevPrice={prevPrice}
					newPrice={newPrice}
				/>
			)
		)
	}

	const result = filteredData(data, selectedCategory, query)
	return (
		<>
			<Sidebar handleChange={handleChange} />
			<Navigation query={query} handleInputChange={handleInputChange} />
			<Recommended handleClick={handleClick} />
			<Products result={result} />
		</>
	)
}
