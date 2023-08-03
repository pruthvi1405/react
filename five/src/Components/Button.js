import className from 'classnames';

export const Button = ({children,primary,secondary,danger,warning, success,rounded,outline,...rest}) => {
    const classes = className('px-3 py-1.5 my-1 mx-1 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white text-black': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
      });

  return (
      <div>
          <button {...rest} className={classes}>{children}</button>
      </div>
    
  )
  
}
Button.propTypes = {
    customProp: function(props) {
        let total=Number(!!props.primary)+Number(!!props.secondary)+Number(!!props.danger)+Number(!!props.warning)+Number(!!props.success)
        if(total>1){
            throw new Error ("You can only choose one among them!");
        }
        
    }
  };

export default Button