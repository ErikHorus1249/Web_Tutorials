# Collapse
**Mục đích** : giúp thay đổi khả năng hiển thị của nội dung trong dự án của bằng một vài lớp và các plugin JavaScript của Bootstrap

**Phương thức hoạt động**
Plugin JavaScript Collapse được sử dụng để hiển thị và ẩn nội dung. Các nút hoặc neo(anchor) được sử dụng làm công tắc kích hoạt được ánh xạ(Mapping) tới các phần tử cụ thể mà bạn chuyển đổi.

**Các class cần chú ý**
-   `.collapse`  ẩn đi nội dung
-   `.collapsing`  áp dụng trong quá trình chuyển đổi
-   `.collapse.show`  hiển thị nội dung

```html
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Nhấn vào đây !
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
```

