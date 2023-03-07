import { Text, View, StyleSheet} from "react-native"

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

const ResetPassword = ({navigation}) => {
    return (
        <View style={styles.container}>

        <TitleBarLogin title={"Forgot Passowrd"} isBackVisible={true} backFunction={()=>{navigation.pop()}}/>

        <View style={{alignItems:'center', flex:0.60, marginLeft:16, marginRight:16}}>

            <View style={{margin:12}}>
                <Text style={{fontFamily:'Poppins', fontSize:16, marginBottom:4, color:'darkgrey'}}>Please fill in the blanks below to reset your current password.</Text>

                <View style={{marginTop:16}}>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, marginBottom:4}}>New Password</Text>
                <TextFieldLarge label={"Create Password"} isPasswordField={true} />
            </View>

            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16}}>Confirm New Password</Text>
                <TextFieldLarge label={"Confirm New Password"} isPasswordField={true}/>
            </View>
            </View>

        
            <View style={{marginTop:16}}>
              <ButtonRegular label="Done" clickFunction={()=>{alert("Password Reset Successful")}} />
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

export {ResetPassword}