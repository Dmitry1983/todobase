import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useInput} from '@hooks';
import {CLR_BLACK_02, CLR_GREY, CLR_BLUE} from '@constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_BLACK_02,
  },
  input: {
    color: CLR_BLACK_02,
    width: '80%',
    height: 36,
    paddingHorizontal: 18,
    backgroundColor: CLR_GREY,
    borderRadius: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    color: CLR_BLUE,
  },
  title: {
    color: CLR_BLUE,
    marginBottom: 100,
  },
  status: {
    color: CLR_GREY,
    marginTop: 100,
  },
  button: {
    marginVertical: 1,
  },
  text: {
    color: CLR_GREY,
    margin: 5,
  },
});
const FOLDER = 'users';
const USER_DOC = 'WTxN0mZl71OJB6d0AASb';

export const SignInFB = () => {
  // const {handlerUserToken} = useActions();
  const [snapshotData, setSnapshotData] = useState([]);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = useInput('123@gmail.com', 'username');
  const password = useInput('123123', 'password');

  const database = firestore().collection(FOLDER).doc(USER_DOC);

  useEffect(() => {
    setLoading(true);
    if (uid !== null) {
      // let increment = 1;
      const listener = database
        .collection(uid)
        .get()
        .then(snapshot => {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            //  num: increment++,
            ...doc.data(),
          }));
          setSnapshotData(data);
        })
        .catch(err => console.log(err));
      setLoading(false);
      return () => listener;
    }
  }, [uid, database]);

  const getSnapshort = async () => {
    let increment = 1;
    await database
      .collection(uid)
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          num: increment++,
          ...doc.data(),
        }));
        console.log(data);
        setSnapshotData(data);
      });
  };

  const removeData = async id => {
    await database
      .collection(uid)
      .doc(id)
      .delete()
      .then(() => console.log('Document deleted')) // Document deleted
      .catch(e => console.log('Error deleting document', e));

    //getSnapshort();
  };

  const toggleComplete = async (id, complete) => {
    await database.collection(uid).doc(id).update({
      complete: !complete,
    });
    // getSnapshort();
  };

  const getData = async () => {
    if (uid == null) {
      return;
    }
    const userDoc = database.collection(uid).get();
    console.log('userDoc : ', userDoc.docs);
  };

  const setData = async () => {
    if (uid == null) {
      return;
    }
    await database.collection(uid).add({
      title: 'Add from APP',
      complete: false,
      article: 'Hello APP',
    });
    // getSnapshort();
  };

  const signUp = async (email, pass) => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        setError('User account created & signed UP!');
        console.log('User account created & signed UP!');
      })
      .catch(err => {
        setError(err.code);
        console.log(err);
      });
  };
  const signIn = async (email, pass) => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(userCredential => {
        console.log('User account signed IN! : ', userCredential);
        setUid(userCredential.user._auth._user.uid);
        console.log('UID : ', userCredential.user._auth._user.uid);
        setError('User account signed IN!');
      })
      .catch(err => {
        setError(err.code);
        console.log(err);
      });
  };

  const signOut = async () => {
    await auth()
      .signOut()
      .then(() => {
        setUid(null);
        setError('User signed out!');
        console.log('User signed out!');
        setSnapshotData([]);
      })
      .catch(err => {
        setError(err.code);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput {...username} style={styles.input} />
      <TextInput {...password} style={styles.input} secureTextEntry />
      <Button
        onPress={() => {
          signUp(username.value, password.value);
        }}
        title="Sign Up"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          signIn(username.value, password.value);
        }}
        title="Sign In"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          signOut();
        }}
        title="Sign Out"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          getData();
        }}
        title="Read data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          setData();
        }}
        title="Add data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          toggleComplete(true);
        }}
        title="Toggle Data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          removeData();
        }}
        title="Remove Data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          getSnapshort();
        }}
        title="getSnapshort"
      />
      {!loading ? (
        <FlatList
          keyExtractor={snapshotData.id}
          data={snapshotData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{flexDirection: 'row', height: 30}}
                onLongPress={() => {
                  removeData(item.id);
                }}
                onPress={() => {
                  toggleComplete(item.id, item.complete);
                }}>
                {/* <Text style={styles.text}>{item.num}</Text> */}
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.article}</Text>
                <Text style={styles.text}>{item.complete ? '+' : '-'}</Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <ActivityIndicator />
      )}

      <Text style={styles.status}>{error}</Text>
    </View>
  );
};
