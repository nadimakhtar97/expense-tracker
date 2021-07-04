import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "../ExpeseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

/* we can have only one root element in return statement.
    means return (<div>hello</div>
                  <div>world</div>)
    is not allowed.

*/

/*  all props starting with "on" are provided by react
    by default to handle events.
    like "onClick"
 */

const ExpenseItem = (props) => {

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = ()=>{
    //   setTitle("updated!");
    //   console.log(props.title);
    //   console.log(title);
    // }

    return (
        <li>
            <Card className="expense-item">
                <div>
                    <ExpenseDate date={props.date}/>
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.price}</div>
                    {/* <button onClick={clickHandler}>change title</button> */}
                </div>
            </Card>
        </li>

    );
};

export default ExpenseItem;
