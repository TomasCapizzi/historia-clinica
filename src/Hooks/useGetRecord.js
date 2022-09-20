import {db} from '../Firebase/firebase';

const useGetRecord = ({setPatient, setLoad}) => {
    function getData(id){
        const list = db.collection('records');
        list.onSnapshot(
            query => {
                const data = query.docs.map(
                    doc => ({
                        ...doc.data(),
                        id: doc.id
                    }
                    )
                )
                setPatient(data.filter(item => item.id === id))
                setLoad(true);
            }
        )
    }
  return {
    getData,    
  }
}

export default useGetRecord