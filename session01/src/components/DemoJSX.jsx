// rcc

import React, { Component } from 'react';

class DemoJSX extends Component {
    render() {
        const greeting = "Hello world"
        const people = {
            name: "Lâmm",
            course: "ReactJS"
        }
        return ( 
            <div>
                {/* phép nội suy trong jsx */}
                {/* Lưu ý: 
                + class => className
                + Các thuộc tính sẽ được viết theo camelCase. 
                VD: background-color => backgroundColor 
                + Các sự kiện cũng sẽ viết theo camelCase
                VD: onclick => onClick, onchange => onChange  
                */}
                <h2 style={{ backgroundColor: 'pink', color: "white" }}>
                    {greeting}
                </h2>
                <p>studentName: {people.name} - Khóa học: {people.course} </p>
            </div>
        );
    }
}

export default DemoJSX;
