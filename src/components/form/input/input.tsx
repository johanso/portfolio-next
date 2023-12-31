import { ChangeEvent } from 'react'
import styles from './input.module.scss'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder?: string
  error?: {
    touched?: boolean
    message?: string
  }
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  onBlur
}: InputProps) => {

  return (
    <div className={styles.group}	>
      <input 
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={styles.input} />
      <label className={styles.label} htmlFor={name}>{label}</label>
      <div className={`${styles.line} ${error?.message !== undefined ? ' error' : ''}`}></div>
      {error?.message && error?.touched && (
        <p className={styles.message}>{error?.message}</p>
      )}
    </div>
  )
}

export default Input