import { forwardRef } from "react"
/// reusable label component
//label: the text that will appear as a label for the input field, ...props will pass any other props from a parent component
const Input = forwardRef (function Input({label,textarea, ...props }, ref){
    
    const classes ="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    return (
        <p className="flex fle-col gap-1 my-4">
        {/* //text of the label goes here */}
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {/* if there is a textarea use the props if there is not a textare render an input */}
            {textarea ? (
            <textarea ref={ref} className={classes}{...props}/>
            ) :(
            <input ref ={ref} className={classes} {...props}/>
        )}
        
        </p>
    );
});

export default Input;