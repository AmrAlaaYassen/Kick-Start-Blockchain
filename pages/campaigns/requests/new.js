import React , {Component} from 'react';
import {Form ,Input, Button , Message} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link , Router} from '../../../routes';
import Layout from '../../../components/layout'
class RequestNew extends Component {

    state = {
        value :'',
        description:'',
        recipient:''
    };
    static async getInitialProps(props){
        const {address} = props.query ; 
        return {address};
    }

    onSubmit = async event =>{
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const {description , value , recipient} = this.state ;
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description,web3.utils.toWei(value,'ether') , recipient)
            .send({from:accounts[0]});
        }catch(err){

        }
    }
    render(){
        return (
            <Layout>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Description</label>
                        <Input onChange={event=>{this.setState({description:event.target.value})}} value = {this.state.description}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Value (Ether)</label>
                        <Input onChange={event=>{this.setState({value:event.target.value})}} value={this.state.value}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input onChange={event=>{this.setState({recipient:event.target.value})}} value = {this.state.recipient}/>                
                    </Form.Field>

                    <Button primary >Create!</Button>
                </Form>
            </Layout>
            );
    }
}

export default RequestNew;