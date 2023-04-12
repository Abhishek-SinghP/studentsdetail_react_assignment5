import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StudentContext } from './StudentContext';


const Student = () => {
    const [data] = useContext(StudentContext)
    
    return (
        <>
            <div className="title-container">
                <h1 className="title">EMPLOYEE DETAILS</h1>
                <Link to="/student/addStudent" className="btn">Add Employee</Link>
            </div>
            <div className="table-container">
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{width: 175}}>NAME</TableCell>
                                <TableCell align="center">AGE</TableCell>
                                <TableCell align="center">DESIGNATION</TableCell>
                                <TableCell align="center">YEAR OF JOINING</TableCell>
                                <TableCell align="center">CHANGE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map(student => {
                                    const { ID, name, age, course, batch } = student;
                                    return (
                                        <TableRow key={ID}>
                                            <TableCell component="th" scope="row">{name}</TableCell>
                                            <TableCell align="center">{age}</TableCell>
                                            <TableCell align="center">{designation}</TableCell>
                                            <TableCell align="center">{date of  joining}</TableCell>
                                            <TableCell align="center"><Link to={`/student/edit/${ID}`} className="edit-btn"><ModeEditIcon /></Link></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Student;
