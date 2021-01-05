import styles from './Card.module.scss';

const Card = ({ children, className, ...rest }) => {
  let cardClassName = styles.card;

  if ( className ) {
    cardClassName = `${cardClassName} ${className}`;
  }

  return (
    <div {...rest} className={cardClassName} >
      { children }
    </div>
  )
}

export default Card;