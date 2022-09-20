import { db } from "../Firebase/firebase";

const useGetRecordList = ({setPatients, setLoad}) => {
    
    function getList(user){
        const list = db.collection('records');
        list.onSnapshot(
            query => {
                const data = query.docs.map(
                    doc => ({
                        ...doc.data(),
                        id: doc.id
                    })
                )
                setPatients(data.filter(item => item.uid === user.currentUser.uid))
                setLoad(true)
            }
        )
    }
  return {
    getList,
  }
}

export default useGetRecordList