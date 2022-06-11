import React from 'react'
import PropTypes from 'prop-types'

const Rating =({value, text, color })=>{
  console.log('text', color)
  return (
    <div className='rating'>

      <span> {/* if true again if and else
          if()
            if() 
              statement
            else
              statement
      */}
        <i style={{color}} className={
          value>=1
          ? 'fas fa-star'
          :value>=0.5
          ? 'fa fa-star-half-alt'
          :'far fa-star'
        }> </i>
      </span>
     <span>
        <i style={{color}} className={   value>=2
          ? 'fas fa-star'
          :value>=1.5
          ? 'fa fa-star-half-alt'
          :'far fa-star'
        }> </i>
      </span>
      <span>
        <i style={{color}} className={   value>=3
          ? 'fas fa-star'
          :value>=2.5
          ? 'fa fa-star-half-alt'
          :'far fa-star'
        }> </i>
      </span>
       <span>
        <i style={{color}} className={   value>=4
          ? 'fas fa-star'
          :value>=3.5
          ? 'fa fa-star-half-alt'
          :'far fa-star'
        }> </i>
      </span>
      <span>
        <i style={{color}} className={   value>=5
          ? 'fas fa-star'
          :value>=4.5
          ? 'fa fa-star-half-alt'
          :'far fa-star'
        }> </i>
      </span>  

      <span>{text&& text}</span>
    </div>)
}
Rating.defaultProps={
  color:'#f8ea25'
}
Rating.propTypes={
  value:PropTypes.number.isRequired, // value should conain number
  text:PropTypes.string.isRequired, // value should conain number
  color:PropTypes.string // value should conain number

}

export default Rating