import React,{Component, useState}from 'react';
import { FlatList, View ,Text,Button,TextInput} from 'react-native';
import Section from './Sectionlist';

class Classcomponent extends Component{
    constructor(){
        super();
        this.state={
            name:"Anil",
            age:20
        }
    }

    updateName(){
        this.setState({name:"hello"})
    }
    fruit=()=>{
        console.warn("Apple");
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'red'}}>
                    Class component{this.state.name}{this.state.age}</Text>
                <TextInput placeholder='Enter your name' onChangeText={()=>this.updateName()}/>
                <Button title='Press Me' onPress={this.fruit}/>
                <Section />
            </View>
        )
    }
}

export default Classcomponent;