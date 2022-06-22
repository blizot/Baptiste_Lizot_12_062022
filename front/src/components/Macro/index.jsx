/**
 * Creates a Macronutrient tile
 * 
 * @param { String } category
 * @param { Integer } amount
 * @param { String } image - image's path
 * 
 * @returns { React.Component }
 */

import PropTypes from 'prop-types'

import frenchTranslation from '../../assets/translations/french.json'

function Macro(props) {
  const { category, amount, image } = props

  return (
    <article>
      <figure className="macro">
        <span className={`macro__image-container ${category}`}>
        <img src={image} alt={category} className="macro__image" />
        </span>
        <figcaption className="macro__text">
          <p className="macro__value">
            {amount}{category === 'calorie' ? 'kCal' : 'g'}
          </p>
          <h2 className="macro__name">{`${frenchTranslation.plural[category]}`}</h2>
        </figcaption>
      </figure>
    </article>
  )
}

export default Macro

Macro.propTypes = {
  category: PropTypes.string,
  amount: PropTypes.number
}
