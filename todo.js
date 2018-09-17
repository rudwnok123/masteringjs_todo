// ---------- 함수형 ---------
// command
function command(fn){
  let command1 = fn.split('$')[0].trim();
  let command2 = fn.split('$')[1];
  if(command1 === 'add'){
    add(command2);
  }
  else if(command1 === 'show'){
    show(command2);
  }
  else if(command1 === 'update'){
    update(command2);
  }
  else{
    // throw 'ddd;'
  }
}

var id = 0;
var todo_count=0;
var doing_count=0;
var done_count=0;
var todo_list = localStorage.data ? JSON.parse(localStorage.data) : [];
var list =[];
// task = 0,1,2 / todo doling done

const todolist = [
  // { id:0, content:'', task:0 }
]

// 할일 추가하기
function add(content){
  // window.localStorage.setItem('todo_list',JSON.stringify(todo_list));
  console.log(todolist.length);

  todolist.push({content:content,task:0})
  // console.log(todo_list[i]);
  console.log(todolist);
  // let reverse_data = data.reverse();
  // console.log(reverse_data);
  console.log(`id: ${id}, "${content}" 항목이 새로 추가됐습니다.`);
  todo_count = todo_count+1;
  printState();
}
function printState(){
  return console.log(`현재상태 : todo ${todo_count}개, doing ${doing_count}개, done ${done_count}개`);
}
//doing과 done용 show
function show(){
}

command('add$자바스크립트 공부하기')



// ---------- 객체형 ---------
// class Todo {
//   constructor(){

//   }

//   add(){

//   }
// }
