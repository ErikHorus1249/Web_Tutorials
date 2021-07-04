<!-- 1. fixed --> position
relative 
<!-- absolute - lấy có vị trí từ element mẹ   -->
<!-- 2.kĩ thuật xây dựng layout -->
khái niệm về main axis mà cross  axis 
có thể dùng thuộc tính css để thay đổi phương hướng cũng như vị trí
Muốn sử dụng flex 
display: flex, inline-flex

flex-direction: row|column
mặc định khi sử dụng flex thì main axis se ở dạng nằm ngang

flex-wrap: nowrap|wrap|wrap-reverse
xác định xuống dòng hay không
dùng wrap reverse sẽ ko xuống dòng mà nó sẽ nhảy lên trên
chính là đổi chiều của cross-start và cross-end

flex-basis: <>
thiết lập chiều dài cho main-axis

dành cho phần cha
justify-content: flex-start, flex-end, center | space-bettwen | space-around 
căn các phần tử theo chiều main-axis

dành cho thằn con:
justify-self:

