# Monthly_CartypeTraffic_SearchPage

# 완성 페이지 🙊😲👀

![result3](https://user-images.githubusercontent.com/99319638/220553816-ce50ef1f-861d-4979-b7ed-ef8960665d2d.png)


```
서안산 고속도로에서의 매송 IC와 영동고속도로에서의 서안산 IC 에서의 
2019년도 일별, 그리고 차종별 유출입 교통량 데이터를 요청받았었다. 
기존에는 파이썬으로 requests 를 이용해서 open api 를 호출하고 추가적인 코드로 json 형태를 csv 형태로 변경 후 파일로 저장했었다. 
근데 이렇게 하려면 우선 그 구간에서의 spot id를 찾아야 하고, 
(일관된 코드이지만서도) 코드 조금 수정하고 실행하고 수정하고 실행하고.. 번거로웠다. 
왜인지는 모르겠으나 for문을 이용하면 해당 데이터를 불러올 수 없었다. 
```

## 그래서👏 만들었다!
```
`mongodb`에 구간 및 spot id를 `저장`했고 그걸 표로 불러서 첫화면에 출력한다. 
그리고 사용자는 원하는 `spot id, 년, 월을 선택`하고 버튼을 누른다. 
그럼 알람창이 뜨며 다음 화면으로 넘어가고 공공데이터포털에서 open api 를 호출해서 받은 json 형태의 데이터를 
표 형식으로 예쁘게 정렬해줬으며 (^.^) 그리고 다운로드 버튼을 눌러서 `csv 형태로 다운` 받을 수 있다!!!! 
해당 데이터를 xml 이나 json 형태로는 제공하고 있으나 csv 파일로는 제공하지 않는걸로 안다.
(찾으면 있으려나 모르겠다..) 
```

## node.js 그리고..
```
아마 html 두번째 작이기는 한데 완성은 처음했다. 
이번 프로젝트를 하면서 배운게 많다. 우선 `ajax`🌟🌟🌟 라던가.. `ejs`🌟🌟🌟 라던가.... 
그리고 변수를 저장해서 서버에 넘겨주는 방법이라던가.. 출력하는 법 📂
그리고 table 만드는법.. (document.write 보다는 document.createElement 을 이용해야함.. 
document.write 쓰면 버튼이 안보임) 
이러다가 정말 풀스택 개발자 되는거 아닌지 몰라 ..ㅎ

그래도 완성하니 뿌듯하고 재미있다!
```


