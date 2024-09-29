import style from './button.module.css'

export const Button = ({ props, onChange, label, variant }) => {
  return (
    <button
      className={[style.button, style[variant]].join(' ')}
      onChange={onChange}
      {...props}
    >
      {label}
    </button>
  )
}
