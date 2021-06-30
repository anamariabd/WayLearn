import React, {useState} from 'react';
import { Col, Row, Card, Media, Form, InputGroup, Image } from "react-bootstrap";
import Select from "react-select"

const CreateLesson = () => {
  
  return (
    <>
      <h1 className="subtitle"><strong>Crear leccion</strong></h1>

      <Row>
          <Col sm='12'>
            <Card>
              <Card.Body>
              <Media>
                
              <Image src="holder.js/171x180" roundedCircle/>
                  {/* <Avatar className='mr-75' img={data.avatar} width='38' height='38' /> */}
                  <Media.Body>
                    <h6 className='mb-25'>Username</h6>
                    <Card.Text>{/*data.createdTime*/}</Card.Text>
                  </Media.Body>
                </Media>
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col md='6'>
                      <Form.Group className='mb-2'>
                        <Form.Label htmlFor='blog-edit-title'>Title</Form.Label>
                      <InputGroup id='blog-edit-title' onChange={
                        (e:any) => {console.log("joal")}
                      } ></InputGroup>
                      </Form.Group>
                    </Col>
                    <Col md='6'>
                      <Form.Group className='mb-2'>
                        <Form.Label htmlFor='blog-edit-category'>Category</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col md='6'>
                      <Form.Group className='mb-2'>
                        <Form.Label htmlFor='blog-edit-slug'>Slug</Form.Label>
                        {/* <Input id='blog-edit-slug' value={slug} onChange={e => setSlug(e.target.value)} /> */}
                      </Form.Group>
                    </Col>
                    <Col md='6'>
                      <Form.Group className='mb-2'>
                        <Form.Label htmlFor='blog-edit-status'>Status</Form.Label>
                        {/* <Input
                          type='select'
                          id='blog-edit-status'
                          value={status}
                          onChange={e => setStatus(e.target.value)}
                        > 
                          <option value='Published'>Published</option>
                          <option value='Pending'>Pending</option>
                          <option value='Draft'>Draft</option>
                        </Input> */}
                      </Form.Group>
                    </Col>
                    <Col sm='12'>
                      <Form.Group className='mb-2'>
                        <Form.Label>Content</Form.Label>
                        {/* <Editor editorState={content} onEditorStateChange={data => setContent(data)} /> */}
                      </Form.Group>
                    </Col>
                    <Col className='mb-2' sm='12'>
                      <div className='border rounded p-2'>
                        <h4 className='mb-1'>Featured Image</h4>
                        <Media className='flex-column flex-md-row'>
                          <img
                            className='rounded mr-2 mb-1 mb-md-0'
                            src={"featuredImg"}
                            alt='featured img'
                            width='170'
                            height='110'
                          />
                          <Media.Body>
                            <small className='text-muted'>Required image resolution 800x400, image size 10mb.</small>

                            <p className='my-50'>
                              <a href='/' onClick={e => e.preventDefault()}>
                                {/* {`C:/fakepath/${imgPath}`} */}
                              </a>
                            </p>
                            <div className='d-inline-block'>
                              <Form.Group className='mb-0'>
                                {/* <CustomInput
                                  type='file'
                                  id='exampleCustomFileBrowser'
                                  name='customFile'
                                  onChange={onChange}
                                  accept='.jpg, .png, .gif'
                                /> */}
                              </Form.Group>
                            </div>
                          </Media.Body>
                        </Media>
                      </div>
                    </Col>
                     <Col className='mt-50'>
                     {/* <Button.Ripple color='primary' className='mr-1'>
                        Save Changes
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline>
                        Cancel
                      </Button.Ripple> */}
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  );
}

export default CreateLesson;