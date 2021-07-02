# REACT

## REACT STATE

vid no 04 react state and working 

Each component is a function. On start of appliction react call each function untill no fuction is left.
This is how react renders component on browser.

\<App/> --> \<Expenses/> --> \<ExpenseItem/> --> \<ExpenseDate>.

if there are 4 instance of \<ExpenseItem/> then it will be called 4 times. we can verify by using `console.log("hello")`
in that component fuction. "hello" will be printed 4 times.

React calls each function only once. Now any event like button click happens in any component then, react is
not going to call that component function again, react ignores it. So to tell react that the component should run again we use
react hooks useState();

## useState()

- creates a special variable. whose value on change can cause re-rendering of that component or it
will tell react to re-run the component function.

- useState() wants a default state value. useState() creates a special variable and also returns a method which
can cause change in the value of special variable.

- useState() create special variable in per component instance base. Meaning if there exits multiple instance of
  a component then each instance will have its own state detached/independent of other instances i.e changing special
  variable for one will not result in changed variable for others. we can verify by using `console.log("hello")` in
  component function that when special variable is changed once then component function is re-rendered once.

- why are we using "const" in `const [title,setTitle] = useState(props.title);` if we want to change the value of title
  variable? Actually we are not changing the value of title variable using '=' operator instead we use `setTitle()` method
  to change value of title variable. So it is managed by react internally.

- React keeps track of when a useState() is called for the first time.The default value of useState() hook is considered for first time only. From second re-render onward react takes care of the value of special variable.

```javascript
const [title,setTitle] = useState(props.title);
// props.title is default value of the special variable which is required by the useState() hook/function.
// title is the special variable that useState() hook returns.
// setTitle is a method returned by the useState that can change the value of special variable.
```
