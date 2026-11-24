
import './App.css'
import StudentProfileCard from './StudentProfileCard'

function App() {
  const students = [
  {
    name: "Batsuren Anar",
    studentId: "202637018",
    major: "Computer Engineering",
    year: 1,
    gpa: 3.4,
  },
  {
    name: "Ankhorgil",
    studentId: "202637470",
    major: "Computer Engineering",
    year: 1,
    gpa: 3.4,
  },
  {
    name: "Nergui",
    studentId: "202611111",
    major: "Computer Engineering",
    year: 1,
    gpa: 3.2,
  },
];

  return (
    <main className="directory">
      <h1>Student Directory</h1>

      <div className="student-list">
        {students.map((student) => (
          <StudentProfileCard
            key={student.id}
            name={student.name}
            studentId={student.studentId}
            major={student.major}
            year={student.year}
            gpa={student.gpa}
          />
        ))}
      </div>
    </main>
  )
}

export default App
