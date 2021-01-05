import styles from './Grid.module.scss';

const Grid = ({ children, className, ...rest }) => {
  let gridClassName = styles.grid;

  if ( className ) {
    gridClassName = `${gridClassName} ${className}`;
  }

  return (
    <div {...rest} className={gridClassName}>
      { children }
    </div>
  )
}

export default Grid;