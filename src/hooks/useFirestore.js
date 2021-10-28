import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const FOLDER = 'users';
const USER_DOC = 'WTxN0mZl71OJB6d0AASb';

//"AFxQ4_oyV7tejQXHvFasvwl6P1oKtZDwJQomBwRMhGrtHxoCyEJQvm6E9FObK18VF97AmZk5v8Hjv1kFBEn7rONgMP6ig_dehvhjL_o
// 96Fac0Ye8sujZLjYU_DFZrg_OOjqJpyTFbvS_SfiJqEdQW3rsNvHpwEgLmxO0Gh8TH0QEgVS2DorL7MXf4tHL1C_nSP0jfonn2anJ"

const useFirestore = () => {
  const [error, setError] = useState(null);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataShot, setDataShot] = useState([]);

  const database = firestore().collection(FOLDER).doc(USER_DOC);
  const authentication = auth();
  //   console.log('dataShot : ', dataShot);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.email + ' is logged in! : ', user);
      } else {
        console.log('User is logged out!');
      }
    });
  }, []);
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
          setDataShot(data);
        })
        .catch(err => console.log(err));
      setLoading(false);
      return () => listener;
    }
  }, [uid, database]);

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
    console.log('signIn');
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
        setDataShot([]);
      })
      .catch(err => {
        setError(err.code);
        console.log(err);
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
        setDataShot(data);
      });
  };

  return {
    signIn,
    signUp,
    signOut,
    uid,
    error,
    dataShot,
    getData,
    setData,
    toggleComplete,
    removeData,
    getSnapshort,
    loading,
  };
};

export {useFirestore};
