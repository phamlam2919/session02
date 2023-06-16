import React, { Component } from 'react';

class Baitap2 extends Component {
    sum(a, b) {
        let flas = a + b;
        return flas;
    }

    render() {
    const a = 5;
        const b = 10;
        const result = this.sum(a, b);

        
        return (
            <div>
                <h2>Tính tổng hai số</h2>
                <p>Số thứ nhất: {a}</p>
                <p>Số thứ hai: {b}</p>
                <p>Tổng: {result}</p>
            </div>
        );
    }
}

export default Baitap2;