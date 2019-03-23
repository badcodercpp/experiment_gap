import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    Button, 
    ScrollView, 
    TouchableOpacity, 
    Dimensions} from 'react-native';

import { withTheme } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

class PeopleOverMapScreen extends Component {
    constructor(props){
        super(props);
        this.state={visiblePeople:[]}
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.visiblePeople!==undefined) {
            let a=[];
            let ll=nextProps.visiblePeople;
            for(let m in ll){
              a.push(ll[m])
            }
            return {
                visiblePeople: a
            }
        }
        return {
            visiblePeople:prevState.visiblePeople
        }
    }
    componentDidMount(){
        let { actions } = this.props;
        actions.VISIBLE_PEOPLE_PROMISE('9836648105')
    }
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{position:"absolute",width:width,height:100,backgroundColor:"transparent",bottom:0}}>
            <ScrollView horizontal={true}>
              {
                this.state.visiblePeople.map( (a,b)=>{
                  return (
                    <View key={b} style={{width:90,height:90,borderRightColor:"grey",borderRightWidth:2,borderBottomColor:"grey",borderBottomWidth:2,borderTopColor:"grey",borderTopWidth:2,borderLeftColor:"grey",borderLeftWidth:2,marginRight:10,marginLeft:10,backgroundColor:"#ece5dd",borderRadius:15}}>
                      <TouchableOpacity onPress={()=>{
                        //this._clicking_change_location(a);
                        }} >
                        <View style={{width:90,height:45,justifyContent:"center",alignItems:"center"}} >
                          <Image style={{width:45,height:45,borderRadius:22.5}} source={{uri: `data:image/png;base64,${a.image}`}} />
                        </View>
                        <View style={{width:90,height:45,justifyContent:"center",alignItems:"center"}} >
                          <Text style={{fontSize:15,fontFamily:"sans-serif-light",color:"black"}} >
                            {a.title}
                          </Text>
                          <Text style={{fontSize:15,fontFamily:"sans-serif-light",color:"black"}} >
                            {a.gender}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                } )
              }
            </ScrollView>
          </View>
        )
    }
}

export default withTheme(PeopleOverMapScreen);