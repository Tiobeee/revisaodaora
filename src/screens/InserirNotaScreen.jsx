import { TextInput } from 'react-native';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Paragraph, Surface, TextInput } from "react-native-paper";

export default function InserirNotaScreen() {
  const [nota, setNota ] = useState();

  function adicionarNota() {
    const colRef = collection(db, "usuarios");
    const docRef = addDoc(colRef, { 
      // adicionar um novo documento na coleção usuários
      titulo: nota
    });

  }


  return (
    <Surface>
      <View>
        <Paragraph>Insira sua nota</Paragraph>
        <TextInput value={nota} onChangeText={(text) => setNota(text)} />
      </View>
    </Surface>
  );
}
