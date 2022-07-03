// import React, { useState } from 'react'
//
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
//
// import { useMutation } from '@apollo/client'
// // import { getAuthors } from '../graphql-client/queries'
// // import { addSingleAuthor } from '../graphql-client/mutations'
//
// const AuthorForm = () => {
//     const [newUser, setNewUser] = useState({
//         name: '',
//         age: ''
//     })
//
//     const { name, age } = newUser
//
//     const onInputChange = event => {
//         setNewUser({
//             ...newUser,
//             [event.target.name]: event.target.value
//         })
//     }
//
//     const onSubmit = event => {
//         event.preventDefault()
//
//         addUser({
//             variables: { name, age: parseInt(age) },
//             refetchQueries: [{ query: getUsers }]
//         })
//
//         setNewUser({ name: '', age: '' })
//     }
//
//     // GraphQL operations
//     const [addAuthor, dataMutation] = useMutation(addSingleUser)
//
//     // console.log(dataMutation)
//
//     return (
//         <Form onSubmit={onSubmit}>
//             <Form.Group className='invisible'>
//                 <Form.Control />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type='text'
//                     placeholder='Author name'
//                     name='name'
//                     onChange={onInputChange}
//                     value={name}
//                     required
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type='number'
//                     placeholder='Author age'
//                     name='age'
//                     onChange={onInputChange}
//                     value={age}
//                     required
//                 />
//             </Form.Group>
//             <Button className='float-right' variant='info' type='submit'>
//                 Add Author
//             </Button>
//         </Form>
//     )
// }
//
// export default AuthorForm