import {db} from '../Firebase/firebase';

const useDeleterecord = ({patient, setHandleRecord}) => {
    // Delete Record
    function deleteRecord(){
        db.collection('records').doc(patient[0].id).delete();
        setHandleRecord(false);
    }
  return {
    deleteRecord,
  }
}

export default useDeleterecord