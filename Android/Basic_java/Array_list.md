# Hướng dẫn cơ bản về ArrayList
```java
//        Khai báo Array  
  ArrayList<String> cities = new ArrayList();  
        ArrayList<String> cities01 = new ArrayList<String>();  
  
        cities.add("hanoi");  
        cities.add("hochiminhcity");  
        cities.add("danang");  
  
        Log.d("Message", "Size of list: "+cities.size());  
  
//        delete a item  
//        cities.remove(0);  
//        get a item  
//        Log.d("Message", "item 0 is: "+cities.get(0));  
  
//        Duyệt mảng  
  for( String city : cities){  
            Log.d("Message", city);  
        }  
  
        for(int i = 0; i < cities.size(); i++){  
            Log.d("Message", cities.get(i));  
        }
```