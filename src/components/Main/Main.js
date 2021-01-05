import styles from './Main.module.scss';

const Main = ({ children, className, ...rest }) => {
  let mainClassName = styles.main;

  if ( className ) {
    mainClassName = `${mainClassName} ${className}`;
  }

  return (
    <div {...rest} className={mainClassName} >
      { children }
    </div>
  )
}

export default Main;