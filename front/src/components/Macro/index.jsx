import importAllImages from '../../assets/tools/importAllImages'
import frenchTranslation from '../../assets/translations/french.json'

function Macro(props) {
  const { category, amount } = props

  const images = importAllImages(
    require.context('../../assets/images/icons/macros', false, /\.svg$/)
  )

  return (
    <article>
      <figure className="macro">
        <span className={`macro__image-container ${category}`}>
        <img src={images[category]} alt={category} className="macro__image" />
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
