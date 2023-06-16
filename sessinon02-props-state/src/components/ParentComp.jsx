import React, { Component } from 'react';
import ChildrenComp from './ChildrenComp';

class ParentComp extends Component {
    // Props là viết tắt của properties
    // Props dùng để lưu trữ attribute
    // Props dùng để giao tiếp giữa các component với nhau (VD: từ cha xuống con)
    // Giá trị props không thể thay đổi
    // ParentComp => ChildrenComp
    render() {
        const title = "Rikkei Academy"
        return (
            <div>
                <ChildrenComp titleParent={title} course = {"ReactJS"}>Time: 15 buổi</ChildrenComp>
            </div>
        );
    }
}

export default ParentComp;