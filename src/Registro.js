import React,{Component,useState,useEffect} from 'react';
import {View, StyleSheet, Alert, TextInput,TouchableOpacity} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import api from '../Data/api';

class Registro extends Component {
  constructor(props){
     super(props);
    this.state = {
    user:'',
    email:'',
    pass:'',
    passcon:''};
  }

		
 register = () => api.registerData(this.state.email, this.state.user, this.state.pass)
  render(){
  const navegar = this.props.navigation;
    return(  
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Registrate</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'
                            onChangeText={(user)=>this.setState({user})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo'
                         
                            onChangeText={(email)=>this.setState({email})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                            onChangeText={(pass)=>this.setState({pass})}/>
                  </Item>
                  <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirma tu contraseña'
                            onChangeText={(passcon)=>this.setState({passcon})}/>
                </Item>
               <Item inlineLabel last>
                            <TouchableOpacity
		                        onPress={this.register}
                            style={{width:250,padding:10, backgroundColor:'blue',
                            alignItems:'center'}}>
                            <Text style={{color:'#fff'}}>Registrate</Text>
                            </TouchableOpacity>
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      
    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 35
  }, 
  
});
export default Registro;