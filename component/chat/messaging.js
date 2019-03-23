import React, { Component } from 'react'
import { StyleSheet,
     View,
     Image, 
     TextInput, 
     Button, 
     ImageBackground, 
     Dimensions, 
     TouchableOpacity,
     FlatList  } from 'react-native';
import { Surface, Text, withTheme, Appbar } from 'react-native-paper';
import ChatScreenHead from './chatHead'

var {height, width} = Dimensions.get('window');


class ChatScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
                  <View style={{position:"absolute",width:width,height:height,backgroundColor:"#ece5dd",marginLeft:0,justifyContent:"center",alignItems:"center"}}>
                  {
                    (this.state._setting_needed_on_contact)?(
                      <ChatScreenHead />
                    ):false
                  }
                  <View style={{width:width,height:40,backgroundColor:"#075e54"}} >
                    <View style={{flex:1,flexDirection:"row"}} >
                      <TouchableOpacity onPress={this._get_back_to_map_screen} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                          <Image source={this.state.backArrow} style={{width:40,height:40,borderRadius:20}} />
                        </View>
                      </TouchableOpacity >
                      <Appbar.Action icon="menu" onPress={() => {
                        // back image icon will go here
                      }} />
                      <View style={{flex:5,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <TextInput 
                        editable = {true}
                        multiline={false} 
                        style={{width:width/1.5,height:40,borderBottomColor:"#075e54",borderBottomWidth:2,fontSize:15,color:"white"}} 
                        placeholder="search contacts" 
                        placeholderTextColor="white" 
                        returnKeyLabel="search" 
                        underlineColorAndroid="transparent"
                        onChangeText={(text)=>{
                          
                        }}
                        />
                      </View>
                      <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        {/*<Image source={this.state.setting_logo} style={{width:30,height:30,borderRadius:15}} />*/}
                      </View>
                      
                    </View>
                  </View>
                  
                    <View style={{flex:9,flexDirection:"row",paddingLeft:10,paddingRight:10}} >
                    
                        <FlatList keyExtractor={(item, index) => item.mobile}
                            data={this.state.myContacts}
                            renderItem={({item}) => 
                                {
                                    return (
                                    <View style={{flex:1}}>
                                    
                                    <View  style={{flex:1,flexDirection:"row",backgroundColor:"#ece5dd",height:60,borderBottomColor:"#075e54",borderBottomWidth:2}}>
                                    
                                        <View style={{flex:1.2,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}}>
                                          <Image source={{uri:`data:image/png;base64,${item.image}`}} style={{width:50,height:50,borderRadius:25}} />
                                        </View>
                                        <View style={{flex:6,flexDirection:"column",justifyContent:"center",alignItems:"flex-start",paddingLeft:5}}>
                                          <TouchableOpacity onPress={this.move_to_deep_chat.bind(this,item)}>
                                            <Text style={styles.item}>{
                                                item.name
                                              }</Text>
                                          </TouchableOpacity>
                                        </View>
                                    </View>
                                    </View>
                                  )
                                  
                                }
                            }
                          />
                    </View>
                  </View>
        )
    }
}



export default withTheme(ChatScreen);