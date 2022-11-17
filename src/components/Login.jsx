import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import * as yup from 'yup'
import { Formik } from 'formik'

const schema = yup.object().shape({
  email: yup.string()
    .email("Invalid email address")
    .required("Please input email address"),
  password: yup.string()
    .min(5, "Must be more than 5 characters")
    .required("Please input password")
});

const Login = ({ email, password, setEmail, setPassword, onLogin }) => {
  return <Container>
    <Row>
      <Col xs={0} sm={2} md={3} lg={4} />
      <Col xs={12} sm={8} md={6} lg={4}>
        <Formik
          validationSchema={schema}
          onSubmit={e => onLogin()}
          initialValues={{
            email: email,
            password: password
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <h1 className='text-center'>Log In</h1>
              <Form.Label htmlFor="basic-url">Email</Form.Label>
              <InputGroup className="mb-3">
                <FormControl name='email' value={values.email} onChange={e => {
                  handleChange(e)
                  setEmail(e.target.value)
                }} isInvalid={!!touched && !!errors.email} onBlur={handleBlur} />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Label htmlFor="basic-url">Password</Form.Label>
              <InputGroup className="mb-3">
                <FormControl type='password' name='password' value={values.password} onChange={e => {
                  handleChange(e)
                  setPassword(e.target.value)
                }} isInvalid={touched.password && !!errors.password} onBlur={handleBlur} />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
              <div className="d-grid gap-2 mb-3">
                <Button variant="primary" type='submit'>
                  Log In
                </Button>
              </div>
              <div className='text-center'>
                Don't you have an account? &nbsp;
                <Link to='/signup'>Create account</Link>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  </Container >
}

export default Login