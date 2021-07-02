/*
    No import React is required in modern react app.
 */
import React from "react"; 
import './Card.css'


/*
    Card is a wrapper component. Which is used as a wrapper when many other
    components share some common desing/property.

    NOTE: props.children is by default provided by React library.
    Which is equal to all the elements between the wrapper elements.
*/

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}

export default Card;
