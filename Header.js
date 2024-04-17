//import React from 'react'  //if not using 'prop-types'
import PropTypes from'prop-types'
import Button from'./Button'
const Header = ({title,onAdd,showAdd}) => {
  // const onClick=()=>{
  //   console.log('click');
  // }                                                                                          
  return (
    <header>
      <h1>{title}</h1>
      <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={onAdd}/>
    </header>
  )
}

//if noting then by default
Header.defaultProps={
    title:'Task Tracker',
}

Header.propTypes={          //.propTypes is standerised
    title:PropTypes.string.isRequired,
}

//CSS IN JS
// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }
export default Header
