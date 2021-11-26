//js의 sort()함수에 대해서 공부
const strarr = ["aaa", "hhh", "ttt", "Bbb", "ccc"]

strarr.sort() // 아스키 코드 순서로 정렬시킴 제일 앞의 알파벳이 기준이 됨
console.log(strarr)

const numarr = [8,2,21,43,77,22,112,45]
numarr.sort()// 이와 같은 경우 숫자의 크기대로 정렬되지 않음 그래서 sort함수 안에 로직을 써넣어주면 됨
//정렬하는 것은 음수 양수 밖에 없음 sort(여기에) 내가 원하는 로직을 짜주면 자기가 알아서 동작해줌
numarr.sort((a,b)=>a-b)//이 안에 sort가 부족한 것에 대해서 명령해주면 됨
console.log(numarr)//오름차순 정렬 출력

numarr.sort((a,b)=>b-a)
console.log(numarr)//내림차순 정렬 출력