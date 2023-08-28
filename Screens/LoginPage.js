import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { hp, wp } from "../Components/DimensionPixel";
import CustomText from "../Components/CustomText";
import CustomTextInput from "../Components/CustomTextInput";
import Username from "../Images/Svg/userLogin";
import Password from "../Images/Svg/password";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const header = "Welcome Back";
  const title = "Please, Log in.";
  const continueName = "Continue >";
  const createAccount = "Create an Account";

  const gotoSignUpPage = () => {
    navigation.navigate("SignUp");
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("MainPage");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={["#e5b2ca", "#cd82de"]} style={styles.linear}>
      <KeyboardAvoidingView behavior="padding">
        <Image
          source={require("../Images/Sallyfirst.png")}
          style={styles.image}
        />
        <CustomText header={header} title={title} />
        <View style={styles.container}>
          <CustomTextInput
            icon={<Username />}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalise="none"
          />
          <CustomTextInput
            icon={<Password />}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>

        {loading ? (
          <ActivityIndicator size={"large"} color={"#0000fff"} />
        ) : (
          <>
            <View style={styles.buttonContainer}>
              <CustomButton
                buttonColor={"#78258B"}
                buttonName={continueName}
                titleColor={"#FFF"}
                onPress={signIn}
              />

              <CustomButton
                buttonColor={"#ffffff47"}
                titleColor={"#FFF"}
                buttonName={createAccount}
                onPress={gotoSignUpPage}
                buttonShadow={styles.buttonShadow}
              />
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  image: {
    margin: wp("15%"),
    marginTop: hp("10%"),
  },
  container: {
    marginTop: hp("3%"),
  },
  buttonShadow: {
    marginTop: hp("3%"),
    shadowColor: "##dcdcdc40",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
