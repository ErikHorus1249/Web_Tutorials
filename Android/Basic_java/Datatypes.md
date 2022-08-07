# Các kiểu giữ liệu trong Java
## I. Tổng quan
### :one::one: Các loại dữ liệu phổ biến
```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String
```
### :one::two:Dữ liệu được chia thành hai loại:

-   **Primitive data types** (dữ liệu nguyên thủy) bao gồm: `byte`,  `short`,  `int`,  `long`,  `float`,  `double`,  `boolean`  và`char`
-   **Non-primitive data types** - bao gồm  `String`, `Array` và `Classes`.

## II. Chi tiết
### :two::one: Primitive Data Types
A primitive data type specifies the size and type of variable values, and it has no additional methods.
There are eight primitive data types in Java:

    - Kiểu dữ liệu nguyên thủy biểu diễn kích thước và kiểu của các giá trị biến và nó không có phương thức bổ sung.
    - Có 8 kiểu dữ liệu nguyên thủy trong Java:
Thông tin chi tiết.
|Data Type|Size   |Description                                                                      |
|---------|-------|---------------------------------------------------------------------------------|
|boolean  |1 bit  |Stores true or false values                                                      |
|byte     |1 byte |Stores whole numbers from -128 to 127                                            |
|char     |2 bytes|Stores a single character/letter or ASCII values                                 |
|double   |8 bytes|Stores fractional numbers. Sufficient for storing 15 decimal digits              |
|float    |4 bytes|Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits          |
|int      |4 bytes|Stores whole numbers from -2,147,483,648 to 2,147,483,647                        |
|long     |8 bytes|Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807|
|short    |2 bytes|Stores whole numbers from -32,768 to 32,767                                      |
