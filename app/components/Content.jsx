import { List, Grid, Button, Header,Icon, Modal, Message, Form} from 'semantic-ui-react'
import React from 'react';

class Content extends React.Component {
   constructor() {
      super();
      
      this.state = {
         data: 
         [
            {
               id: 1,
               createdBy: 'abc xyz',
               question: 'Dhoni Or Yuvi',
               answers: [
                           {
                              text: 'answer 1',
                              value: 'Value 1'
                           },
                          {
                              text: 'answer 2',
                              value: 'vakue 2'
                           }
                  ]
            },
            
            {
               id: 2,
               createdBy: 'def xyz',
               question: 'Modi or Kejri ?',
               answers: [
                           {
                              text: 'answer 3',
                              value: 'vakue 3'
                           },
                          {
                              text: 'answer 4',
                              value: 'value 4'
                           }
                  ]
            },
            
            {
               id: 3,
               createdBy: 'ghi xyz?',
               question: 'Rahul or Chutita',
               answers: [
                           {
                              text: 'answer 5',
                              value: 'vakue 1'
                           },
                          {
                              text: 'answer 5',
                              value: 'value 1'
                           }
                  ]
            }
         ]
      }

   }

   render() {
      return (
   
            <List divided relaxed>
               {this.state.data.map((dynamicComponent, i) => <PollListItem 
                  key = {i} componentData = {dynamicComponent}/>)}
            </List>

      );
   }
}

class PollListItem extends React.Component {
   
        state = { formData: {} }

        handleChange = (e, { value }) => this.setState({ value })

        handleSubmit = (e, { formData }) => {
          e.preventDefault()
          this.setState({ formData })
        }




   render() {

          const { formData, value } = this.state

      return (



<List.Item>

 <Modal trigger={
                
                  <List.Content>
                    <List.Header as='a'>{this.props.componentData.question}</List.Header>
                    <List.Description as='a'>{this.props.componentData.answers[0].value}</List.Description>
                  </List.Content>
                
 } closeIcon='close'>

    <Modal.Header icon='archive'>{this.props.componentData.question}</Modal.Header>
    
    <Modal.Content>


   <Grid divided>
    <Grid.Row>
     <Grid.Column width={8}>
      <Modal.Description>
        <Header>{this.props.componentData.question}</Header>
        <p>Put Something Here</p>
                  
                  <Form onSubmit={this.handleSubmit}>
                     <Form.Select placeholder='Select your Choice' name='choice' options={this.props.componentData.answers} />
                             <Button primary type='submit'>Submit</Button>

                             <Message>
                               <pre>formData: {JSON.stringify(formData, null, 2)}</pre>
                             </Message>

                  </Form>

      </Modal.Description>


            </Grid.Column>

             <Grid.Column width={8}>
                  Chart
             </Grid.Column>
          </Grid.Row>
         </Grid>
    </Modal.Content>

  </Modal>

</List.Item>

  
      );
   }
}

export default Content;