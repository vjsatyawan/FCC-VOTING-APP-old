import { List, Grid, Button, Header,Icon, Modal, Message, Form, Divider, Segment} from 'semantic-ui-react'
import React from 'react';

class Content extends React.Component {
   constructor() {
      super();
      
      this.state = {
         data:[

           
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



   componentDidMount = () => {

        var newData = ajaxFunctions.ajaxRequest('GET', 'api/getAllPolls',"", this.getData);
        console.log("22"+ newData);
   }


     getData = (newData) => {

                 console.log("4444"+JSON.parse(newData));
                 this.setState({data: JSON.parse(newData)});

                
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

////////////////////////////////////////////////////////////////////////////////////////////////////

class PollListItem extends React.Component {
   
        state = { formData: {} }

        handleChange = (e, { value }) => this.setState({ value })

        
        handleSubmit = (e, { formData }) => {

          e.preventDefault()
          this.setState({ formData })
          ajaxFunctions.ajaxRequest('POST', 'api/updatePoll',JSON.stringify(formData), this.viewPoll);

        }

        viewPoll = (data) => {
                 console.log(data);
        }
          


   render() {

          const { formData, value } = this.state

      return (



<List.Item>

 <Modal trigger={
                
                  <List.Content>
                    <List.Header as='a'>{this.props.componentData.question}</List.Header>
                    <List.Description as='a'>{this.props.componentData.answers[0].text}</List.Description>
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

                     <input name='pollId' type="hidden" value={this.props.componentData._id}></input>
                     
                        <Segment padded>
                          <Form.Select placeholder='Select your Choice' name='choice' options={this.props.componentData.answers} value={this.props.componentData.answers._id}/>
                          <Divider horizontal>Or</Divider>
                          <input placeholder='Or Add Choice' name='newChoice'/>
                          <input type="hidden" value={this.props.componentData.answers.length} name='choiceValue'/>
                         </Segment>

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