//Нахождение контейнера, куда будут выводиться объекты
let cont = document.querySelector('.container');


//Создание класса
class Students{
    //Создание конструктор
    constructor(name, group, score){
        this.name = name;
        this.group = group;
        this.score = score;
    }

    //Создание статического метода сортировки
    static sort(mas){
        //Сортировка по оценкам
        if(mas.length !== undefined){
            for(let i = 0; i < mas.length; i++){
                for(let j = i+1; j < mas.length; j++){
                    if(mas[i].score < mas[j].score){
                        let p = mas[i];
                        mas[i] = mas[j];
                        mas[j] = p;
                    }
                }
            }
        }

        //Вывод отсортированного массива на страницу
        for(let i = 0; i < mas.length; i++){
            let block = document.createElement('div');
            block.textContent = `name: ${mas[i].name} group: ${mas[i].group} score: ${mas[i].score}`;
            block.style.cssText = `margin-bottom: 10px; font-size: 18px;`
            cont.append(block);
        }
    }
}
//Создание массива для объектов
let stud = [];

//Создание обхектов
let s1 = new Students('Alex', 'PI001', '5');
let s2 = new Students('Bob', 'PI001', '4');
let s3 = new Students('Viktor', 'IS001', '5');
let s4 = new Students('Nikita', 'IS001', '3');
let s5 = new Students('Vadim', 'BI001', '4');
let s6 = new Students('Kolyan', 'IS001', '3');
let s7 = new Students('Lena', 'PI001', '5');
let s8 = new Students('Katya', 'IN001', '5');
let s9 = new Students('Lancelot', 'IN001', '5');
let s10 = new Students('Mishka', 'IS001', '5');
let s11 = new Students('Jamal', 'PI001', '4');
let s12 = new Students('Fernando', 'BI001', '4');

//Заполнение массива объектами
stud.push(s1);
stud.push(s2);
stud.push(s3);
stud.push(s4);
stud.push(s5);
stud.push(s6);
stud.push(s7);
stud.push(s8);
stud.push(s9);
stud.push(s10);
stud.push(s11);
stud.push(s12);

//Вызов метода
Students.sort(stud);