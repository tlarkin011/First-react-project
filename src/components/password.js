import React from "react";

export default class Password extends React.Component {
    render(){
        return React.createElement('input', {class: 'form-control'}, {type: 'text'}, 'password')
    }
}