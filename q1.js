// 1. Write a function called convertArrayToObject which can convert the array to a structured object. 

// const student = [
//     ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

// let obj = []
// function convertArrayToObject(arr){
//     convertedObjArr = []
//     for(let i = 0; i < arr.length; i++){  
//         let [name, skills, scores] = arr[i]
//         let obj = {
//             name: name,
//             skills: skills,
//             scores: scores
//         }
//         convertedObjArr.push(obj)
//     }   
//     return convertedObjArr
// }

// console.log(convertArrayToObject(student))

// Copy the student object to newStudent without mutating the original object. In the new object add the following 

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = { ...student }

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 })
newStudent.skills.dataScience.push({ skill: 'SQL' })

console.log(newStudent)

// Use the student object to solve the following questions:

//a
const lengthOfKeys = Object.keys(student).length
console.log(lengthOfKeys)

//b
const lengthOfValues = Object.values(student).length
console.log(lengthOfValues)

//c
const lengthOfSkills = Object.keys(student.skills).length
console.log(lengthOfSkills)

//d
const keys = Object.keys(student)
keys == 'graphicDesign' ? (
    console.log('student has the graphic design property')
) : (
    console.log('student doesnt have the graphic design property')
)

// e
const allKeys = Object.keys(student)
console.log(allKeys)