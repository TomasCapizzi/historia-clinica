const useFilterRecords = ({filterRef, patients ,setPatientsFilter}) => {
    function filterPatients(){
        const filter = filterRef.current.value;
        if(filter.length >0){
            setPatientsFilter(patients.filter(item => item.interrogatory.name.toLowerCase().includes(filter)))
        } else{
            setPatientsFilter([]);
        }        
    }
  return {
    filterPatients,
  }
}

export default useFilterRecords