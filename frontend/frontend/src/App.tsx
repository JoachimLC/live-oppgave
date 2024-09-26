import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/types";

const intitalStudents = [
    { id: "1", name: "Ola Normann" },
    { id: "2", name: "Kari Normann" },
];

function App() {
    // students ?? []
    const [students, setStudents] = useState<Student[]>(intitalStudents ?? []);

    const onAddStudent = (student: { name: string }) => {
        setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
    };

	const deleteStudentById = (id: string) => {
		setStudents(oldValues => {
		  return oldValues.filter(student => student.id !== id);
		});
	  };

    return (
        <main>
            {/* <Student name="Marius" id="123" /> */}
            <Grid students={students} onAddStudent={onAddStudent} deleteStudentById={deleteStudentById} />
            <Total total={students.length} />
        </main>
    );
}

export default App;