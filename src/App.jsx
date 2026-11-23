
import './App.css'

function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="student-card">
      <div className="card-header">
        <h2>{name}</h2>
        <span className="student-id">ID: {studentId}</span>
      </div>

      <div className="card-body">
        <p><strong>Major:</strong> {major}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>GPA:</strong> {gpa}</p>
      </div>
    </article>
  )
}

function App() {
  const students = [
    {
      id: 1,
      name: 'Batsuren Anar',
      studentId: '202637018',
      major: 'Computer Engineering',
      year: 1,
      gpa: 3.4
    },
    {
      id: 2,
      name: 'Sample Student 2',
      studentId: 'SAMPLE-002',
      major: 'Computer Engineering',
      year: 2,
      gpa: 3.5
    },
    {
      id: 3,
      name: 'Sample Student 3',
      studentId: 'SAMPLE-003',
      major: 'Computer Engineering',
      year: 3,
      gpa: 3.8
    }
  ]

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
