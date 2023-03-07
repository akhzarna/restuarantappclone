import { Text, View, StyleSheet} from "react-native"

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

const Otp = ({navigation}) => {
    return (
        <View style={styles.container}>

        <TitleBarLogin title={"Otp Number"} isBackVisible={true} backFunction={()=>{navigation.pop()}}/>

        <View style={{alignItems:'center', flex:0.60}}>

            <View>
                <Text style={{fontFamily:'Poppins-Bold', fontSize:20, marginBottom:4, textAlign:'center'}}>Enter Authorization Code</Text>
                <Text style={{fontFamily:'Poppins', fontSize:16, marginBottom:4, textAlign:'center'}}>We have sent SMS to:</Text>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:18, marginBottom:4, textAlign:'center', marginBottom:18}}>{"+92 (XXX) XXX-X120"}</Text>
                <TextFieldLarge label={"6 Digit code"}/>
            </View>

        
            <View style={{marginTop:16}}>
              <ButtonRegular label="Next" clickFunction={()=> {navigation.navigate("ResetPasswordScreen")}}/>
            </View>
        </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex:1, 
        //justifyContent:'center', 
        //alignContent:'center', 
        backgroundColor:'#fafbff'
    }
})

export {Otp}