import P from 'prop-types';



export const Button = ({ children, onButtonClick, disabled =false }) => {
  return <button disabled={disabled}  onClick={onButtonClick}>{children}</button>
}


Button.propTypes = {
  children: P.node,
  onButtonClick: P.func,
  disabled: P.bool,
}

