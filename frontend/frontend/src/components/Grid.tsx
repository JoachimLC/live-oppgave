import { useState } from "react";
import Student from "./Student";
import type { Student as StudentProp } from "./types";
import AddStudentForm from "./AddStudentForm";

type GridProps = {
    students: StudentProp[];
    onAddStudent: ({ name }: { name: string }) => void;
	deleteStudentById: (id: string) => void;
};

export default function Grid(props: GridProps) {
    const { students, onAddStudent, deleteStudentById } = props;
    // props.students ?? []
    //     const [students, setStudents] = useState<StudentProp[]>(props.students ?? []);

    // const onAddStudent = (student: { name: string }) => {
    //     setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
    // };

    return (
        <section>
            <article className="grid">
                {students.map((student) => (
                    <Student key={student.id} name={student.name} id={student.id} deleteStudentById={deleteStudentById}/>
                ))}
            </article>
            <AddStudentForm onAddStudent={onAddStudent} />
        </section>
    );
}
