import React, { Component } from "react";

class ChildrenComp extends Component {
  // State dùng để thay đổi dữ liệu trong Component đó => có thể thay đổi được dữ liệu
  // Để sử dụng được state cần khai báo bằng constructor
  // VÀ sử dụng super để gọi lớp
  // Để cập nhật lại state => sử dụng setState
  constructor() {
    super();
    this.state = {
      studentA: "Lâm",
      question: "Co hay khong",
      anwser: "Khong",
      display: true,
    };
    //   Khi sử dụng function thường cần phải định nghĩa từ khóa this
    this.handleChangeState = this.handleChangeState.bind(this);
  }
  // Sử dụng với arrow function
  //   handleChangeState = () => {
  //     this.setState({
  //       anwser: "Coooo",
  //     });
  //   };

  // Sử dụng với function thường
  handleChangeState() {
    this.setState({
      anwser: "Coooo",
    });
  }

  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    return (
      <div>
        <h2>
          {this.props.titleParent} - Khóa học : {this.props.course}
        </h2>
        <p>{this.props.children}</p>
        <h2>State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.anwser}
        </p>
        {/* quy tắc đặt tên với các hàng xử lý 1 việc gì đó -> sẽ có tiền tố trước là handle 
                với các hàm xử lý 1 sự kiện gì đó => sẽ có tiền tố đó là on */}
        <button onClick={this.handleChangeState}>Click !!!</button>

        {/* Cập nhật state liên tục */}
        {this.state.display ? (
          <div>
            <p>Anh BÁch có nhệt tình không ???</p>
            <p>Cooooo</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        ) : (
          <div>
            <p>Anh BÁch có nhệt tình không ???</p>
            <p>Rat nhiet tinh</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        )}
      </div>
    );
  }
}

export default ChildrenComp;
