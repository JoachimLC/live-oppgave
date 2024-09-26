import Avatar from "./Avatar";
import type { Student as StudentProps } from "./types";
import {useState} from "react";




export default function Student(props: StudentProps & {deleteStudentById: (id: string) => void;}) {
	const { id, name, deleteStudentById } = props;
	const [style, setStyle] = useState({display: 'none'});

	
	return (
		<div style={{border: '1px solid gray'}}
		onMouseEnter={e => {
			setStyle({display: 'block'});
		}}
		onMouseLeave={e => {
			setStyle({display: 'none'})
		}}>
	   
	   <button type="button" onClick={() => deleteStudentById(id)} style={style}>Delete</button>
   
		<Avatar name={name} />
		<p className="student-name">{name}</p>
		</div>
	);
}
