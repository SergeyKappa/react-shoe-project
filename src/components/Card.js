import { BsBagHeartFill } from 'react-icons/bs'

export const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className='card'>
					<img
						src={img}
						alt={title}
						className='card-img'
					/>
					<div className='card-details'>
						<h3 className='card-title'>{title}</h3>
						<section className='card-reviews'>
							{star}
							{star}
							{star}
							{star}
							<span className='total-reviews'>{reviews}</span>
						</section>
						<section className='cards-price'>
							<div className='price'>
								<del>{prevPrice}</del> ${newPrice}
							</div>
							<div className='bag'>
								<BsBagHeartFill className='bag-icon' />
							</div>
						</section>
					</div>
				</section>
  )
}


