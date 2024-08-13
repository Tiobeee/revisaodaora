import { doc } from 'firebase/firestore';
import { View } from "react-native";
import { Paragraph, Surface } from "react-native-paper";
import styles from "../config/styles";
import { useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function HomeScreen() {

    useEffect(()=>{
        const colRef = collection(db);
        const docRef = doc(colRef, 'teste');

    },[]);

  return (
    <Surface style={styles.container}>
      <View>
        <Paragraph>Bem vindx</Paragraph>
      </View>
    </Surface>
  );
}
