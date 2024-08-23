import { Category } from './Category/Category'
import { Colors } from './Colors/Colors'
import { Price } from './Price/Price'
import './Sidebar.css'

const Sidebar = ({ handleChange }) => {
	return (
		<>
			<section className='sidbar'>
				<div className='logo-container'>
					<h1>🛒</h1>
				</div>

				<Category handleChange={handleChange} />
				<Price handleChange={handleChange} />
				<Colors handleChange={handleChange} />
			</section>
		</>
	)
}

export default Sidebar
