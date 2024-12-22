import React from 'react'
import styles from './Card.module.css'
import PropTypes from 'prop-types'


const Card = ({id,name,age,desc,src}) => {
    return (
    <div className={styles.card}>
        <img src={src} />
        <h4>ID: {id}</h4>
        <h2>Name: {name}</h2>
        <h4>Age: {age}</h4>
        <h5>Description: {desc}</h5>
    </div>
  )
}

Card.propTypes = {
  id:PropTypes.number,
  name:PropTypes.string,
  age:PropTypes.number,
  desc:PropTypes.string,
  src:PropTypes.string,
}

export default Card