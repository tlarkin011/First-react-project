import React from "react";
import UserName from "./like-button";
import Password from "./password";
import Submit from "./submit"
let e = React.createElement

export default class LogIn extends React.Component {
    render() {
        return e('div',
        {class: 'card w-75' }, 
        e('div', 
        {class: 'card-header bg-success text-white'},
        "please Enter Username and Password"),
        e('div', {
            class: 'card-body' },
            e(UserName, {}, null),
            e(Password, {}, null)),
        e('div', {class: "card-footer" },
        e(Submit, {}, null))        
        )
    }
}