import React, {useState, useEffect, useRef} from 'react'
import Message from './message'
import { db } from '../firebase';
import { collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

const style = {
  chatContainer: 'flex flex-2 overflow-auto',
  messageContainer: 'flex flex-col justify-end',
};

const Chat_app = () => {
         const [messages, setMessages] = useState([]);
         const scroll = useRef();
       
         useEffect(() => {
           const q = query(collection(db, 'messages'), orderBy('timestamp'));
           const unsubscribe = onSnapshot(q, (querySnapshot) => {
             let messages = [];
             querySnapshot.forEach((doc) => {
               messages.push({ ...doc.data(), id: doc.id });
             });
             setMessages(messages);
           });
           return () => unsubscribe();
         }, []);


         // deleting function
         const handleDelete = (id) => {
                  // Delete message from Firebase Firestore
                  deleteDoc(doc(db, 'messages', id))
                };
                
                return (
                  <div className={style.chatContainer}>
                    <div className={style.messageContainer} ref={scroll}>
                      {messages &&
                        messages.map((message) => (
                          <div key={message.id}>
                            <button onClick={() => handleDelete(message.id)}>Delete</button>
                            <Message message={message} />
                          </div>
                        ))}
                    </div>
                  </div>
                );
              };

export default Chat_app